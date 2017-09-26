import React from 'react'
import View from '@allthings/react-view'
import Example from '../../Example'
import Notes from '../../Notes'
import TitleBar from 'ui/organisms/TitleBar'
import Text from 'components/Text'
import SquareIconButton from 'ui/molecules/SquareIconButton'
import ThemeProvider from 'ui/behaviour/ThemeProvider'

class TitleBarStory extends React.Component {
  render() {
    return (
      <View>
        <Notes for={TitleBar} />
        <Example>
          <TitleBar alignH="space-between" color="blueIntense">
            <View direction="row" alignV="center">
              <SquareIconButton icon="ArmchairFilledIcon" iconColor="white" />
              <Text color="white" strong>
                Get Relaxed
              </Text>
            </View>
            <SquareIconButton icon="SearchFilledIcon" iconColor="white" />
          </TitleBar>
        </Example>
      </View>
    )
  }
}

export default TitleBarStory
