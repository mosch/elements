import React from 'react'
import { Card, CardButton, CardContent, CardFooter } from 'components/Card'
import Text from 'components/Text'
import View from '@allthings/react-view'
import Example from '../../Example'
import Notes from '../../Notes'

class CardStory extends React.Component {
  render() {
    return (
      <View>
        <Notes for={Card} />
        <Example>
          <Card>
            <CardContent>
              <Text size="xxl" strong>
                Cards
              </Text>
              <Text>
                Cards are the basic elements to fit content in. They can may
                contain any kind of content.
              </Text>
            </CardContent>
          </Card>
        </Example>
        <h3>Card with buttons</h3>
        <Example>
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
        </Example>
      </View>
    )
  }
}

export default CardStory
