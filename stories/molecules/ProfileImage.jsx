import React from 'react'
import ProfileImage from '../../src/molecules/ProfileImage'
import View from '@allthings/react-view'
import Example from '../Example'
import Notes from '../Notes'

class ProfileImageStory extends React.Component {
  render() {
    return (
      <View>
        <Notes for={ProfileImage} />
        <Example>
          <ProfileImage image="https://placeimg.com/100/100/people" />
        </Example>
      </View>
    )
  }
}

export default ProfileImageStory
