---
title: What CSS in JS Is
description: "When the term \"CSS in JS\" is used, what does that really mean? In this section, we'll define the term, and give some examples of common libraries and techniques of CSS in JS."
video: https://manning.com
diagrams:
  - Seperation of concerns not technologies
  - Illustration of how CSS in JS injects styles
examples:
  - Our first CSS in JS styled component
takeaways:
  - An understanding that separation of concerns is not seperation of technologies
  - High level understanding of some benefits of CSS in JS
  - High level understanding of style injection
---

CSS in JS is many things, but at its very foundation, it is, of course, writing styles with JavaScript. Many--perhaps even most--shudder at the mere notion. It goes against separation of concerns, and is an afront to this core concept!

![Seperation of Concerns, but accurate](./images/seperation-of-concerns.png)

However, the phrase is seperation of concerns _not_ seperation of technologies. Even though the style layer (CSS) and dynamic business logic layer (JavaScript) are separate _technologies_ it is incredibly likely that rules, constants, and other shareable pieces of data will _need_ to be shared between your style and busines logic, so why not make this sharing as clean as possible utilizing CSS in JS?

As you'll quickly see throughout this course, writing your CSS in JavaScript can have some real benefits to your application and code quality, and truly brings the component era to CSS, just as we've seen the component era come to Javascript with libraries and frameworks like React, Vue, Angular, and even web components.

To understand what CSS in JS is, it is helpful to briefly describe how it actually works! Let's segway into a brief, high-level discussion of how CSS in JS works, and what it does.

## How CSS in JS works

Let's start with an illustration of a hello world example with styled-components, which is a CSS in JS library--that is both built with and requires React--that we'll be using for all of our examples.

```jsx
import styled from 'styled-components';

const Title = styled.h1`
  color: red;
`;

export default function HelloWorld() {
  return <Title>Hello World!</Title>;
}
```

<!-- INSERT DIAGRAM HERE -->

It's really that simple! We import `styled` from the library `styled-components` which is distributed via NPM. We author our styles as a template string, which is then translated into a _real stylesheet_ in our document. This feels incredibly natural to anyone familiar with CSS because you're effectively authoring _with_ CSS. Everything you know and love from CSS is maintained, including media queries, pseudo styles (like `:before`, `:after`, `:hover`, etc.) and everything else _great_ about CSS.
