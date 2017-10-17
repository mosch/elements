import React from 'react'
import CountIndicator from '@allthings/elements/molecules/CountIndicator'
import View from '@allthings/elements/atoms/View'
import Example from '../../components/Example'
import Notes from '../../components/Notes'

class CountIndicatorStory extends React.Component {
  render() {
    return (
      <View>
        <Notes for={CountIndicator} />
        <Example>{`<ThemeProvider>
  <Relative>
    <Text>Hello</Text>
    <CountIndicator top={0} left={35} count={123} />
  </Relative>
</ThemeProvider>`}</Example>
      </View>
    )
  }
}

export default CountIndicatorStory
