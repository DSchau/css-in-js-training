---
title: What CSS in JS Is Not
description: "Just as important as what CSS in JS is is what CSS in JS is not, or at least not in its most useful form. In this section, common misconceptions of what CSS in JS is not will be dispelled."
video: https://manning.com
diagrams:
  - All of the things that inline styles can't do
examples:
  - Button component written with inline styles
takeaways:
  - Knowing what an inline style is
  - Knowing the drawbacks of inline styles
---

CSS in JS is not--and I cannot stress this enough--inline styles. By its very definition, inline styles are, of course, an example of CSS in JS, but the true benefit and the real value of CSS in JS as a technique is with these newer libraries like styled-components. This raises the question... what is an inline style?

## Inline styles

An inline style is simply a style written with the `style` attribute. In the context of React, it's a style object, where properties are written with the camelCase notation, e.g. `background-color: red;` is written as

```jsx
function Button() {
  return <button style={{ backgroundColor: 'red' }}>Hello</button>;
}
```

as an inline style. This style is then serialized to a css string e.g. `<button style="background-color: red;">Content</button>`. With that introduction noted, why are inline styles non-ideal, and why is CSS in JS _not_ inline styles?

### Hard to extend

Inline styles are notoriously hard to maintain _and_ extend. So while an inline style does solve the inherent scoping issues of CSS, it does so in a way that is not what most would consider the most user-friendly nor developer-friendly. Consider this standalone button component to be used in other areas of our application:

```javascript
import React from 'react';

export function Button(props) {
  return (
    <button
      className={props.className}
      style={{
        backgroundColor: 'white',
        color: '#3ecf8e',
        border: 'none',
        borderRadius: 8,
        webkitTransition: '175ms ease-in-out',
        transition: '175ms ease-in-out'
      }}
    >
      Click me
    </button>
  );
}
```

When a consumer of this component attempts to style the button with a different background color, it will most likely be done with the traditional CSS approach, for example a class name and a separate stylesheet, like so:

```css
.custom-button {
  background-color: red;
}
```

```jsx
import React from 'react';
import { Button } from '../components';

import './custom-button.css';

export function CustomButton(props) {
  return <Button className="custom-button" />;
}
```

however, this will _not_ work like you'd expect, because we'll be bitten by CSS specifity rules. An inline style is more specific, and therefore takes precedence over a custom rule (`.custom-button`). To actually get this working, an `!important` rule will need to be added to our class, e.g.

```css
.custom-button {
  background-color: red !important;
}
```

As has been illustrated, an inline style is _hard_ to extend and so is not ideal from a developer friendliness perspective.

### Not functionally equivalent to CSS

Additionally, inline styles are just not as powerful as CSS. There are a great number of techniques in CSS that are incredibly powerful and make your application dynamic, responsive, and user friendly. The following great CSS features are not possible with inline styles:

* media queries
* hover effects
* `keyframe` animations
* pseudo styles (`:before`, `:after`, `:nth-child`, `:disabled`, etc.)

and a great number of other functionalities available in CSS that are just not possible with CSS! This makes a pure inline style approach incredibly hard to advocate for, as it is just not as powerful as traditional CSS approaches.

### Cognitive shift between CSS and style objects

Additionally, there is a required cognitive shift between style objects and CSS strings. A style object requires all properties to be camelCased and all values to be wrapped in quotes. This is a mental shift from writing CSS which does not require values to be enquoted, and has properties that are written as dasherized (e.g. `background-color`). Additionally, there are a number of browser specific rules that are not always clear _how_ they should be written as an inline style. For example, consider the following CSS:

```css
.alert {
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
}
```

How do we write the vendor prefixed properties with an inline style? `webkitUserSelect`? `WebkitUserSelect`? `-WebkitUserSelect`? This introduces a shift and confusion point, and is another concrete illustration for how inline styles can be harder for developers to pick up and use because of the cognitive shift between writing _real_ CSS and a style object!

Now that it has been made increasingly evident both what CSS in JS _is_ and _is not_ we can now shift to actual, real-world usage of CSS in JS and get to actually developing using the latest CSS in JS techniques utilizing styled-components and React!
