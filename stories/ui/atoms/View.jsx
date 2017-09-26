import React from 'react'
import Text from 'components/Text'
import View from '@allthings/react-view'
import Example from '../../Example'
import Notes from '../../Notes'

class ViewStory extends React.Component {
  render() {
    return (
      <View>
        <Notes for={View} />
        <Example>
          <View />
        </Example>
      </View>
    )
  }
}

export default ViewStory
