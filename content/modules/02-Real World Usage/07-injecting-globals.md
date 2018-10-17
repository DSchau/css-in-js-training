---
title: Injecting globals
description: "Injecting \"globals\" (i.e. targeting body, html, etc.) is naturally possible with traditional CSS because traditional CSS is global. How do we use global styles with a CSS in JS architecture? Find out with this section!"
video: https://manning.com
---

CSS is inherently global. Anytime you target a class or selector, an element, effectively anything with CSS you are accessing a global style scope. For instance consider:

```css
h1 {
  color: red;
}
```

The above selector will make _every_ first level heading on the page `red` unless CSS specifity rules dictate that a more specific selector wins out and overrides the red color.
