import React from 'react'

import {
  Post,
  PostFooter,
  PostGreetingHeader,
  PostGreetingContent,
  PostLikeButton,
} from 'components/Pinboard'

export default class GreetingPost extends React.Component {
  render() {
    return (
      <Post>
        <PostGreetingHeader image="https://placeimg.com/50/50/people" />
        <PostGreetingContent>{`Verena ist neu in der Nachbarschaft!
13 Nachbarn schicken einen freundlichen Gruß.`}</PostGreetingContent>
        <PostFooter>
          <PostLikeButton liked={false} text="Grüße Verena" />
        </PostFooter>
      </Post>
    )
  }
}
