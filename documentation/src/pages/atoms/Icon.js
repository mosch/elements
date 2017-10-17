import React from 'react'
import Example from '../../components/Example'
import Notes from '../../components/Notes'

import Text from '@allthings/elements/atoms/Text'
import View from '@allthings/elements/atoms/View'
import CardList from '@allthings/elements/organisms/CardList/CardList'
import ListItem from '@allthings/elements/molecules/List/ListItem'
import Icon from '@allthings/elements/atoms/Icon'
import ResourceProvider from '@allthings/elements/behaviour/ResourceProvider'
import ThemeProvider from '@allthings/elements/behaviour/ThemeProvider'

const Icons = ['servingFilled', 'checkFilled']

class IconStory extends React.Component {
  render() {
    return (
      <ResourceProvider>
        <ThemeProvider>
        <View>
          <Notes for={Icon} />
          <Example>{`<Icon name="servingFilled" size="l" color="red" />`}</Example>
          <h3>List of all Icons</h3>
          <p>
            This example uses the <a href="#">ListIcon</a>. Make sure to check
            it out if you like to display a Icon in a List
          </p>
          <CardList title="Available Icons">
            {Icons.map(icon => (
              <ListItem alignV="stretch" key={icon}>
                <View direction="row" alignH="space-between" flex={40}>
                  <Icon color="#bada55" name={icon} size="s" />
                  <Icon color="#bada55" name={icon} size="m" />
                  <Icon color="#bada55" name={icon} size="l" />
                </View>
                <View flex={60} alignH="end">
                  <Text align="right">{icon}</Text>
                </View>
              </ListItem>
            ))}
          </CardList>
        </View>
        </ThemeProvider>
      </ResourceProvider>
    )
  }
}

export default IconStory
