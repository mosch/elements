import React from 'react'
import Text from '../../src/atoms/Text'
import View from '../../src/atoms/View'
import CardList from '../../src/organisms/CardList/CardList'
import ListItem from '../../src/molecules/List/ListItem'
import Example from '../Example'
import Notes from '../Notes'
import Icon from '../../src/atoms/Icon'
import ResourceProvider from '../../src/behaviour/ResourceProvider'

const Icons = ['servingFilled', 'checkFilled']

class IconStory extends React.Component {
  render() {
    return (
      <View>
        <Notes for={Icon} />
        <Example>
          <Icon name="servingFilled" size="l" color="red" />
        </Example>
        <h3>List of all Icons</h3>
        <p>
          This example uses the <a href="#">ListIcon</a>. Make sure to check it
          out if you like to display a Icon in a List
        </p>
        <Example showCode={false}>
          <ResourceProvider>
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
          </ResourceProvider>
        </Example>
      </View>
    )
  }
}

export default IconStory
