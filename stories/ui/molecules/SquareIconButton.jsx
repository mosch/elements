import React from 'react'
import SquareIconButton from '../../../src/molecules/SquareIconButton'
import View from '@allthings/react-view'
import Example from '../../Example'
import Notes from '../../Notes'

class SquareIconButtonStory extends React.Component {
  render() {
    return (
      <View>
        <Notes for={SquareIconButton} />
        <Example>
          <SquareIconButton icon="ArmchairFilledIcon" color="red" />
        </Example>
      </View>
    )
  }
}

export default SquareIconButtonStory
