import React from 'react'
import AppBar from '../../src/organisms/AppBar'
import View from '@allthings/react-view'
import Example from '../Example'
import Notes from '../Notes'
import { action } from '@storybook/addon-actions'

class AppBarStory extends React.Component {
  render() {
    return (
      <View>
        <Notes for={AppBar} />
        <Example>
          <AppBar
            notificationCount={99}
            onBellClick={action('You clicked the bell!')}
            onPlusClick={action('You want more?')}
            onTileClick={action('Hello!')}
          />
        </Example>
      </View>
    )
  }
}

export default AppBarStory
