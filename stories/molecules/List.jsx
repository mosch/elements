import React from 'react'
import GroupedCardList from '../../src/organisms/CardList/GroupedCardList'
import ListItem from '../../src/molecules/List/ListItem'
import List from '../../src/molecules/List/List'
import ListSpinner from '../../src/molecules/List/ListSpinner'
import ChevronRightListItem from '../../src/molecules/List/ChevronRightListItem'
import Image from '../../src/atoms/Image'
import { Card, CardContent } from '../../src/molecules/Card'
import Text from '../../src/atoms/Text'
import View from '@allthings/react-view'

import Example from '../Example'
import Notes from '../Notes'

class ListStory extends React.Component {
  render() {
    return (
      <View>
        <Notes for={List} />
        <h3>A simple list</h3>
        <Example>
          <Card>
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
          </Card>
        </Example>
        <h3>Complex list with images</h3>
        <Example>
          <View>
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
          </View>
        </Example>
      </View>
    )
  }
}

export default ListStory
