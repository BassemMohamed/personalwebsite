Hey devs from all over the world 😊

In today's post, I want to tell you all about React's performance. How can we optimize our react components to reduce the number of undesired re-renders? I will be talking about React's `PureComponent` class, `Memos` and the truly awesome `shouldComponentUpdate` method.

Oki, As most of you know. React uses the virtual DOM 🔥to reduce the costly real DOM manipulation operations. This virtual DOM is a representation of the actual DOM but built with javascript. **When a component updates,** React builds the new virtual DOM then compares it with the previously rendered one to decides whether an actual DOM update is required or not. 👨‍⚖️

That what makes React stand out from other frontend frameworks out there. 🥇Now, Let's talk about how to make **your React components stand out**. 💪

## The perfect React's component doesn't exist. 🤯

Ohh yeah! I love [minimalism](https://www.google.com/#q=Minimalism) and I like to think that we are applying it's concepts here. Think about it for a second. **LESS CODE == LESS TROUBLE**, isn't it? 🤯

We can discuss this in another article though. In our today's article, it is more like **LESS RE-RENDERS == MORE PERFORMANCE**, We want to stabilize our component's as much as we can. cause every re-render means that react will **at least** check for the difference between new and old virtual DOM. If we don't need that re-render in the first place. That just means computations down the drain. which is obviously **a big no-no** when it comes to performance. 🙅‍♂️

## shouldComponentUpdate to the rescue 🚀

I am sure most of you guys know about `shouldComponentUpdate` but if you don't, let me give a quick introduction. It is a component lifecycle method that tells React whether to continue updating the component or not. It runs every time there is a change in the props or the state and it defaults to true.

So for example, if we have a component with a `shouldComponentUpdate` like this :
```
    shouldComponentUpdate(nextProps, nextState) {
    	return false;
    }
```
It will basically never ever update without forcing it. `shouldComponentUpdate` doesn't get called for the initial render or when `forceUpdate()` is used.

> Wait a sec! Are you saying we should write a shouldComponentUpdate method by hand for every component just to prevent a couple of undesired renders ?! 🤯Nobody got time for this! 😠

Not exactly! 🙄

## What is React's PureComponent? 🤔

It is similar to React's component class but it implements `shouldComponentUpdate` with a **shallow** prop and state comparison by default.

In other words, every prop/state update in a PureComponent will not trigger re-render unless there is a **shallow** difference between current & previous props or current & previous state.

This **shallow** part is a little tricky, as it could lead to false-negatives ( Not updating when we actually want a re-render ) in the case of complex data structures like arrays or objects. let's go for an example.
```
    state = {
    	itemsArray: []
    }

    onSomeUserAction = (item) => {
    	const itemsArray = this.state.itemsArray;
    	itemsArray.push(item);
    	this.setState({ itemsArray })
    }
```
Now imagine this scenario where we have an array in the state and we want to push an item into that array on some user action.

This will actually produce a false negative if it is a `PureComponent`. After this `setState`, `shouldComponentUpdate` will **shallowly** compare the old state to the new one just like this `this.state == nextState` and because our itemsArray reference is exactly the same this condition will be truthful and the PureComponent will not re-render. This is also a similar case for objects like this example.
```
    state = {
    	user: {}
    }

    onSomeUserAction = (name) => {
    	const user = this.state.user;
    	user.name = name;
    	this.setState({ user })
    }
```
### Immutable everywhere 🙌

We can fix this issue by using `forceUpdate()` but thats not exactly elegant and it goes against everything we just said so scrap that!

What we should do is create a new object/array every time like this :
```
    state = {
    	itemsArray: []
    }

    onSomeUserAction = (item) => {
    	const itemsArray = this.state.itemsArray;
    	this.setState({ itemsArray: [...itemsArray, item] })
    }
```
or in case of objects
```
    state = {
    	user: {}
    }

    onSomeUserAction = (name) => {
    	const user = this.state.user;
    	this.setState({ user: {...user, name} })
    }
```
Using some not so new JavaScript features like destructing and the spread operator. It doesn't only look cooler but it is also considered a whole new object. Now the `this.state == nextState` is no longer truthful and the `shouldComponentUpdate` is no longer producing a false-negative.

Now, what about functional components? Well, you should use `Memo` for that like this
```
    const MyComponent = React.memo(function MyComponent(props) {
      /* render using props */
    });
```
`Memo` is just like `PureComponent` but for functional components instead of classes.

With `PureComponent` or `Memo` and creating new object/arrays with `setState`, We can now safely celebrate our better performing components, give yourselves a great round of applause. 👏👏

You made it all the way here! Thanks for reading and I really hope you enjoyed it. If you did, Don't forget to let me know and if you really liked it follow me on twitter to never miss a future post. 😊

As always,

**Happy coding 🔥🔥**

“**كود بسعادة”**