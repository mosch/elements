import React from 'react'
import Text from '@allthings/elements/atoms/Text'
import View from '@allthings/elements/atoms/View'
import CardList from '@allthings/elements/organisms/CardList/CardList'
import ListItem from '@allthings/elements/molecules/List/ListItem'
import ListIcon from '@allthings/elements/molecules/ListIcon'
import { Icons } from '@allthings/elements/atoms/Icon'
import Inset from '@allthings/elements/atoms/Inset'
import Example from '../../components/Example'
import Notes from '../../components/Notes'
import ResourceProvider from '@allthings/elements/behaviour/ResourceProvider'
import ThemeProvider from '@allthings/elements/behaviour/ThemeProvider'

class IconStory extends React.Component {
  render() {
    return (
      <ResourceProvider>
        <ThemeProvider>
          <View>
            <Notes for={ListIcon} />
            <Example>
              {`<ResourceProvider>
  <ListIcon
    color="white"
    backgroundColor="blue"
    name="serving-filled"
  />
</ResourceProvider>`}
            </Example>
            <h2>List of all Icons</h2>
            <div style={{ backgroundColor: '#F4F4F4', padding: '15px' }}>
              <CardList title="Available Icons">
                {Icons.map(icon => (
                  <ListItem key={icon}>
                    <ListIcon
                      color="white"
                      backgroundColor="blue"
                      name={icon}
                    />
                    <Inset>
                      <Text>{icon}</Text>
                    </Inset>
                  </ListItem>
                ))}
              </CardList>
            </div>
          </View>
        </ThemeProvider>
      </ResourceProvider>
    )
  }
}

export default IconStory
