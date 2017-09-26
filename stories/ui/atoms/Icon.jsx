import React from 'react'
import Text from 'components/Text'
import View from '@allthings/react-view'
import * as Icons from '@allthings/react-icons/src/index'
import CardList from 'components/CardList/CardList'
import ListItem from 'components/List/ListItem'
import Example from '../../Example'
import Notes from '../../Notes'
import Icon from 'ui/atoms/Icon'

class IconStory extends React.Component {
  render() {
    return (
      <View>
        <Notes for={Icon} />
        <Example>
          <Icon name="ServingFilledIcon" size="l" />
        </Example>
        <h3>List of all Icons</h3>
        <p>
          This example uses the <a href="#">ListIcon</a>. Make sure to check it
          out if you like to display a Icon in a List
        </p>
        <Example showCode={false}>
          <CardList title="Available Icons">
            {Object.keys(Icons).map(icon => (
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
        </Example>
      </View>
    )
  }
}

export default IconStory
