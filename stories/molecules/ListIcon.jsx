import React from 'react'
import Text from '../../src/atoms/Text'
import View from '@allthings/react-view'
import CardList from '../../src/organisms/CardList/CardList'
import ListItem from '../../src/molecules/List/ListItem'
import ListIcon from '../../src/molecules/ListIcon'
import Example from '../Example'
import Notes from '../Notes'

const Icons = ['ServingFilledIcon']

class IconStory extends React.Component {
  render() {
    return (
      <View>
        <Notes for={ListIcon} />
        <Example>
          <ListIcon
            color="white"
            backgroundColor="blue"
            name="ServingFilledIcon"
          />
        </Example>

        <h3>List of all Icons</h3>
        <Example showCode={false}>
          <CardList title="Available Icons">
            {Object.keys(Icons).map(icon => (
              <ListItem alignH="space-between">
                <ListIcon color="white" backgroundColor="blue" name={icon} />
                <Text>{icon}</Text>
              </ListItem>
            ))}
          </CardList>
        </Example>
      </View>
    )
  }
}

export default IconStory
