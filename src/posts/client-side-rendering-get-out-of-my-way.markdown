Hey devs from all over the word 🤗

Recently, I published my personal website - https://bassemmohamed.me - on the world wide web. It is built using ReactJS and you can check out my short development journey on [my latest blog post](https://dev.to/bassemmohamed/i-built-my-own-personal-website-yaaay-4mbf)

In today's post, however. I would like to share with you my deployment journey. How I deployed my react app on `Digital Ocean` (my hosting service), what is the issue I ran into and how I tackled it.

Spoiler alert! StackOverFlow helped a lot.

## Get it ready for launch 🚀

For convenience, I am using `Create React App` to kick start my project. It helps me focus on coding and forget all about setup and configuration. All I had to do to get my react app production-ready was to run this simple command `npm run build`. Which bundles the project in the `build` folder and optimizes it for the best performance.

You could read more about `Create React App` [here.](https://create-react-app.dev/docs/getting-started)

## 3.2.1... LAUNCH!! 👨🏽‍🚀

I had the `build` folder ready. My hosting server had apache up and running. All I had to do was to launch the content of that folder into the `/var/www/html` directory on the server. I used an FTP client called `FileZilla`. The launch was successful in a couple of minutes. Yaaay!

That's it! Right? Party time? 🎊🎈

Turns out, **NO!! 🙅**

## It's not all good and dandy 🤨

The website was _technically_ working. But something big was not right. If I visit any other page and then refresh, I get a **404**💀. Only the home page could be accessed directly by URL. **Why is that?!** I had no idea! 😕

My inexperienced mind was blown to pieces. 🤯😵

Don't worry!! I ended up fixing the issue 🤓😎 (with some StackOverFlow help of-course😅). Before I tell you guys all about that. Let's first clarify something. 🧐

### Server-side vs Client-side rendering

Since forever, Websites used to be server-side rendered. You visit a certain directory on the server depending on the route and you end up with an HTML, CSS and JS filled with site's content and that is rendered on the browser.

ReactJS however, doesn't work this way. React is client-side rendered. That means that the server initially responds with an empty HTML template and then React handles the routing and fills that template with content from the server depending on the route.

### Ummm, So what? Why 404 though? 🧐

When visiting a URL like this [https://bassemmohamed.me/blog](https://bassemmohamed.me/blog) directly. Apache serves whatever in the `blog` directory on the server (SSR). The problem is `blog` folder totally doesn't exist. 😳

The only one who knows about this route is ReactJS (CSR). It should be the one handling the routing not apache. But unfortunately, React didn't even load in the client's browser because it will only be served to the client from the root directory, not the `blog`. and that is why every router is working fine **only if** it was accessed through the home page.

Crazy! right? 🤯 Am I even making sense? 😅

### We can fix it though, Can't we? 🤓

Sure, yeah. Turns out, Easy fix too. What we need is to use a `.htaccess` file to catch all requests to the server and always serve what is in the root directory.

.htaccess file :

    Options -MultiViews
    RewriteEngine On
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteRule ^ index.html [QSA,L]

I had to enable the rewrite module in apache and change a bit of configuration. then I added this `.htaccess` file on the server.

Now hitting [https://bassemmohamed.me/blog](https://bassemmohamed.me/blog) serves content from [https://bassemmohamed.me](https://bassemmohamed.me/blog) instead. But then on the browser, React's client-side rendering fires up and renders the content from the /blog.

Ohh, by the way. [Here is the StackOverFlow question that saved the day.](https://stackoverflow.com/questions/27928372/react-router-urls-dont-work-when-refreshing-or-writing-manually) 🤗

That's it from my side ✋. Ball's in your court ⚽. If you like this article make sure to comment below. and if you really liked it. You are gonna have to [follow me on Twitter to never miss a future post.](https://twitter.com/BassemMohamed94) 🤗

As always,

**Happy coding 🔥🔥**

**“كود بسعادة”**
