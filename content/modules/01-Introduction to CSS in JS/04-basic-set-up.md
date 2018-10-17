---
title: Set up
description: "Getting started with CSS in JS techniques could not be easier, but there's still some necessary set up and explanation. Let's dive in!"
video: /video/Unit1-Introduction_to_CSS_in_JS/U1-M4-Set_up.mp4
diagrams:
  - Illustration of the flow of integration styled-components into an application
takeaways:
  - How to install and use styled-components in an application
---

As anyone can readily and quickly attest: setting up and integrating new technologies (e.g. loading CSS with Webpack, setting up CSS Modules, etc.) can be an incredible struggle. But you're in luck... styled-components could not be easier to get set up, even with an existing application structure and build tooling.

### Install

styled-components is distributed with the NPM registry, as are many other packages in the modern web toolkit like React, lodash, d3, etc.

```bash
npm install styled-components
```

This command will install `styled-components` into the `node_modules` folder and update `package.json` with the dependency, e.g.

```json
{
  "dependencies": {
    "styled-components": "~3.0.0"
  }
}
```

This means that if node_modules is deleted, or if someone else on your team wants to pick up where you left off, they'll automatically get `styled-components` installed when `npm install` (or `yarn`!) is run as `package.json` is the source of truth for dependencies and other build metadata.

### Import

This section presumes that modern build tooling (we're using create-react-app) is configured for your application, e.g. a toolchain that minimally includes Babel to transpile ES2015+ to ES5, as well as some type of module bundler. If your application doesn't have this configured, check out [updating tooling][#updating-tooling].

#### Updating a file

As we're using create-react-app for this project and these lessons, the general directory structure is all components are under the `src` directory. Let's open up `src/App.js` and add styled-components!

```jsx
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
```

Simply add the following line to import `styled-components` and begin using CSS in JS with styled-components!

```jsx{2}
import React, { Component } from 'react';
import styled from 'styled-components';
import logo from './logo.svg';
```

woo hoo! We've now imported the API of styled-components and we can begin using it to implement modern CSS in JS techniques. Yes. It really is _that_ easy!

### Standalone lessons

As you follow along with the units, I've set up a collection of exercises that that can be completed to enforce the content presented within this course content. Check them out [here][lessons]

---

#### Updating tooling

<!-- this is a bonus lesson -->

Oh no! You've inherited a legacy application, or modern build tooling hasn't yet been set up on this application. Do not fear! Check out _this video_ (insert video here) to check out how to update build tooling to enable importing JavaScript dependencies via NPM and module bundling.

[lessons]: https://github.com/DSchau/styled-components-units
