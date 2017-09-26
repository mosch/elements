import React from 'react'
import View from '@allthings/react-view'
import Example from '../../Example'
import Notes from '../../Notes'
import ColumnLayout from 'ui/layouts/ColumnLayout'
import StandardPost from '../pages/Pinboard/StandardPost'
import AppBar from 'ui/organisms/AppBar'
import NavigationItem from 'ui/organisms/NavigationItem'
import AppLayout from 'ui/layouts/AppLayout'
import MicroappLayout from 'ui/layouts/MicroappLayout'
import SimpleLayout from 'ui/layouts/SimpleLayout'
import Navigation from 'ui/layouts/Navigation'
import TitleBar from 'ui/organisms/TitleBar'
import SquareIconButton from 'ui/molecules/SquareIconButton'
import Text from 'components/Text'
import NavigationHeader from 'ui/organisms/NavigationHeader'
import NavigationDesktopBar from 'ui/organisms/NavigationDesktopBar'
import NavigationDesktopBarItem from 'ui/organisms/NavigationDesktopBarItem'
import Responsive from 'ui/behaviour/Responsive'
import ThemeProvider from 'ui/behaviour/ThemeProvider'
import Button from 'components/Button'
import Card from 'components/Card'

class AppLayoutStory extends React.Component {
  state = {
    active: true,
  }

  setActive = () => this.setState(state => ({ active: !state.active }))

  render() {
    return (
      <View>
        <Notes for={AppLayout} />
        <Example height={600} responsive>
          <ThemeProvider root theme={{ primaryColor: 'black' }}>
            <View style={{ height: '100vh' }} direction="row">
              <Navigation active={this.state.active}>
                <NavigationHeader>Property Name / Logo</NavigationHeader>
                <NavigationDesktopBar>
                  <NavigationDesktopBarItem
                    icon="SearchFilledIcon"
                    onClick={_ => _}
                  />
                  <NavigationDesktopBarItem icon="EmailIcon" onClick={_ => _} />
                  <NavigationDesktopBarItem
                    icon="AlarmIcon"
                    onClick={_ => _}
                    count={99}
                  />
                  <NavigationDesktopBarItem
                    icon="PlusLightFilledIcon"
                    onClick={_ => _}
                  />
                </NavigationDesktopBar>

                <NavigationItem
                  icon="UserGroupChatFilledIcon"
                  color="turquoise"
                >
                  Pinboard
                </NavigationItem>
                <NavigationItem icon="ShoppingCartFilledIcon" color="mint">
                  My Neighbours
                </NavigationItem>
                <NavigationItem icon="SharetimeFilledIcon" color="mintIntense">
                  Sharing
                </NavigationItem>
                <NavigationItem icon="ShoppingCartFilledIcon" color="green">
                  Marketplace
                </NavigationItem>
                <NavigationItem icon="UserChatFilledIcon" color="yellow">
                  Service Center
                </NavigationItem>
                <NavigationItem icon="UserChatFilledIcon" color="yellowIntense">
                  Service Center
                </NavigationItem>
              </Navigation>
              <AppLayout>
                <ThemeProvider theme={{ primaryColor: 'blue' }}>
                  <MicroappLayout active={this.state.active}>
                    <TitleBar alignH="space-between">
                      <View direction="row" alignV="center">
                        <SquareIconButton icon="ArmchairFilledIcon" />
                        <Text color="white" strong>
                          Get Relaxed
                        </Text>
                      </View>
                      <SquareIconButton icon="SearchFilledIcon" />
                    </TitleBar>
                    <SimpleLayout>
                      <Card>
                        <Button onClick={_ => _}>Hi Button</Button>
                      </Card>
                    </SimpleLayout>
                    <Responsive mobile>
                      <AppBar
                        notificationCount="1"
                        onPlusClick=""
                        onTileClick={this.setActive}
                        onBellClick=""
                      />
                    </Responsive>
                  </MicroappLayout>
                </ThemeProvider>
              </AppLayout>
            </View>
          </ThemeProvider>
        </Example>
      </View>
    )
  }
}

export default AppLayoutStory
