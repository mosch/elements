import React from 'react'
import Spinner from '@allthings/elements/atoms/Spinner'
import ListSpinner from '@allthings/elements/molecules/List/ListSpinner'
import View from '@allthings/elements/atoms/View'
import Example from '../../components/Example'
import Notes from '../../components/Notes'

class SpinnerStory extends React.Component {
  render() {
    return (
      <View>
        <Notes for={Spinner} />
        <Example>{`<Spinner />`}</Example>
        <Notes for={ListSpinner} />
        <Example>{`<ListSpinner />`}</Example>
      </View>
    )
  }
}

export default SpinnerStory
