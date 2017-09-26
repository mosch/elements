import React from 'react'
import CardList from 'components/CardList/CardList'
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
import PropTable from '../../PropTable'

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
