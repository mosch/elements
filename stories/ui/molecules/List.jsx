import React from 'react'
import GroupedCardList from 'components/CardList/GroupedCardList'
import ListItem from 'components/List/ListItem'
import List from 'components/List/List'
import ListSpinner from 'components/List/ListSpinner'
import ChevronRightListItem from 'components/List/ChevronRightListItem'
import Image from 'components/Image'
import { Card, CardContent } from 'components/Card'
import Text from 'components/Text'
import View from '@allthings/react-view'

import Example from '../../Example'
import Notes from '../../Notes'

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
