import React from 'react'
import View from '@allthings/react-view'
import Example from '../../Example'
import Notes from '../../Notes'
import Editor from '../../Editor'

import ThemeProvider from '../../../src/behaviour/ThemeProvider'

import Button from '../../../src/molecules/Button'

class ThemeProviderStory extends React.Component {
  render() {
    return (
      <View>
        <Notes for={ThemeProvider} />
        <h3>How themes are provided</h3>
        <p>To get started with theming, first wrap your application in the &lt;ThemeProvider&gt;.</p>
        <Editor mode="diff" code={`import React from 'react';
+ import {
+   ThemeProvider
+ } from '@allthings/elements/behavior/ThemeProvider';

  export default class Application extends React.Component {
    render() {
      return (
+       <ThemeProvider theme={{primary: 'red'}}>
          <Button>
            This is a red button
          </Button>
+       </ThemeProvider>
      );
    }
  }`} />
        <h3>How to theme a component</h3>
        <p>
          To make a component themable a higher-order-component (HoC) is
          provided. With this HoC you can wrap your component.<br />
          <pre>withTheme(Component, [mapThemeToProps], [displayName])</pre>
        </p>
        <Editor
          code={`import { withTheme } from '../../../src/behaviours/ThemeProvider'`}
        />
        <p>
          Simply wrap a component with <code>withTheme</code> and a property{' '}
          <code>theme</code> is passed in:
        </p>
        <Editor
          code={`const Component = ({ theme }) => (
  <div style={{ background: theme.primary }}>Component</div>
)

const ThemedComponent = withTheme(Component)`}
        />
        <p>
          You can also directly map the theme values to the properties via the
          second parameter <code>mapThemeToProps</code>. All other properties
          will also be passed through.
        </p>
        <Editor
          code={`const Component = ({ background }) => (
  <div style={{ background }}>Component</div>
)

const ThemedComponent = withTheme(
  Component,
  theme => ({ background: theme.primary })
)`}
        />
        <Example>
          <ThemeProvider theme={{ primary: '#ffe464' }} root>
            <View direction="column" flex="nogrow">
              <Button>Default button</Button>
              <br />
              <ThemeProvider theme={{ primary: '#333' }}>
                <View flex="flex" direction="column">
                  <Button>Themed button</Button>
                  <br />
                  <Button color="#e225ae">Customized + themed button</Button>
                </View>
              </ThemeProvider>
            </View>
          </ThemeProvider>
        </Example>
      </View>
    )
  }
}

export default ThemeProviderStory
