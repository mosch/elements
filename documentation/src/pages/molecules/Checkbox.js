import React from 'react'
import { Checkbox, View } from '@allthings/elements'
import Example from '../../components/Example'
import Notes from '../../components/Notes'

export default () => (
  <View>
    <Notes for={Checkbox} />
    <Example>
      {`<Checkbox checked name="ok" label="Are you ok?" />
<Checkbox name="notok" label="Are you not ok?" />`}
    </Example>
  </View>
)
