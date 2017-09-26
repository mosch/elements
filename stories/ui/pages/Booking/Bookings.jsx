import React from 'react'
import View from '@allthings/react-view'
import TitleBar from 'ui/organisms/TitleBar'
import SimpleLayout from 'ui/layouts/SimpleLayout'
import ThemeProvider from 'ui/behaviour/ThemeProvider'
import GroupedCardList from 'components/CardList/GroupedCardList'
import ListItem from 'components/List/ListItem'
import Text from 'components/Text'
import Image from 'components/Image'
import ChevronRightListItem from 'components/List/ChevronRightListItem'
import ListSpinner from 'components/List/ListSpinner'
import Spacer from 'ui/atoms/Spacer'

class AssetList extends React.Component {
  static propTypes = {}

  static defaultProps = {}

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <ThemeProvider theme={{ primary: 'green', text: 'red' }} root>
        <View direction="column" flex="flex">
          <TitleBar>My Bookings</TitleBar>
          <SimpleLayout>
            <GroupedCardList title="My upcoming bookings">
              <View direction="row">
                <Image src="https://placeimg.com/100/100/people?t=1" />
                <ListItem flex="grow">
                  <View alignV="stretch" direction="column" flex="flex">
                    <Text size="l">Meeting Room 1</Text>
                    <Text size="s" italic>
                      Campus Berlin Mitte
                    </Text>
                    <Spacer />
                    <View
                      direction="row"
                      alignH="space-between"
                      alignV="center"
                      flex="flex"
                    >
                      <Text size="xl">€ 80,-</Text>
                      <Text size="s" strong color="lightGreyIntense">
                        13.07.2018 - 14.07.2018
                      </Text>
                    </View>
                  </View>
                </ListItem>
              </View>
              <View direction="row">
                <Image src="https://placeimg.com/80/80/people?t=2" />
                <ListItem flex="grow">
                  <Text>Luan</Text>
                </ListItem>
              </View>
              <View direction="row">
                <Image src="https://placeimg.com/80/80/people?t=3" />
                <ListItem flex="grow">
                  <Text>Uli</Text>
                </ListItem>
              </View>
            </GroupedCardList>
            <GroupedCardList title="My past bookings">
              <View direction="row">
                <Image src="https://placeimg.com/80/80/people?t=1" />
                <ChevronRightListItem flex="grow">
                  <Text>Jules</Text>
                </ChevronRightListItem>
              </View>
              <View direction="row">
                <Image src="https://placeimg.com/80/80/people?t=2" />
                <ListItem flex="grow">
                  <Text>Luan</Text>
                </ListItem>
              </View>
              <View direction="row">
                <Image src="https://placeimg.com/80/80/people?t=3" />
                <ListItem flex="grow">
                  <Text>Uli</Text>
                </ListItem>
              </View>
            </GroupedCardList>

            <ListSpinner />
          </SimpleLayout>
        </View>
      </ThemeProvider>
    )
  }
}

export default AssetList
