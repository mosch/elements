import React from 'react'
import Message from './Message'

test('it should increase message counter', () => {
  expect(Message.messageCount).toBe(0)
  new Message()
  new Message()
  expect(Message.messageCount).toBe(2)

})
