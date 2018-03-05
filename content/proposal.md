---
title: Proposal
---

## Who am I

My name is Dustin Schau, and I’ve been a front-end developer for the bulk of my professional career, about five or so years now, but much longer as an amateur. I started off my career designing and developing an internal component library for a  Fortune 200 company used by 95% of internal applications. From there, I started working on hybrid mobile applications built with Cordova, and released a number of applications to both the Google Play store as well as the iOS App Store. Lately, I’ve found myself becoming more and more involved in the local community and I’ve given talks on a number of frontend topics, ranging from Webpack, Angular, React, to of course, CSS in JS. 

My talk on CSS in JS was actually picked up by a front-end focused web conference in Oklahoma City called ThunderPlains. In preparation for the presentation, I created a web application ([css-in-js-playground.com][cssinjsplayground]) which has been extremely well received by the community (recently featured by CSS Tricks as one of the best frontend tools of the year!). The application lets the user switch through a number of the most common CSS in JS libraries to get a better feel for what it feels like authoring CSS in JS with that library, as well as lets the user change out content which will be instantly reflected in the preview.

As far as my qualifications as a teacher, I haven’t as of yet done any video teaching, but I have done a number of in-person workshops (as well as presentations) so I believe myself to be someone who is more than able to communicate effectively. Just as importantly, with my background in delivering workshops, I have oftentimes found it can be challenging to strike a balance between too easy and too challenging, and I feel confident that I will be able to strike that balance and truly deliver something engaging for audiences of all skill levels with this course.

## About the course

This course is intended to alleviate any misinformation around the concept of CSS in JS, while also laying bare the foundation upon which CSS in JS was laid, why it matters, and the incredible things these techniques can do for an application.

The course will begin by first defining what CSS in JS _is_ and what it _is not_. From this foundational perspective, we can then construct the argument for why CSS in JS exists and what problems it’s intending to solve. From this point forward, we’ll deep dive into how it solves these problems and specifically some “real world” examples of some solutions to common problems that CSS in JS can solve cleanly and clearly. We’ll finish with advanced features like server side rendering, theming support, and even some brief demonstrations of native CSS in JS (e.g. React Native).

The course is intended to be consumed in "bite size" videos, each of which is approximately 5 minutes. In its entirety, the course should contain approximately 3 - 4 hours of content.

## Who is the learner? What do they know? What don’t they know?

The “learner” for this course is someone who wants to grow in their knowledge of alternative CSS techniques (like CSS in JS) I’d like to think of the ideal learner as someone in one of the following categories:

**Beginner**

Someone who has developed an application or two, and is familiar with the syntax and practices of frontend development, as a whole, but also in authoring CSS. This person probably has a single “style.css,” and no significant build tooling in place.

**Intermediate**

Someone who has developed a number of applications, and has used tools and techniques like SASS, LESS, or CSS Modules (itself CSS in JS!) to better structure their styling. He/she likely has used build tools like Gulp, Grunt, Webpack, etc. to structure and modularize their application styling.

**Advanced**

Someone who has developed a great deal of applications, and has likely used tools like SASS, LESS, CSS Modules, etc. _and_ has also at least experimented with CSS in JS techniques like styled-components, glamorous, etc.

**Requirements**

- Basic familiarity with CSS
  - Rules, selectors, and class names
  - Media queries
  - Pseudo styles (`:hover`, `:focus`, etc.)
  - Flexbox
- Basic familiarity with React
  - CSS in JS does not necessarily _require_ React, but to really teach the most interesting libraries and concepts, most of that is happening in the React ecosystem
  - Through this training, we will primarily be using the library styled-components, which is a product of, and primarily used in, the React ecosystem
- Basic understanding of ES2015+, specifically:
  - Template literals
  - Arrow functions
- Willingness to learn and try something new!

## What will the learner learn to _do_?

High level, the course will start as more informational (i.e. drawbacks of CSS, how CSS solves them, etc.) and then quickly get into real development to keep it interesting and applicable. We’ll build a form component, complete with branding and validation styling, as well as support theming (e.g. a dark mode!).

- Differentiate CSS in JS from inline styles, and recognize the benefits of CSS in JS over a solution like inline styles
- Understand the problems (that they have likely faced without realizing it!) present in traditional CSS architectures
- Understand the benefit(s) that CSS in JS provides, e.g.
  - Style encapsulation
  - Bringing the “component era” to styles/CSS
  - Prop injection
  - Theming support
  - Linking of view and style
- How CSS in JS actually works
  - i.e. that it creates a real stylesheet under the hood, and the performance impact of this
- Common libraries for instrumenting CSS in JS
  - As well as libraries that don’t require React
- Best practices for authoring with CSS in JS
- The drawbacks of CSS in JS, and when it might make sense to use other techniques

## The project

Our project is quite simple, but we are simply going to iteratively build up a form--or perhaps something more interesting--(like one seen on [css-in-js-playground.com][cssinjsplayground]), but definitely something that will be real-world applicable _and_ demonstrate the benefits of CSS in JS. Through this, we can build up the foundational concepts of CSS in JS (e.g. style encapsulation, props injection, theming, etc.) while also illustrating familiar concepts like media queries, hover styles, etc.

The “labs” will be utilizing some type of interactive development environment, either an augmented version of [css-in-js-playground.com][cssinjsplayground] tailored to teaching, or perhaps something like CodeSandbox or something in-house. We will first introduce the CSS in JS--what it is, and is _not_, and then immediately get to building smoething!

## What can the learner do with these skills

As React tends to be non-opinionated about much else outside of the **v**iew in MVC, we previously saw a great many competing libraries attempting to solve things like state management, routing, and other expected app-like utilities.

With the advent of CSS in JS and its explosive growth, we haven’t yet standardized on a definitive library. This course outlines the argument for why CSS in JS techniques are so persuasive and how it can offer tangible value to a developer or development team.  From this basis, the developer actually gains experience with using a CSS in JS library (styled-components), and gets a real feel for the development experience of CSS in JS writ large, as well as some of the real-world usage examples that we will go through.

With this increased understanding of CSS in JS, a developer will feel empowered to make a decision as to whether CSS in JS offers tangible benefit for his/her application, or if their are perhaps other techniques (e.g. CSS Modules) that may be more appropriate for his/her application. Regardless or where we end up, it’s truly the ability to make an informed decision that is the true benefit of this course, and it is the goal above all else that each and every developer will be able to make an informed, measured, and reasonable decision as to their next styling solution.

## Competitive Analysis

As best as I can tell, I haven’t seen any CSS in JS courses available via video learning. There have been a number of recorded presentations (mine included!), screencasts, as well as a great number of blog posts on the topic, but zero training focused courses.

This puts us in a great competitive advantage, as we can deliver something to the market that hasn’t been quite tapped yet but of which I believe there to be a great demand!

## Schedule

Collectively, I’d like around four to six months to get the course content put together, and I’d like to break it up into about two week chunks and possibly have milestones and status updates during these two week cycles.

### First Month

- Formalization of course content and getting familiar with video recording style
- Planning and additional work re: the product we’re building (e.g. formalization on design, functionality, etc.)
- Further refinement of course content
  - By the end of this month, I'd have to at least have a fairly firm idea of each 5 minute video I'll be recording
- This section is intentionally light, as to get more familiar with video recording, content, stylistic/tone concerns, etc.

### Second Month

- Writing the scripts/agenda for the first few sections
- Starting to record at least the first few sections, and getting more familiar with video training

### Third Month

- Writing scripts/agenda for next 1-2 sections
- Authoring with CSS in JS video recording
- Advanced CSS in JS video recording

### Fourth Month

- Writing scripts/agenda for last few sections
- Recording and polishing videos for last few sections

### Fifth and Sixth Months (as needed)

If needed, I'll use the last 1-2 months to polish any content, or go back and tweak stuff that may have changed or has since been improved. Perhaps some training(s) can be revisited/redone upon second glance, and some extra padded time to revisit and _perfect_ will be useful here.

## Course Content

1. Introduction of CSS in JS
    - What CSS in JS is
    - What CSS in JS is not
        - Specifically, how CSS in JS is not “inline styles”
1. Authoring with CSS in JS (styled-components + React)
    - Basic set up (CodeSandbox and/or CSS in JS Playground)
    - Your first styled component
    - Pseudo styles, media queries, and hover effects, oh my!
    - Injecting Props
    - Inheritance
    - Animation
    - Extensibility (e.g. allowing components to be customized)
    - Using CSS in JS with existing libraries (e.g. Bootstrap, Foundation, etc.)
1. Advanced CSS in JS
    - Theming
    - Server side and/or static rendering
    - Global injection
    - When does it _not_ make sense to use CSS in JS libraries?
1. Roll your own CSS in JS (e.g. CSS in JS in Vue or Angular)
    - CSS Modules
    - Automated tooling
        - Scoped styles (a la Vue scoped styles, Angular scoped styles, etc.)
    - Libraries that do not require React (JSS, Fela, inline styles, etc.)
1. Wrap Up
    - Other libraries (e.g. Glamorous, Emotion, etc.)
        - This will sort of necessarily have a React focus since we've already covered other libraries
    - Drawbacks of CSS in JS
    - Recommended next steps/call to action

[cssinjsplayground]: https://css-in-js-playground.com
