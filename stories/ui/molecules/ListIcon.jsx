import React from 'react'
import Text from 'components/Text'
import View from '@allthings/react-view'
import * as Icons from '@allthings/react-icons/src/index'
import CardList from 'components/CardList/CardList'
import ListItem from 'components/List/ListItem'
import ListIcon from 'ui/molecules/ListIcon'
import Example from '../../Example'
import Notes from '../../Notes'

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
