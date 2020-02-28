Hello and welcome to the fourth entry in “Know Your Linux” series, This time let’s talk about Linux’s processes.

Before diving right in 🏄‍♂️, Make sure to checkout the previous [entry](http://bassemmohamed.me/post/know-your-linux-03-permissions) in the series.

Now let’s get down to business, First off. WTF is a process?

## Linux’s Processes

A process is a running instance of a lunched executable program. That program could be a graphical application that the user is interacting with 💻 or a service that is running the background 🏃‍♂️. Every process must have :

- Pid. _You guessed it_ 🎉*!* Process id.
- PPid. _What now_ 🤔*?!* Parent process id.
- The process state.
- Address space of allocated memory
- Allocated system resources
- Security properties like ownership and privileges.

Every process is created by its parent process and inherits its properties from the parent. Also, Any process has the ability to create child processes through a method called **fork**. Hmmm now what about the first process? _Good question_ 👏*!* All processes are descendants of **systemd** which is the first system process and has a Pid of 1.

## Process’s states

Every process must have some kind of state. That changes according to circumstances.

| State Code |      State      | State description                                                                                                                           |
| :--------: | :-------------: | :------------------------------------------------------------------------------------------------------------------------------------------ |
|     R      |   Running 🏃‍♂️    | The process is either **running** in the CPU right now or waiting in the queue to run.                                                      |
|     S      | Sleeping (I) 😴 | The process is **interruptible**, which means it is waiting until a certain event (signal). Once it is satisfied it will return to running. |
|     D      |   Sleeping 😴   | The process is **uninterruptible**, which means it will not respond to signals. Used only under certain conditions.                         |
|     K      |   Sleeping 😴   | The process is **killable**. Same as D, but it only responds to the kill signal. _You know, Just in case_ 🤯.                               |
|     T      |   Stopped 🤚    | The process has been **stopped** usually by a user or another process. Could be resumed by another signal. _No worries._                    |
|     Z      |    Zombie 🧟    | The process is **exiting**. It released all its resources except the Pid. Just waiting to be terminated by the parent process.              |
|     X      |      Dead       | The process is **dead**. It exited successfully. _horraaaay_ 🎉!                                                                            |

That’s all from my side. ✋

If you enjoyed the post, please let me know and stay tuned for the next entry. 🙄

As always,

**Happy coding 🔥🔥**

**“كود بسعادة”**
