---
title: What CSS in JS Is Not
description: "Just as important as what CSS in JS is is what CSS in JS is not, or at least not in its most useful form. In this section, common misconceptions of what CSS in JS will be dispelled."
video: https://manning.com
takeaways:
  - An understanding that CSS in JS is _not_ inline styles
---

CSS in JS is not--and I cannot stress this enough--inline styles. By its very definition, inline styles are, of course, an example of CSS in JS, but the true benefit and the real value of CSS in JS as a technique is with these new libraries like styled-components. First, let's define what an inline style is, and then we'll begin explaining how it differs from CSS in JS.

## Inline styles

Inline styles are notoriously hard to maintain _and_ extend. So while an inline style does solve the inherent scoping issues of CSS, it does so in a way that is not what most would consider the most user-friendly nor developer-friendly.

```javascript
import React from 'react';

export function Button(props) {
  return (
    <button
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
