import React from 'react'
import View from '@allthings/react-view'
import TitleBar from 'ui/organisms/TitleBar'
import SimpleLayout from 'ui/layouts/SimpleLayout'
import ThemeProvider from 'ui/behaviour/ThemeProvider'
import CardList from 'components/CardList/CardList'
import ListItem from 'components/List/ListItem'
import Text from 'components/Text'
import Image from 'components/Image'
import ListSpinner from 'components/List/ListSpinner'
import Spacer from 'ui/atoms/Spacer'
import SquareIconButton from 'ui/molecules/SquareIconButton'

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
          <TitleBar>
            <SquareIconButton icon="ArrowLeftFilledIcon" iconColor="white" />
            <Text strong color="white">
              Rooms
            </Text>
          </TitleBar>
          <SimpleLayout>
            <CardList>
              <View direction="row">
                <Image src="https://placeimg.com/100/100/arch?t=1" />
                <ListItem flex="grow">
                  <View alignV="stretch" direction="column" flex="flex">
                    <Text size="l">Meeting Room 1</Text>
                    <Text size="s" italic color="grey">
                      Campus Berlin Mitte
                    </Text>
                    <Spacer />
                    <View direction="row" alignV="start" flex="flex">
                      <Text size="xl" strong>
                        € 80,-
                      </Text>
                      <Text size="s" strong color="grey">
                        &nbsp;/ day
                      </Text>
                    </View>
                  </View>
                </ListItem>
              </View>
              <View direction="row">
                <Image src="https://placeimg.com/100/100/arch?t=2" />
                <ListItem flex="grow">
                  <View alignV="stretch" direction="column" flex="flex">
                    <Text size="l">Meeting Room 2</Text>
                    <Text size="s" italic color="grey">
                      Campus Berlin Mitte
                    </Text>
                    <Spacer />
                    <View direction="row" alignV="start" flex="flex">
                      <Text size="xl" strong>
                        € 80,-
                      </Text>
                      <Text size="s" strong color="grey">
                        &nbsp;/ day
                      </Text>
                    </View>
                  </View>
                </ListItem>
              </View>
              <View direction="row">
                <Image src="https://placeimg.com/100/100/arch?t=3" />
                <ListItem flex="grow">
                  <View alignV="stretch" direction="column" flex="flex">
                    <Text size="l">
                      There are also Rooms with multiple lines
                    </Text>
                    <Text size="s" italic color="grey">
                      Campus Berlin Mitte
                    </Text>
                    <Spacer />
                    <View direction="row" alignV="start" flex="flex">
                      <Text size="xl" strong>
                        € 80,-
                      </Text>
                      <Text size="s" strong color="grey">
                        &nbsp;/ day
                      </Text>
                    </View>
                  </View>
                </ListItem>
              </View>
            </CardList>

            <ListSpinner />
          </SimpleLayout>
        </View>
      </ThemeProvider>
    )
  }
}

export default AssetList
