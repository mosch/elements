import React from 'react'
import Image from '../../../src/atoms/Image'
import View from '@allthings/react-view'
import { action } from '@storybook/react'
import Example from '../../Example'
import Notes from '../../Notes'

class ImageStory extends React.Component {
  render() {
    return (
      <View>
        <Notes for={Image} />
        <Example>
          <Image
            src={'https://placeimg.com/225/225/people'}
            onClick={action('primary button')}
          />
        </Example>
        <h3>Broken Image</h3>
        <Example>
          <Image
            src={'https://placeimg.com/nothing'}
            onClick={action('primary button')}
          />
        </Example>
      </View>
    )
  }
}

export default ImageStory
