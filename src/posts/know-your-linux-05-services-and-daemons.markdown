Hello and welcome to the fifth entry in “Know Your Linux“ series. This time let’s talk about Linux’s services.

Before we dive right in 🏄‍♂️, make sure to checkout the previous [entry](http://bassemmohamed.me/post/know-your-linux-04-processes).

Do you have your diving mask on? Let’s go.

## WTF is a service or a daemon?

Daemons are a kind of non-interactive process that runs in the background. They basically are detached from the keyboard and display.

Services also do not need a terminal. They run in the background to provide some service like apache.

### All good and dandy, But what could we do?

I would like to introduce you guys to _`systemctl`._ What’s that? It’s a super cool program used to inspect and control services running on your machine. When it comes to services _`systemctl`_ is your friend.

There is so much that you can do with _`systemctl`._ We will discuss the most famous use cases. If you want to know more, You should definitely visit the _man_ pages. If you don’t know what the _man_ pages are. Take a quick look at my second [entry](http://bassemmohamed.me/post/know-your-linux-02-know-your-commands).

_`systemctl`_ is a command line program. All you need to do is type the command in terminal.

    systemctl COMMAND SERVICE

The service here is the command’s target. Basically it is the service you want to manage using *`systemctl`.* ex: apache2

What about the command? There is a list of commands you can do.

| Command | What it does?                                                            |
| :-----: | ------------------------------------------------------------------------ |
| status  | Returns the status of the service                                        |
|  start  | Attempts to start the service 🙏                                         |
|  stop   | Stops the service                                                        |
| restart | Restarts the service                                                     |
| reload  | Reloads the service’s configuration. This applies the new configuration. |
| enable  | Enables autostart on boot                                                |
| disable | Disables autostart on boot                                               |

## Service’s status

Now, Let’s see the different statuses that every service could have.

| Status Name | Status Description                                              |
| :---------: | --------------------------------------------------------------- |
|   loaded    | The service’s configuration files have been loaded successfully |
|   active    | The service is running or waiting for a certain event to run.   |
|  inactive   | The service is not currently running                            |
|   enabled   | The service will start at boot                                  |
|  disabled   | The service will not start at boot                              |

That’s all from my side. ✋

If you enjoyed the post, please let me know and stay tuned for the next entry. 🙄

As always,

**Happy coding 🔥🔥**

“**كود بسعادة”**
