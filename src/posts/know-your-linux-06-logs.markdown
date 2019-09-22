Hello and welcome to the sixth and final entry in "Know Your Linux" series. This time let’s talk about Linux’s logging.

Before we dive right in 🏄‍♂️, make sure to check out the previous entry.

{% link [https://dev.to/bassemmohamed/know-your-linux-05-services-and-daemons-3i13](https://dev.to/bassemmohamed/know-your-linux-05-services-and-daemons-3i13) %}

Ready to dive in? Let’s go.

## Why logging?

Well, Logging acts as your friend and advisor when the customer comes yelling **WHY IS IT NOT WORKING?**, It helps you understand the flow of the application and identify the causes of different problems. Without logging, It could be very hard to answer the big question **what went wrong?**

## Logging in Linux

Linux - like other operating systems - provides logs on everything from kernel events to user actions. We can thank two services for that _`systemd-journald` and `rsyslog`._ All the collected logs by default are stored in the directory `/var/log`.

Wanna know more about what services and daemons are? checkout the previous entry.

{% link [https://dev.to/bassemmohamed/know-your-linux-05-services-and-daemons-3i13](https://dev.to/bassemmohamed/know-your-linux-05-services-and-daemons-3i13) %}

Wanna know more about how Linux structures its directories?

{% link [https://dev.to/bassemmohamed/know-your-linux-01-directory-structure-ad6](https://dev.to/bassemmohamed/know-your-linux-01-directory-structure-ad6) %}

## Configuring logs

The `rsyslog` configuration file is `/etc/rsyslog.conf`, It has the following syntax :

    facility.priority;facility.priority;... path

For example :

    *.info;mail.none;authpriv.warning; /var/log/mailog

We have 3 terminologies at play here :

- Facility: The type of application producing the log files, ex: mail, cron or authpriv
- Priority: The severity of the log produced by a certain application
- Path: Location of the log file where logs should be stored

We can override the `/etc/rsyslog.conf` in any file `*.conf` file under the `/etc/rsyslog.d` directory.

To prevent a certain facility from logging, the priority field can be set to **none**, which means that none of the logs from this facility will be added to the specified log file.

From the example above, We can see that the file `/var/log/maillog` will contain the following :

1. `*.info` Logs with priority set to info from all facilities.
2. `mail.none` None of the mail facility logs.
3. `authpriv.warning` Only warning from the authpriv facility.

### Log Priorities

The table below shows all priorities and their meaning.

[Untitled](https://www.notion.so/4297f041c26d432ca2d82bb3c0ec361e)

## Do logs stay forever?

Typically the log files are saved under `/var/log` which is a persistent directory but not forever. The service responsible for rotating the logs is called `logrotate` \**which is designed to ease administration of systems that generate large numbers of log files. It allows automatic rotation, compression, removal, and mailing of log files. Each log file may be handled daily, weekly, monthly, or when it grows too large. *Isn't it awesome?\* 🕶️

That’s all from my side ✋, That's also the last entry in "Know Your Linux" series, Make sure to check out previous entries. Also, Don't forget to tell me your thoughts in the comments bellow 🙄

As always,

**Happy coding 🔥🔥**

“**كود بسعادة”**
