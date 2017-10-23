import React from 'react'
import ProfileImage from '@allthings/elements/molecules/ProfileImage'
import View from '@allthings/elements/atoms/View'
import Example from '../../components/Example'
import Notes from '../../components/Notes'

class ProfileImageStory extends React.Component {
  render() {
    return (
      <View>
        <Notes for={ProfileImage} />
        <Example>{`<Card>
  <ProfileImage image="https://placeimg.com/100/100/people" />
  <ProfileImage />
</Card>`}</Example>
      </View>
    )
  }
}

export default ProfileImageStory
