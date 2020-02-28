Hello and welcome to the first entry in “Know your Linux” series. I recently finished a Redhat course and I wanted to share what I learned with you. We shall discuss several topics. For now, I have no idea how many posts this series will be. Let’s just dive right in and see how it goes. 🏄‍♂️

First off, Let’s talk about Linux’s directory structure. It does confuse people at first 😵, especially people who came from a windows background like me. Don’t panic! Once you get to know it. It doesn’t feel so bad at all. 😷

![The-Linux-Directory-Structure](https://i.ibb.co/ygNNhRR/The-Linux-Directory-Structure.png)

This image shows the directory structure of Redhat Enterprise Linux. That is a Linux distribution developed by Red Hat for the commercial market. The directory structure could change slightly across different distros. Also, different distros could be using a certain directory in different ways. But we will go through the most common directories and their most common use case. 🧐

### bin :

Short for binaries, which is just another word for applications. In Linux there is a rule _“Everything is a file”_, even the shell commands. This folder contains the most basic binaries that don’t require superuser permissions to run like **cat** or **ls**.

### sbin :

Short for system binaries, This folder contains the binaries that require root permissions to run like **ifconfig** or **fdisk**.

### boot :

This folder contains everything your system needs to boot. eg: boot-loaders. Usually, you won’t need to play around in there.

### dev :

Do you remember the rule *“Everything is a file”*. Well, that also goes on devices like your hard disk, flash memory or your printer 🖨️. Linux creates a file for each device and uses it later to interact with that device. This folder contains all of the devices. Typically all applications will require access here.

### var :

Variable data specific to this system that should persist between boots. Files
that dynamically change eg: databases, cache directories, log files and website content.

### etc :

Some say it’s short for _“ET Cetera”_, Others say it's short for *“Edit to configure”.* This is where all your system-wide configuration lives. If you are spinning up an apache web server, for example, you would need to come here to configure it. Another etc folder could be found in each user’s directory for user-wide configuration. As a developer, I could say you will be spending some good time inside this directory.

### tmp :

A world-writable space for temporary files. Files which have not been accessed, changed, or modified for X days are deleted from this directory automatically.

### home : 🏠

Each user 👱🏼 has his own personal folder with his name under this home directory. This folder contains his personal files and user-wide config. Each user has permission to access his own folder only. 🔐

### root :

This acts as the home directory for the administrative superuser, root. 👴🏼

### lib :

Here, you can find libraries. Those are files that applications use to do certain functions.

### run :

This directory is not persistent which means it gets cleared on reboot. It contains runtime data for services and processes.

It all depends on what are you doing with Linux. If it’s a web server you would typically need to play around in **var** and **etc** directories. If it’s your personal computer you would be spending lots of time in the **Home** directory.

See what I mean? I hope it doesn’t feel too confusing anymore. Let me know, Would you? ☺️

Which directories do you use the most?

If you enjoyed the post, please let me know and stay tuned for my next entry.

As always,

**Happy coding 🔥🔥**

“**كود بسعادة”**
