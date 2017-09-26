import React from 'react'
import Spinner from 'ui/atoms/Spinner'
import ListSpinner from 'components/List/ListSpinner'
import View from '@allthings/react-view'
import Example from '../../Example'
import Notes from '../../Notes'

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
