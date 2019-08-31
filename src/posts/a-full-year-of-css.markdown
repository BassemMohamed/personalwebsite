### A full year of CSS

During the first year of my career, I worked in a digital marketing agency as a full stack web developer. In that field, the main focus was on user experience, good-looking designs, and SEO. It took me a while to know my way around web development. I had no idea how to build a fully responsive page at first. But near the end of my first year, I developed several websites for big brands.

In this article, I would like to share with you what are my rules when it comes to writing CSS.

### The power of CSS 💪 :

I used to think that CSS is not that big of a deal. Anyone with a rules sheet can be good at it. Thank god, It didn’t take me so long to know that I was deeply mistaken.

CSS is as complex as any other language. Actually, CSS have different [methodologies](https://www.hongkiat.com/blog/css-writing-methodologies/). Responsive designs have different [approaches](https://www.uxpin.com/studio/blog/a-hands-on-guide-to-mobile-first-design/), CSS also have extension languages built upon it like [Sass](https://sass-lang.com/). Some people are creating awesome creative [animations and effects](https://www.creativebloq.com/inspiration/css-animation-examples) using plain CSS.

What I really like about CSS is that the code quality, the effort, and the developer’s skill can be clearly seen in the final design.

### CSS guidelines I follow 🙄 :

### Think hard about your selectors 🤔

When adding a new CSS rule, give yourself a moment and think about how you will write your selector. Think about its impact. Think about which elements you want to style. Think about which elements you want to avoid. I often find myself fixing issues added by my latest rules. That’s a tedious and frustrating process. Knowing the full impact of your selector will save you time and effort.

### Only add what you really need 🧐

People usually use trial & error to polish and achieve just the right design. That’s a good way of doing it, I use it all the time. But you have to make sure to clean your CSS, to remove every ineffective or unwanted rule you added in the process. They may have no effect at the time being, But they could lead to hard to trace issues in the future. A good tip is to use the browser’s developers tool to try out any new rules. Then apply only the needed rules for your layout to the CSS files after you are finished.

### Avoid !important at all costs ✋

Have you ever been in one of those situations where **you just can’t overwrite a CSS rule!** Well, I have, It is very tempting to just use !important. But you really shouldn’t, As this will most likely just postpone the problem. Better yet, take a step back, fix this at its root cause. However, sometimes when dealing with third-party libraries, It could be very hard to overwrite without using *!important*. Especially when they add their rules using javascript or inline style. Just keep it as a last resort.

### If it could be done in CSS, Do it in CSS 👌

Whatever you are trying to do, It could be an animation or a simple popup, If you can implement it using CSS. Do it in CSS. I know that some people prefer javascript, It could give you more control, it could even be easier. But CSS is less resilient, better optimized and most important, Its loads much faster than javascript. Think about that before adding another javascript plugin.

That’s it. Basically, CSS is just like any other programming language. Writing cleaner code takes practice and focus. But it increases code quality and readability which saves lots of time and effort when adding or modifying later. Following the above guidelines helped me a lot in my journey, I hope they help you too. Let me know, Will you? 🙄🙄

**Happy coding** 🔥🔥

###
