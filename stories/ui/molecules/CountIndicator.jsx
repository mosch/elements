import React from 'react'
import CountIndicator from 'ui/molecules/CountIndicator'
import Relative from 'ui/atoms/Relative'
import Text from 'components/Text'
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
