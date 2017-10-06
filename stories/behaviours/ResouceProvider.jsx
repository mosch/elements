import React from 'react'
import View from '@allthings/react-view'
import Example from '../Example'
import Notes from '../Notes'

import ResourceProvider from '../../src/behaviour/ResourceProvider'
import Icon from '../../src/atoms/Icon'

class ResourceProviderStory extends React.Component {
  render() {
    return (
      <View>
        <Notes for={ResourceProvider} />
        <h3>Using static resources</h3>
        <p>Elements uses a set of static resources like images or icons. In order to benefit from caching across all apps, these resources are provided by a static asset CDN.</p>
        <h3>When to use the ResouceProvider</h3>
        <p>
          Whenever you like to use Icons or Illustrations, you need to use the ResouceProvider to let the components know where they are.
        </p>
        <Example>
          <ResourceProvider>
            <Icon name="trendingUp" color="red" />
          </ResourceProvider>
        </Example>
      </View>
    )
  }
}

export default ResourceProviderStory
