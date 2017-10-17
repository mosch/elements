import React from 'react'
import Text from '@allthings/elements/atoms/Text'
import View from '@allthings/elements/atoms/View'
import CardList from '@allthings/elements/organisms/CardList/CardList'
import ListItem from '@allthings/elements/molecules/List/ListItem'
import ListIcon from '@allthings/elements/molecules/ListIcon'
import Example from '../../components/Example'
import Notes from '../../components/Notes'
import ResourceProvider from '@allthings/elements/behaviour/ThemeProvider'
import ThemeProvider from '@allthings/elements/behaviour/ThemeProvider'

const Icons = ['servingFilled']

class IconStory extends React.Component {
  render() {
    return (
      <ResourceProvider>
        <View>
          <Notes for={ListIcon} />
          <Example>{`
            <ListIcon
              color="white"
              backgroundColor="blue"
              name="servingFilled"
            />
          `}</Example>

          <h3>List of all Icons</h3>
          <CardList title="Available Icons">
            {Icons.map(icon => (
              <ListItem alignH="space-between" key={icon}>
                <ListIcon color="white" backgroundColor="blue" name={icon} />
                <Text>{icon}</Text>
              </ListItem>
            ))}
          </CardList>
        </View>
      </ResourceProvider>
    )
  }
}

export default IconStory
