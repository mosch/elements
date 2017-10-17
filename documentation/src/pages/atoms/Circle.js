import React from 'react'
import Example from '../../components/Example'
import Notes from '../../components/Notes'
import Circle from '@allthings/elements/atoms/Circle'

export default () => (
  <div>
    <Notes for={Circle} />
    <Example>
      {`<ThemeProvider>
  <View direction="row" alignV="center">
    <Circle color="primary" />
    <Circle color="#bada55" radius={20} />
    <Circle color="gray" radius={10} />
  </View>
</ThemeProvider>
        `}
    </Example>
  </div>
)
