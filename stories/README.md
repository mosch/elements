# Stories

- Is a development sandbox for components
- Is a showcase for components

## Write a story

1. **Write your story**
  - Create a new file in the `stories` directory
  - Name it after the component it's created for
  - Add a short description of your component
    - Which purpose does it serve?
    - Where is it used?
    - How does it work?
  - Include your component for a live example
  - Use HTML elements (except of your component, of course)
2. **Add it to the storybook**
  - The storybook resides in the `index.js` in the `stories` directory
  - Add the import of your story file to the top
  - Append a call to `storiesOf()` to the bottom
3. **Start the storybook**
  - In a console, execute `yarn storybook`
  - Open your browser at `http://localhost:6006`
  - The server supports hot-reloading

## Code skeletons

### Story

```javascript
import React from 'react'
import MyComponent from 'components/MyComponent'

export default function ButtonStory () {
  return (
    <div>
      <h1>My Component</h1>
      <p>Short description</p>
      <MyComponent />
    </div>
  )
}
```

### Add to the storybook

```javascript
import MyComponentStory from './MyComponent'

//...

storiesOf('MyComponent', module)
  .addWithInfo('to Storybook', () => (
    <MyComponentStory />
  )
)
```
