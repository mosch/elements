import React from 'react'
import CardList from '../../src/organisms/CardList/CardList'
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
import PropTable from '../PropTable'

class ListStory extends React.Component {
  render() {
    return (
      <View>
        <h1>Card List</h1>
        <p>{CardList.__docgenInfo.description}</p>
        <h2>Examples</h2>
        <PropTable type={CardList} />
        <p>
          The CardList is a molecule that is a card containing a list. This is
          how a CardList looks like
        </p>
        <Example>
          <CardList>
            <ListItem>
              <Image src={'https://placeimg.com/225/225/people'} />
              <Text>List item with image</Text>
            </ListItem>
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
        <h3>GroupedCardList</h3>
        <p>The GroupedCardList can also show a header.</p>
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

export default ListStory
