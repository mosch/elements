import React from 'react'
import ChatBubble from '@allthings/elements/molecules/ChatBubble'
import View from '@allthings/elements/atoms/View'
import Example from '../../components/Example'
import Notes from '../../components/Notes'

class ChatBubbleStory extends React.Component {
  render() {
    return (
      <View>
        <Notes for={ChatBubble} />
        <Example>{`<ThemeProvider>
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
</ThemeProvider>`}</Example>
      </View>
    )
  }
}

export default ChatBubbleStory
