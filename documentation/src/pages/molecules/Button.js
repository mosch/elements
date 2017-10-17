import React from 'react'
import Button from '@allthings/elements/molecules/Button'
import View from '@allthings/elements/atoms/View'
import Example from '../../components/Example'
import Notes from '../../components/Notes'

class ButtonStory extends React.Component {
  render() {
    return (
      <View>
        <Notes for={Button} />
        <Example>
{`<ThemeProvider>
    <Button>Primary</Button>
</ThemeProvider>`}</Example>
      </View>
    )
  }
}

export default ButtonStory
