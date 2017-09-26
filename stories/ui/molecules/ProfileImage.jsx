import React from 'react'
import ProfileImage from 'components/ProfileImage'
import View from '@allthings/react-view'
import Example from '../../Example'
import Notes from '../../Notes'

class ProfileImageStory extends React.Component {
  render() {
    return (
      <View>
        <Notes for={ProfileImage} />
        <Example>
          <ProfileImage />
        </Example>
      </View>
    )
  }
}

export default ProfileImageStory
