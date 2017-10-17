import React from 'react'
import Text from '@allthings/elements/atoms/Text'
import View from '@allthings/elements/atoms/View'
import Example from '../../components/Example'
import Notes from '../../components/Notes'

class ViewStory extends React.Component {
  render() {
    return (
      <View>
        <Notes for={View} />
        <Example>{`
<ThemeProvider>
    <View fill direction="row" alignH="flex-end">
      <Text>Say Hello!</Text>
    </View>
</ThemeProvider>
        `}</Example>
      </View>
    )
  }
}

export default ViewStory
