import React from 'react'
import Image from '@allthings/elements/atoms/Image'
import View from '@allthings/elements/atoms/View'
import Example from '../../components/Example'
import Notes from '../../components/Notes'

class ImageStory extends React.Component {
  render() {
    return (
      <View>
        <Notes for={Image} />
        <Example>{`<Image
  style={{width: 225, height: 225}}
  size="cover"
  src={'https://placeimg.com/225/225/people'}
/>`}</Example>
        <h3>Broken Image</h3>
        <Example>{`<Image
  style={{width: 225, height: 225}}
  src={'https://placeimg.com/nothing'}
/>`}</Example>
      </View>
    )
  }
}

export default ImageStory
