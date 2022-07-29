---
title: Getting Canon Printers to Work With Cups On Linux For Noobs
date: 2022-07-19
tags: ["software"]
layout: post.njk
url: /posts/getting-canon-printers-to-work-with-cups-on-linux-for-noobs/index.html
---

## Introduction

There is a canon printer at my home for some months already, but I haven't used
in since last week. I thought you cannot print papers using my machine since Canon do
not have any support for Linux. Actually I was wrong, and there is a very good
amount of Canon drivers in the Arch User Repository. So here it is, a guide for
those who do not know anything about (Canon) printers (of course I am one of
them).

## CUPS

Most Linux user will use CUPS, which is an open-source printing system. With
that you can issue commands to your printer. You can do that with the CLI, or
with the web interface. First though, you have to install CUPS. If you are using
a desktop environment, CUPS is already installed. If you are using a standalone
tiling window manager (that's a mouthful, I will just call it WM). Just install
`cups` with your package manager.

You have to start the CUPS service if you want to print. I am on Arch, so it is
activated by systemd with `sudo systemctl enable --now cups`.

## Network Printers

If the printer is connected to your computer, then it should be simpler.
However, if you are using printers that are connected to your LAN, then things
become trickier.

I am not going to pretend I understand anything here, so I just quote two arch
wiki pages:

> To discover, make use of discovered or share printers using DNS-SD/mDNS, setup
> .local hostname resolution with Avahi and restart cups.service.

> Avahi provides local hostname resolution using a "hostname.local" naming
> scheme. To enable it, install the nss-mdns package and start/enable
> avahi-daemon.service.

So there are a few steps we have to do:

- edit `/etc/nsswitch.conf` and change the following line from:

```txt
hosts: mymachines resolve [!UNAVAIL=return] files myhostname dns
```

to

```txt
hosts: mymachines mdns_minimal [NOTFOUND=return] resolve [!UNAVAIL=return] files myhostname dns
```

- restart `avahi` and `cups`

## `system-config-printer` GUI

I have originally written some command line instructions, but later wrote this
one instead. The command line instruction below barely works and the default
CUPS web interface is broken. We will use a GUI application that works out of the box
instead. Install `system-config-printer` onto your computer and open it.

It looks a bit like the GNOME printer settings, but actually works. Here are the
steps you need:

1. Give yourself sudo privileges
2. Click the add button
3. Click "find network printers" on the left sidebar
4. Enter the IP of that printer.
5. Lots of results will show. It will fill out the connection string, name,
   description and so on. **You don't have to enter any of that**.

Of course, you should enable cups, avahi first and install the drivers first. I
am not sure if `system-config-printer` will assist you to do these things. As I
have said above, it works every time I restart the printer or reboot my machine.

## About the Default CUPS Interface

If you hate `system-config-printer` for some reason, you can still access the
page at `localhost:631`. It barely works for me, printing test pages work but
for normal documents it is broken. Also, the user interface is elusive. They
include the operations in a dropdown list but not buttons. I have never used it
ever since I know `system-config-printer`.

To be clear I am not bashing the developers of that web application, since there
is a higher chance that I have configured something wrong. How much do I know
about printers and drivers? None. Your grandma probably knows more about
printers than me. Go try it yourself and see if it works.

## Printing in Zathura

Do you know zathura accepts commands? Just like vim, you can type `:` and hit
`<Tab>`. A menu will show the commands that are inside zathura. For me, commands
like "help" and "info" shows nothing. Is it a bug? Anyway, the object today is
`:print`, not other commands. To print, type `:print`. A printing dialog will be
shown. It is quite unfortunate that this command do not receive other arguments.
It would be so useful if we can supply a page address (e.g. `:1,3print`) to the
command. You can print with CUPS on the command line anyway, so it is not a huge
problem.
