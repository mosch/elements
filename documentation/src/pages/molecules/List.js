import React from 'react'
import List from '@allthings/elements/molecules/List/List'
import { Card, CardContent } from '@allthings/elements/molecules/Card'
import View from '@allthings/elements/atoms/View'

import Example from '../../components/Example'
import Notes from '../../components/Notes'

class ListStory extends React.Component {
  render() {
    return (
      <View>
        <Notes for={List} />
        <h3>A simple list</h3>
        <Example>{`<Card>
  <List>
    <ListItem>
      <Text>Item 1</Text>
    </ListItem>
    <ListItem>
      <Text>Item 2</Text>
    </ListItem>
    <ListItem>
      <Text>Item 3</Text>
    </ListItem>
    <ListItem>
      <Text>Item 4</Text>
    </ListItem>
    <ChevronRightListItem onClick={_ => _}>
      <Text>ChevronRightListItem to show indicator</Text>
    </ChevronRightListItem>
  </List>
</Card>`}</Example>
        <h3>Complex list with images</h3>
        <Example>{`<View>
  <GroupedCardList title="A list with images">
    <View direction="row">
      <Image src={'https://placeimg.com/80/80/people?t=1'} />
      <ChevronRightListItem flex="grow">
        <Text>Jules</Text>
      </ChevronRightListItem>
    </View>
    <View direction="row">
      <Image src={'https://placeimg.com/80/80/people?t=2'} />
      <ListItem flex="grow">
        <Text>Luan</Text>
      </ListItem>
    </View>
    <View direction="row">
      <Image src={'https://placeimg.com/80/80/people?t=3'} />
      <ListItem flex="grow">
        <Text>Uli</Text>
      </ListItem>
    </View>
  </GroupedCardList>
  <ListSpinner />
</View>`}</Example>
      </View>
    )
  }
}

export default ListStory
