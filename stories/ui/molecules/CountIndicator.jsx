import React from 'react'
import CountIndicator from '../../../src/molecules/CountIndicator'
import Relative from '../../../src/atoms/Relative'
import Text from '../../../src/atoms/Text'
import View from '@allthings/react-view'
import Example from '../../Example'
import Notes from '../../Notes'

class CountIndicatorStory extends React.Component {
  render() {
    return (
      <View>
        <Notes for={CountIndicator} />
        <Example>
          <Relative>
            <Text>Hello</Text>
            <CountIndicator top={0} left={35} count={123} />
          </Relative>
        </Example>
      </View>
    )
  }
}

export default CountIndicatorStory
