import React from 'react'
import Example from '../../components/Example'
import Notes from '../../components/Notes'
import Circle from '@allthings/elements/atoms/Circle'

export default () => (
  <div>
    <Notes for={Circle} />
    <Example>
      {`<ThemeProvider>
  <ResourceProvider>
    <View direction="row" alignV="center">
      <Circle outline fill={false} outlineColor="lightGrey">
        <Icon size="s" name="remove-filled" color="lightGrey" />
      </Circle>
      <Circle color="primary" />
      <Circle color="#bada55" radius={20} />
      <Circle color="gray" radius={10} />
    </View>
  </ResourceProvider>
</ThemeProvider>
        `}
    </Example>
  </div>
)
