import React from 'react'
import Button from '../../../src/molecules/Button'
import View from '@allthings/react-view'
import { action } from '@storybook/react'
import Example from '../../Example'
import Notes from '../../Notes'

class ButtonStory extends React.Component {
  render() {
    return (
      <View>
        <Notes for={Button} />
        <Example>
          <Button onClick={action('primary button')}>Primary</Button>
        </Example>
      </View>
    )
  }
}

export default ButtonStory
