Hey, devs from all over the world!! 🤗

In today's post, I wanna talk about my personal website building journey. What technologies I am using? and why? Also, It has gone through two versions. Each using totally different technologies. Let's talk about those two.

Ohh by the way! It is live at https://bassemmohamed.me. It is still far from complete. But, If you want to talk a quick look. Be my guest. Even better, you could tell me if you liked it! Can't wait!! 🤤

## Why a personal website anyway? 🤔

Well, I wanted to have my own space that can act as a bio and a blog. I didn't care much for analytics nor traffic (still don't 😏). I just needed a free space for me to tell people about myself, my thoughts and my interests. Also, It is a bit of something to brag about. I like being able to apply for a position and fill in that `personal website` field. Just makes me feel good about myself, boosts my confidence.

## Now that we covered the **WHY** let's dive into the **HOW 🏊‍♂️**

Before we start, This post is not intended to be technology pros and cons list or a guide on how to build your personal website. It is just how I did it. I am sure there are better ways out there. I am just sharing my short journey.

### First off, What is the checklist? 🗒

1. Personal bio (Simple about page will do. Not a big deal 😎)
2. Blog (A bit tricky 😓)
3. Limited budget (Got no money for this shit 💸)
4. Quick and easy (I have work to do, you know 👨‍💻)

I looked around for a bit, read a few articles, saw some videos. In the end, Wordpress felt like a match made in heaven. It's built with `PHP` which I am familiar with. It has a rich editor and an open-source license. Also, It is very quick to set up and start with.

## Let's get down to business (First trail).

I got my domain and my hosting service up and running. Digital ocean offered droplets with Wordpress pre-installed which was perfect for me. All I had to do was to add an SSL certificate. Then, I started on the most important part. Building the UI. In Wordpress terms, I built my own mini Wordpress theme. It didn't take long because the website was very minimalistic. Home, About and Post page. That's it!

**Time to party!** I have my own website!! 🎉🎉

### It's not all good and dandy 😔

After a while. It was some random normal day when I decided to check my site out. To my surprise. I was greeted with this error message `Error Establishing a Database Connection` 😨, I didn't do anything! I don't post that often and there is hardly any traffic. What has gone wrong? I had no idea!! 🤔

After failing miserably in debugging the issue myself. I contacted Digital ocean's support. They told me that it is a Wordpress issue, not a hosting one and It may be fixed by increasing the droplet's specs. I didn't wanna do that ✋. So I decided it was time for an easier approach.

I am a ReactJS developer. Why do I have my site in Wordpress anyway?! Well, At first I thought that the blog would be impossible without some sort of an editor and a database. That's basically what attracted me to Wordpress in the first place. **Turns out,** I was wrong.

## Markdown to the rescue.

Markdown! What's that?! According to Wikipedia: `A lightweight markup language with plain text formatting syntax. Its design allows it to be converted to many output formats. Markdown is often used to format readme files, for writing messages in online discussion forums, and to create rich text using a plain text editor.`

You know that `readme.md` file in almost every Github repository? `md` stands for markdown.

For example, This markdown snippet :

```markdown
# H1 heading

** Bold text **
```

Can be converted to HTML like this :

```HTML
  <h1>H1 heading</>
  <b>Bold text</b>
```

Super cool right?! Not just headings and bold text. It supports tons of stuff. Take a look at the [cheat sheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

### What does that have to do with anything? 🤔

That means that we can replace the database and the editor with just some markdown files. One for each article. The only thing we need is that awesome [ReactJS library](https://github.com/rexxars/react-markdown). `React Markdown` parse markdown files and outputs their corresponding HTML.

Of course, I will have to add the markdown file manually every time I want to publish a new post. Which is something I will gladly do If it means that my website will be built in my favorite language `Javascript`.

Now, the site is fully built with ReactJS. That's basically it! ⌛

If you liked this post, Make sure to never miss a future one by [following me on twitter](https://twitter.com/BassemMohamed94).
And if you really liked it. Please let me know in the comments below. ✍️

As always,
**Happy coding 🔥🔥**
**“كود بسعادة”**
