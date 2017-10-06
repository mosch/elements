import React from 'react'
import ChatBubble from '../../src/molecules/ChatBubble'
import View from '@allthings/react-view'
import Example from '../Example'
import Notes from '../Notes'

class ChatBubbleStory extends React.Component {
  render() {
    return (
      <View>
        <Notes for={ChatBubble} />
        <Example>
          <View>
            <ChatBubble
              text="Hello World"
              userName="You"
              userImage="https://placeimg.com/40/40/people?t=3"
              date="a minute ago"
            />
            <ChatBubble
              direction="right"
              text="Hello You"
              userName="Agent"
              userImage="https://placeimg.com/40/40/people?t=1"
              date="just now"
            />
          </View>
        </Example>
      </View>
    )
  }
}

export default ChatBubbleStory
