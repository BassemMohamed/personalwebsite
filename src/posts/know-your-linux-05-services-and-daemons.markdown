Hello and welcome to the fifth entry in “Know Your Linux“ series. This time let’s talk about Linux’s services.

Before we dive right in 🏄‍♂️, make sure to checkout the previous entry.

{% link [https://dev.to/bassemmohamed/know-your-linux-04-processes-1d6m](https://dev.to/bassemmohamed/know-your-linux-04-processes-1d6m) %}

Do you have your diving mask on? Let’s go.

# WTF is a service or a daemon?

Daemons are a kind of non-interactive process that runs in the background. They basically are detached from the keyboard and display.

Services also do not need a terminal. They run in the background to provide some service like apache.

## All good and dandy, But what could we do?

I would like to introduce you guys to _`systemctl`._ What’s that? It’s a super cool program used to inspect and control services running on your machine. When it comes to services _`systemctl`_ is your friend.

There is so much that you can do with _`systemctl`._ We will discuss the most famous use cases. If you want to know more, You should definitely visit the _man_ pages. If you don’t know what the _man_ pages are. Take a quick look at my second entry.

{% link [https://dev.to/bassemmohamed/know-your-linux-02-know-your-commands-23k7](https://dev.to/bassemmohamed/know-your-linux-02-know-your-commands-23k7) %}

_`systemctl`_ is a command line program. All you need to do is type the command in terminal.

    systemctl COMMAND SERVICE

The service here is the command’s target. Basically it is the service you want to manage using *`systemctl`.* ex: apache2

What about the command? There is a list of commands you can do.

[Untitled](https://www.notion.so/a62653a6f559463e8e2fc2782a03268a)

# Service’s status

Now, Let’s see the different statuses that every service could have.

[Untitled](https://www.notion.so/fb1d65668ebf4ddd8b08a23653c70d37)

That’s all from my side. ✋

If you enjoyed the post, please let me know and stay tuned for the next entry. 🙄

As always,

**Happy coding 🔥🔥**

“**كود بسعادة”**
