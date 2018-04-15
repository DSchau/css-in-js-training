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
  - What a styled component looks like
  - How to style a button with styled-components
---

CSS in JS is many things, but by its very definition, it is writing styles with JavaScript. However, how does this actually work? What is it doing, and at a foundational level, what does this mean?

### What it is

CSS in JS is a mechanism to inject styles via JavaScript. At its very most basic, inline styles can be used to inject an inline style, e.g. the following React component

```jsx
import React from 'react';

export function CustomButton() {
  return <button style={{ backgroundColor: 'red' }}>Click me</button>;
}
```

will be compiled to the following HTML

```html
<button style="background-color: red;">Click me</button>
```

However, for a variety of reasons (hint hint: the next section discusses why this is not ideal) inline styles have tended to fall out of favor with the advent of libraries like [styled-components][styled-components].

styled-components is a JavaScript library packaged and distributed with the NPM registry. This means that it can be installed and utilized just as easily as with any other dependency, for example React, lodash, etc. styled-components huge innovation was in allowing styles to be authored just as they are in CSS with what is effectively real CSS. Let's take a look at our first styled component!

```jsx
import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: red;
`;

export function CustomButton() {
  return <Button>Click me</Button>;
}
```

The huge innovation with styled-components is that it allows the author to write styles scoped at the component level easily, simply, and without the comparatively large cognitive shift between authoring in CSS and authoring with traditional CSS in JavaScript approaches--e.g. inline styles.

### How it does it

The core novel concept of styled-components is that it injects a _real_ stylesheet into your application. This means that all the familiar syntax of CSS, including all your favorite feature of CSS (e.g. media queries, hover styles, flexbox, etc.) are maintained and continue to work as is. Additionally, because a real stylesheet is maintained, that means that we get to write what is and feels like _real_ CSS, without camelCasing our rules and with the features we expect!

#### Injection

Let's consider our `CustomButton` component once more.

```jsx
import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: red;
`;

export function CustomButton() {
  return <Button>Click me</Button>;
}
```

As noted, `styled-components` is a JavaScript package that we install with NPM. All valid HTML tags (e.g. `div`, `h1`, `p`, etc.) are exposed as part of it's API, so for instance `styled.button` will export a _styled_ `button` HTML element with the defined style. Under the hood, a stylesheet is created like so:

```html
<style data-styled-components="">
.sc-fAjcbJ {
  background-color: red;
}
</style>
```

and the custom `button` component is injected with the generated class name. For example, any time this button component is used, it will have the following structure

```html
<button class="sc-fAjcbJ">Click me</button>
```

[styled-components]: https://www.styled-components.com/
