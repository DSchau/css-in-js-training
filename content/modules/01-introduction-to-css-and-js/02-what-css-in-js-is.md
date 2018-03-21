---
title: What CSS in JS Is
description: "When the term \"CSS in JS\" is used, what does that really mean? In this section, we'll define the term, and give some examples of common libraries and techniques of CSS in JS."
video: https://manning.com
diagrams:
  - Illustration of how CSS in JS injects styles
examples:
  - Our first CSS in JS styled component
takeaways:
  - High level understanding of some benefits of CSS in JS
  - High level understanding of style injection
---

CSS in JS is many things, but at its very foundation, it is, of course, writing styles with JavaScript. Many--perhaps even most--shudder at the mere mention. It goes against separation of concerns, and is an afront to this core concept!

However, as you'll quickly see, writing your CSS in JavaScript can have some real benefits to your application and code quality, and truly brings the component era to CSS, just as we've seen the component era come to Javascript with libraries and frameworks like React, Vue, Angular, and even web components. First, let's begin with a high-level illustration of how CSS in JS works.

## How CSS in JS works

Let's start with an illustration of a hello world example with styled-components, which is a CSS in JS library--that is both built with and requires React--that we'll be using for all of our examples:

```jsx
import styled from 'styled-components';

const Title = styled.h1`
  color: red;
`;

export default function HelloWorld() {
  return <Title>Hello World!</Title>;
}
```
