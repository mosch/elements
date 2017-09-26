import React from 'react'
import CardList from 'components/CardList/CardList'
import GroupedCardList from 'components/CardList/GroupedCardList'
import ListItem from 'components/List/ListItem'
import ChevronRightListItem from 'components/List/ChevronRightListItem'
import {
  Card,
  CardButton,
  CardContent,
  CardFooter,
  Spacer,
} from 'components/Card'
import Text from 'components/Text'
import ProfileImage from 'components/ProfileImage'
import View from '@allthings/react-view'

class CardStory extends React.Component {
  render() {
    return (
      <View>
        <Card>
          <CardContent>
            <Text size="xxl" strong>
              ProfileImage
            </Text>
            <Text>
              Cards are the basic elements to fit content in. They can may
              contain any kind of content.
            </Text>
          </CardContent>
        </Card>
        <Spacer />
        <Card>
          <CardContent>
            <Text size="xxl" strong>
              CardFooter
            </Text>
            <Text>
              If you need to add something to the very end of the card and it
              should be visually seperated from
            </Text>
          </CardContent>
          <CardFooter>
            <CardButton>
              <Text>Test</Text>
            </CardButton>
            <CardButton>
              <Text>Test</Text>
            </CardButton>
            <Text italic>Just a text</Text>
          </CardFooter>
        </Card>
        <Spacer />
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
      </View>
    )
  }
}

export default CardStory
