import React from 'react'
import CardList from 'components/CardList/CardList'
import GroupedCardList from 'components/CardList/GroupedCardList'
import ListItem from 'components/List/ListItem'
import ChevronRightListItem from 'components/List/ChevronRightListItem'
import Text from 'components/Text'
import View from '@allthings/react-view'
import Example from '../../Example'
import Notes from '../../Notes'

class CardStory extends React.Component {
  render() {
    return (
      <View>
        <Notes for={CardList} />
        <Example>
          <CardList>
            <ChevronRightListItem>
              <Text>List item with chevron</Text>
            </ChevronRightListItem>
            <ListItem>
              <Text>Test</Text>
            </ListItem>
            <ListItem>
              <Text>Test</Text>
            </ListItem>
            <ListItem>
              <Text>Test</Text>
            </ListItem>
          </CardList>
        </Example>
        <Notes for={GroupedCardList} />
        <Example>
          <GroupedCardList title="Group Card List">
            <ListItem>
              <Text>Test</Text>
            </ListItem>
            <ListItem>
              <Text>Test</Text>
            </ListItem>
            <ListItem>
              <Text>Test</Text>
            </ListItem>
          </GroupedCardList>
        </Example>
      </View>
    )
  }
}

export default CardStory
