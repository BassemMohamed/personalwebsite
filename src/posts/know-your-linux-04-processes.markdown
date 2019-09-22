Hello and welcome to the fourth entry in “Know Your Linux” series, This time let’s talk about Linux’s processes.

Before diving right in 🏄‍♂️, Make sure to checkout the previous entry in the series.

[ Link to Know your linux 03 ]

Now let’s get down to business, First off. WTF is a process?

Linux’s Processes

A process is a running instance of a lunched executable program. That program could be a graphical application that the user is interacting with 💻 or a service that is running the background 🏃‍♂️. Every process must have :

- Pid. _You guessed it_ 🎉*!* Process id.
- PPid. _What now_ 🤔*?!* Parent process id.
- The process state.
- Address space of allocated memory
- Allocated system resources
- Security properties like ownership and privileges.

Every process is created by its parent process and inherits its properties from the parent. Also, Any process has the ability to create child processes through a method called **fork**. Hmmm now what about the first process? _Good question_ 👏*!* All processes are descendants of **systemd** which is the first system process and has a Pid of 1.

Process’s states

Every process must have some kind of state. That changes according to circumstances.

[Untitled](https://www.notion.so/a7441df98d8c415ca73408f58e73ece3)

That’s all from my side. ✋

If you enjoyed the post, please let me know and stay tuned for the next entry. 🙄

As always,

**Happy coding 🔥🔥**

**“كود بسعادة”**
