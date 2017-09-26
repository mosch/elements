import React from 'react'
import View from '@allthings/react-view'
import Example from '../../Example'
import Notes from '../../Notes'
import NavigationItem from '../../../src/organisms/NavigationItem'
import ThemeProvider from '../../../src/behaviour/ThemeProvider'

class NavigationItemStory extends React.Component {
  render() {
    return (
      <View>
        <Notes for={NavigationItem} />
        <ThemeProvider theme={{ text: 'red' }} root>
          <Example>
            <NavigationItem
              textColor="red"
              color="mint"
              icon="ShoppingCartFilledIcon"
            >
              Careware
            </NavigationItem>
          </Example>
        </ThemeProvider>
      </View>
    )
  }
}

export default NavigationItemStory
