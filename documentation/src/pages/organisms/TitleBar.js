import React from 'react'
import View from '@allthings/elements/atoms/View'
import Example from '../../components/Example'
import Notes from '../../components/Notes'
import TitleBar from '@allthings/elements/organisms/TitleBar'

class TitleBarStory extends React.Component {
  render() {
    return (
      <View>
        <Notes for={TitleBar} />
        <Example>{`
<ThemeProvider>
          <TitleBar alignH="space-between" color="blueIntense">
            <View direction="row" alignV="center">
              <SquareIconButton icon="ArmchairFilledIcon" iconColor="white" />
              <Text color="white" strong>
                Get Relaxed
              </Text>
            </View>
            <SquareIconButton icon="SearchFilledIcon" iconColor="white" />
          </TitleBar>
          </ThemeProvider>
        `}</Example>
      </View>
    )
  }
}

export default TitleBarStory
