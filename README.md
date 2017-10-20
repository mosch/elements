<img alt="npm version" src="https://badge.fury.io/js/%40allthings%2Felements.svg"> <img alt="build status" src="https://travis-ci.org/allthings/elements.svg?branch=master">

# [@allthings/elements](https://github.com/allthings/elements)

[![Greenkeeper badge](https://badges.greenkeeper.io/allthings/elements.svg)](https://greenkeeper.io/)

> Elements is a set of **carefully crafted, high quality React UI components,** that Allthings uses to build their mobile app.

## Installation

Elements are available on [npm package](https://www.npmjs.com/package/@allthings/elements).

```sh
yarn add @allthings/element
```

Please note that `@allthings/element` are still under heavily development. Things may change a lot unitl we hit 1.0.0.

## Usage

Here is a quick example to get you started, it's all you need:

```jsx
import React from 'react';
import { render } from 'react-dom';
import Button from '@allthings/elements/molecules/Button';

function App() {
  return (
    <Button>
      Hello World
    </Button>
  );
}

render(<App />, document.querySelector('#app'));
```

## Examples

Are you looking for an full example project to get started?
[Check out this](https://github.com/allthings/elements-example).

## Documentation

Check out our [documentation website](https://allthings.github.io/elements/).
