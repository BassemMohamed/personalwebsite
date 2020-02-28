Hey 👋, Welcome back to another blog post. This time, Let’s see how can we pass data through React’s component tree like a **BOSS** 😎

## What is the normal ( non-BOSS ) way?

Let’s first see the easiest way. Just pass the data as props through the whole tree. Imagine the following scenario, We have a component called StatusComponent that renders a simple text describing the status of the application. For our example application here we have the following tree :

**Our example app's component tree :**

-> App

-> -> HomePage

-> -> -> SideBar

-> -> -> -> StatusComponent

Of course, I am going for a small example application here. Real life ones could be dozens of components. This means non-optimal approaches could have a drastically bad effect on maintainability and readability.

    // App is calling the HomePage and passing those data as props
    <HomePage
    successMsg=“App initialized”
    loadingMsg=“Loading app…”
    errorMsg=“Error encountered"
    serverDownMsg="Server down, Try again later!"
    />


    // HomePage is calling SideBar and passing its props along
    <SideBar
    successMsg={this.props.successMsg}
    loadingMsg={this.props.loadingMsg}
    errorMsg={this.props.errorMsg}
    serverDownMsg={this.props.serverDownMsg}
    />


    // SideBar is calling StatusComponent and passing its props along
    <StatusComponent
    successMsg={this.props.successMsg}
    loadingMsg={this.props.loadingMsg}
    errorMsg={this.props.errorMsg}
    serverDownMsg={this.props.serverDownMsg}
    />


    // Finally, StatusComponent is using the data passed all the way from App
    switch(state) {
    case normal : return <p{this.props.successMsg}/>;
    case loading : return <p{this.props.loadingMsg}/>;
    case error : return <p{this.props.errorMsg}/>;
    case serverDown : return <p{this.props.serverDownMsg}/>;
    }

That’s easy and straightforward. 👍 But, It could be very bad if used all over the component tree. 👎 You will keep on passing data across the tree. Your components will get too big too quickly. The code will be repeated. ( God forbids! 😠 )

What can we do? How can we optimize this? Let’s first analyze the above code! 🧐 There are two factors at play here :

1. Number of variables holding the data ( in our case 4 )

2. Number of components the data have to pass through, Here its only 2. The App has the data and the StatusComponent is consuming it. That leaves us with the HomePage and the SideBar.

I have two tactics in my disposal 🔥. Each tactic will address one of the factors.

## Group them variables :

Let’s tackle the first factor, The number of variables holding the data.

**This is Javascript!** We can simply just group the 4 into 1. Just don’t group any variables you find though. Try to group logically related ones only. Fortunately, In our case, all of the 4 variables are related.

    // App is calling the HomePage and passing those grouped variables as props
    <HomePage
    messages= {
    successMsg:”App initialized",
    loadingMsg:”Loading app…",
    errorMsg:”Error encountered",
    serverDownMsg:"Server down, Try again later!"
    }
    />


    // HomePage is calling SideBar and passing its props along
    <SideBar
    messages={this.props.messages}
    />


    // SideBar is calling StatusComponent and passing its props along
    <StatusComponent
    messages={this.props.messages}
    />


    // Finally, StatusComponent is dividing the grouped variable passed all the way from App
    switch(state) {
    case(success)    : return <p>{this.props.messages.successMsg}</p>
    case(loading)    : return <p>{this.props.messages.loadingText}</p>
    case(error)      : return <p>{this.props.messages.errorText}</p>
    case(serverDown) : return <p>{this.props.messages.serverDownText}</p>
    }

This looks better, doesn’t it? Can we call it a day?

NO! Still, There is something here that can be optimized! Can you tell already? The HomePage and the SideBar don’t actually need that data. They are just acting as a bridge for the data to pass through. I smell **CODE REPETITION** 🧐😠. But we can’t just remove that. Or can we? 😈

## Use React Context :

Let’s tackle the second factor, The number of levels the data have to be passed through the tree. What we need here is context.

According to React docs, **Context** provides a way to pass data through the component tree without having to pass props down manually at every level. That is perfect for global data like locale preference and UI theme. Where data is required by many components within an application.

Wanna see an example? Sure!

    // First we create a context
    const MessageContext = React.createContext({
    successMsg:”App initialized",
    loadingMsg:”Loading app…",
    errorMsg:”Error encountered",
    serverDownMsg:"Server down, Try again later!"
    });

    // App render method
    <MessageContext.Provider>
    <HomePage />
    </MessageContext.Provider>

    // HomePage is calling SideBar without passing props
    <SideBar/>


    // SideBar is calling StatusComponent without passing props
    <StatusComponent/>

    // StatusComponent receiving its required data from the context instead of its parent
    static contextType = MessageContext;
    render() {
    switch(state) {
    case(success)    : return <p>{this.context.successMsg}</p>
    case(loading)    : return <p>{this.context.loadingText}</p>
    case(error)      : return <p>{this.context.errorText}</p>
    case(serverDown) : return <p>{this.context.serverDownText}</p>
    }
    }

As you can see in the code above. We are not passing data as props. Using context, We don’t care how many components deep we have to go through. Data from context is accessible from anywhere in the component tree.

You can find more details in the [React context documentation page](https://reactjs.org/docs/context.html).

Did you find this article useful?

Did you already know about all this?

Please, Let me know in the comments below.

As always,

**Happy coding 🔥🔥**

“**كود بسعادة”**
