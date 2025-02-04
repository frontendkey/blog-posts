---
"title": "How this blog was created"
"description": "Introducing technologies that are being used to create this blog & difficulties I faced during the process."
"id": 2
"date": "5 April 2023"
---
# Hello World

In this article, I'll be sharing my experiences on the creation of this blog, as well as cool frameworks and libraries that are being used to build this up.

> ### Links
> - [Source code of the blog](https://github.com/leecheeyong/blog)
> - [Source of content](https://github.com/frontendkey/frontendkey.github.io)
> - [Link to blog](https://blog.joelee.works)

Cool, let's get started ! 

First, I would like to introduce the framework I'm using --- [Vue](https://vuejs.org).
This was my first ever former project made using Vue and the goal is to get familiar with this framework.
Not sure why I picked this over other JavaScript framework for building such application, for instance [React](https://react.dev), but I assume that it was because its easier to understand and learn with my current programming skills.

It was kind of weird that I have been learning the options API (as well as using it at the beginning), and the composition API was there the whole time. To me, options API was difficult to use and read but I quickly switched to composition API after knowing its existence. 

### Performance 

Honestly, this was my first time using such framework and back then I used to do everything with [ejs](https://npmjs.com/ejs), little amount of Javascript for the frontend and thought that Javascript framework was bad and would slow down the performance. Turns out this is not certainly true, I was able to get similar performance score on [Pagespeed Insight](https://pagespeed.web.dev) for both Vue App & pure HTML, (few lines of Javascript for some simple tasks) & CSS and it shocked me. Well obviously older devices/browser may struggle to execute vast amount of Javascript, but I don't think this should be concerned, anyways I still do prefer to only use CSS for animation if possible and strip as much Javascript code as possible, maximize performance maybe !?

### Dark Mode 

Dark mode toggle is necessary for an application like this (lots of reading) and I started with [Vue Ref](https://vuejs.org/api/reactivity-core.html) and [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage), this was my earliest idea and it was not simple to implement, but I still got mine to work, sorta. 

Since mine was not stable, I scouted the internet and found [@vueuse/core](https://npmjs.com/@vueuse/core), this library implements lots of useful features into a Vue application, this includes the dark mode toggle feature. Heck it was so simple to implement this with just few lines of code !
```js
import { useDark, useToggle } from '@vueuse/core'
const isDark = useDark()
const toggleBg = useToggle(isDark)
```

How about the page design, you might ask. I was lazy this time and decided not to code a custom CSS styling for this project, and I used a CSS framework --- [Tailwind CSS](https://tailwindcss.com) instead.

### Why Tailwind CSS ?

I was able to implement/setup and get both Vue and Tailwind CSS to work together flawlessly with just few lines of commands and code, awesome.
Tailwind CSS did a good job on marketing and it caught my eyes I guess... But anyways, it is an amazing framework that is well documented and easy to use. Speaking about easy to use, you should check out [Tailwind UI](https://tailwindui.com), I use Tailwind UI for most part of the styling (Navigation bar, footer and many more), it is also easy to customize to fit your needs although there are many components that are locked behind the paywall, which is very annoying.

Now let's talk about security. I've implemented [dompurify](https://npmjs.com/dompurify) on both server and client side to prevent XSS (Cross site scripting). Unlike [Svelte](https://svelte.dev), Vue does not filter out Javascript code on content render and this may allow an attacker to execute malicious code on a visitor's browser without their consent.

### Contents

Last but not least, let's talk about where the contents of this blog were stored and used. 

Contents in this blog were written as markdown and will be converted into HTML upon page load (part of client side rendering). These contents are stored on Github and fetched from Github CDN (content delivery network). I was lazy to code another interface for writing blog (might as well require an interaction with databases) and to keep it simple, I think that storing these contents on Github should be a reliable and convenient way of doing. With that said, Github Action is being used to sanitize and arrange everything. 

### Conclusion

This was an amazing experience, I've learnt a lot about Vue and Tailwind CSS. And yes, I would like to give a shoutout to all the open source libraries, you can find them here at [README.md](https://github.com/leecheeyong/blog#readme)

Almost forgot about hosting, currently I'm using [Vercel](https://vercel.com) to host this blog and the Vercel free tier is superb. Vercel does a real good job on hosting such application and I would definitely recommend this service. 

Woah, can't believe I've just finished my first blog, damn was that crazy. Anyways, hope you enjoy reading my blog. Thank you.
