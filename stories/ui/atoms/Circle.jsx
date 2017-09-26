import React from 'react'
import View from '@allthings/react-view'
import Example from '../../Example'
import Notes from '../../Notes'
import Circle from '../../../src/atoms/Circle'

class CircleStory extends React.Component {
  render() {
    return (
      <View>
        <Notes for={Circle} />
        <Example>
          <View direction="row" alignV="center">
            <Circle color="primary" />
            <Circle color="#bada55" radius={20} />
            <Circle color="gray" radius={10} />
          </View>
        </Example>
      </View>
    )
  }
}

export default CircleStory
