import React from 'react'
import View from '../atoms/View'
import mitt from 'mitt'
import NotificationBubble from '../molecules/NotificationBubble'
import PropTypes from 'prop-types'

const emitter = mitt()

const send = (message, type) => {
  emitter.emit(type, message)
}

export const sendSuccess = message => send(message, 'success')
export const sendWarning = message => send(message, 'warning')
export const sendInfo = message => send(message, 'info')

class NotificationBubbleManager extends React.Component {
  static propTypes = {
    children: PropTypes.node,
  }

  state = {
    messages: [],
  }

  messageCounter = 0

  componentDidMount() {
    emitter.on('*', this.handleEvent)
  }

  componentWillUnmount() {
    emitter.off('*', this.handleEvent)
  }

  handleEvent = (type, message) =>
    this.setState(({ messages }) => ({
      messages: [
        ...messages,
        {
          type,
          id: this.messageCounter++,
          text: message,
          date: new Date(),
        },
      ],
    }))

  handleTimeout = () => {
    this.setState(({ messages }) => ({
      messages: messages.slice(1),
    }))
  }

  render() {
    const message = this.state.messages[0]
    return (
      <View>
        {message && (
          <NotificationBubble key={message.id} onTimeout={this.handleTimeout}>
            {message.text}
          </NotificationBubble>
        )}
        {this.props.children}
      </View>
    )
  }
}

export default NotificationBubbleManager
