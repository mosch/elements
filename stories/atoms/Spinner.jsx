import React from 'react'
import Spinner from '../../src/atoms/Spinner'
import ListSpinner from '../../src/molecules/List/ListSpinner'
import View from '@allthings/react-view'
import Example from '../Example'
import Notes from '../Notes'

class SpinnerStory extends React.Component {
  render() {
    return (
      <View>
        <Notes for={Spinner} />
        <Example>
          <Spinner />
        </Example>
        <Notes for={ListSpinner} />
        <Example>
          <ListSpinner />
        </Example>
      </View>
    )
  }
}

export default SpinnerStory
