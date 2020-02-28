Hello and welcome to the second entry in the “Know your Linux” series. This time let’s talk about Linux's commands and how to write them efficiently.

Let’s just dive right in 🏄‍♂️. Shall we?

## Command format

Each command entered in the terminal have three parts:

- **Command :**
  This is the name of the program you want to execute.

* **Options :**
  They adjust the program’s behaviour. They normally start with one or two dashes _( -a or —all )_

- **Arguments :**
  They are the target that the program will execute on.

Wanna an example? Sure! 👍

Consider the following simple command :

```
usermod -L morgan
```

_usermod_ is the name of our **command** (application) which is used to modify users. The *-L* **option** tells the application to lock the password, While _morgan_ is the command’s **argument**. In short, This command is locking morgan's password.

To use a command effectively. You need to know what it does exactly. You need to know what options and arguments it can take ( The command’s syntax ). But there are tons of options and arguments. How could you possibly know them all? 🙄

Well, You can’t. If only there was some kind of documentation that you can use when stuck 🤔

**SPOILER ALERT** ✋

There is. Yaaaaaay! 🎉

Know your commands

Actually, There are three cool sources that you can use to find out more about a certain command, application, service, config files and much more.

## The call for help

Most commands have a **-h** or —**help** option that prints useful info like a description of what the command does ( usage statement ), a list of options and arguments the program expects and what they do.

    usermod --help

This usually prints lots of text. It could be inconvenient to scroll through. There is something that we could do though.

    usermod --help | less

There is 2 new additions to the command here.

The first thing is the | symbol. This is called a pipe. It is used to send the output of its lefthand side as an input to its righthand side.

The second thing is *less* command which is a pager. A pager is a program that causes the output of any command to be displayed one screenful at a time for readability and convenience.

There is another program that could be helpful here called *grep.* Let’s say you want to search for the word “home” in the *usermod* help text. Here is what you will have to do

    usermod --help | grep home

This time we are using the pipe to send the help text to _grep_. Which filters the text and only print lines with the word “home”.

## Consult the manual

There exists a manual pages that can be viewed using the **man** command. It takes the name of the program as an argument and displays much more info than the call for help method. For example, you could do

    man usermod

That will let you view the manual page associated with the usermod program. \*\*

The manual pages provide much more information like configuration files, system calls, library routines and the kernel. Also, The man program automatically sends its output through a pager for readability and convenience.

Are you thinking what I am thinking? Can we man the man? Sure you can! Its LINUX. come on go try it out.

    man man

I really encourage everyone to man stuff up. Even if it’s a command that you are already familiar with. Go check its man page, You might learn a thing or two.

You already did? The manual pages are not enough for you? Want bigger documentation? Do you need to know it all?

## info / pinfo

They contain a whole lot more than the manual pages. Some people prefer man as it is shorter and straight to the point. While, others like to have all the info presented to them. Its a matter of preference. 😊

You can use them just like man

    info usermod

    pinfo usermod

I know you are asking, Whats the difference between _info_ and _pinfo_? Well, Both have exactly same content. But, _pinfo_ is somewhat more advanced than the original _info_ in terms of interface and formatting. Also, *pinfo* supports colors. Which is awesome of course! 😎

That’s all from my side. ✋

If you enjoyed the post, please let me know and stay tuned for the next entry. 🙄

As always,

**Happy coding 🔥🔥**

“**كود بسعادة”**
