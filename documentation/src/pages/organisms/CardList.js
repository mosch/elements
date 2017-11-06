import React from 'react'
import CardList from '@allthings/elements/organisms/CardList/CardList'
import GroupedCardList from '@allthings/elements/organisms/CardList/GroupedCardList'
import View from '@allthings/elements/atoms/View'
import Example from '../../components/Example'
import Notes from '../../components/Notes'

class CardStory extends React.Component {
  render() {
    return (
      <View>
        <Notes for={CardList} />
        <Example>{`
<ThemeProvider>
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
</ThemeProvider>
        `}</Example>
        <Notes for={GroupedCardList} />
        <Example>{`
<ThemeProvider>
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
</ThemeProvider>
        `}</Example>
      </View>
    )
  }
}

export default CardStory
