import React from 'react'
import Text from '../../../src/atoms/Text'
import View from '../../../src/atoms/View'
import Example from '../../Example'
import Notes from '../../Notes'

class ViewStory extends React.Component {
  render() {
    return (
      <View>
        <Notes for={View} />
        <Example>
          <View fill direction="row" alignH="flex-end">
            <Text>Say Hello!</Text>
          </View>
        </Example>
      </View>
    )
  }
}

export default ViewStory
