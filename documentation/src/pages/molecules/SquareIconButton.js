import React from 'react'
import SquareIconButton from '@allthings/elements/molecules/SquareIconButton'
import View from '@allthings/elements/atoms/View'
import Example from '../../components/Example'
import Notes from '../../components/Notes'
import ResourceProvider from '@allthings/elements/behaviour/ResourceProvider'

class SquareIconButtonStory extends React.Component {
  render() {
    return (
      <ResourceProvider>
        <View>
          <Notes for={SquareIconButton} />
          <Example>{`
            <SquareIconButton icon="armchairFilled" color="red" iconColor="white" />
          `}</Example>
        </View>
      </ResourceProvider>
    )
  }
}

export default SquareIconButtonStory
