import React from 'react'
import Text from '../../src/atoms/Text'
import View from '@allthings/react-view'
import CardList from '../../src/organisms/CardList/CardList'
import ListItem from '../../src/molecules/List/ListItem'
import ListIcon from '../../src/molecules/ListIcon'
import Example from '../Example'
import Notes from '../Notes'
import ResourceProvider from '../../src/behaviour/ResourceProvider'

const Icons = ['servingFilled']

class IconStory extends React.Component {
  render() {
    return (
      <ResourceProvider>
        <View>
          <Notes for={ListIcon} />
          <Example>
            <ListIcon
              color="white"
              backgroundColor="blue"
              name="servingFilled"
            />
          </Example>

          <h3>List of all Icons</h3>
          <Example showCode={false}>
            <CardList title="Available Icons">
              {Icons.map(icon => (
                <ListItem alignH="space-between" key={icon}>
                  <ListIcon color="white" backgroundColor="blue" name={icon} />
                  <Text>{icon}</Text>
                </ListItem>
              ))}
            </CardList>
          </Example>
        </View>
      </ResourceProvider>
    )
  }
}

export default IconStory
