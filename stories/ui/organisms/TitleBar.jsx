import React from 'react'
import View from '@allthings/react-view'
import Example from '../../Example'
import Notes from '../../Notes'
import TitleBar from '../../../src/organisms/TitleBar'
import Text from '../../../src/atoms/Text'
import SquareIconButton from '../../../src/molecules/SquareIconButton'

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
