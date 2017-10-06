import React from 'react'
import SquareIconButton from '../../src/molecules/SquareIconButton'
import View from '@allthings/react-view'
import Example from '../Example'
import Notes from '../Notes'
import ResourceProvider from '../../src/behaviour/ResourceProvider'

class SquareIconButtonStory extends React.Component {
  render() {
    return (
      <ResourceProvider>
        <View>
          <Notes for={SquareIconButton} />
          <Example>
            <SquareIconButton icon="armchairFilled" color="red" iconColor="white" />
          </Example>
        </View>
      </ResourceProvider>
    )
  }
}

export default SquareIconButtonStory
