import React from 'react'
import ProfileImage from '../../src/molecules/ProfileImage'
import Card from '../../src/molecules/Card'
import View from '@allthings/react-view'
import Example from '../Example'
import Notes from '../Notes'

class ProfileImageStory extends React.Component {
  render() {
    return (
      <View>
        <Notes for={ProfileImage} />
        <Example>
          <Card>
            <ProfileImage image="https://placeimg.com/100/100/people" />
            <ProfileImage />
          </Card>
        </Example>
      </View>
    )
  }
}

export default ProfileImageStory
