import React from 'react'
import { TextInput, View } from '@allthings/elements'
import Example from '../../components/Example'
import Notes from '../../components/Notes'

export default () => (
  <View>
    <Notes for={TextInput} />
    <Example>
      {`<TextInput name="email" type="email" placeholder="Your email" required />
<TextInput lines={5} placeholder="Your question" maxLength={255} minLength={50} />`}
    </Example>
  </View>
)
