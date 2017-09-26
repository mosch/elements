import React from 'react'
import View from '@allthings/react-view'
import SimpleLayout from 'ui/layouts/SimpleLayout'
import ThemeProvider from 'ui/behaviour/ThemeProvider'
import GroupedCardList from 'components/CardList/GroupedCardList'
import ListItem from 'components/List/ListItem'
import Text from 'components/Text'
import ListIcon from 'ui/molecules/ListIcon'
import Hero from 'ui/organisms/Hero'
import Inset from 'ui/atoms/Inset'
import ChevronRightListItem from 'components/List/ChevronRightListItem'

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
          <SimpleLayout>
            <Hero
              img="static/img/ux-illustrations/booking.svg"
              text="Buche lokale Services & Gegenstände ganz in Deiner Nähe"
            />
            <GroupedCardList title="Sichtbar nur wenn etwas gebucht wurde">
              <ChevronRightListItem>
                <View direction="row" alignV="center">
                  <ListIcon color="white" name="CalendarCheckIcon" />
                  <Inset>
                    <Text>Meine Buchungen</Text>
                  </Inset>
                </View>
              </ChevronRightListItem>
            </GroupedCardList>
            <GroupedCardList title="Buchen nach Kategorien">
              <ChevronRightListItem>
                <View direction="row" alignV="center">
                  <ListIcon color="white" name="ListBulletsFilledIcon" />
                  <Inset>
                    <Text>Alle Kategorien</Text>
                  </Inset>
                </View>
              </ChevronRightListItem>
            </GroupedCardList>
          </SimpleLayout>
        </View>
      </ThemeProvider>
    )
  }
}

export default AssetList
