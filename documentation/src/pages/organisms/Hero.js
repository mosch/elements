import React from 'react'
import { Hero, Button, View } from '@allthings/elements'
import Example from '../../components/Example'
import Notes from '../../components/Notes'

export default () => (
  <View>
    <Notes for={Hero} />
    <Example>{`<ThemeProvider>
    <Hero text="You are my Hero!" img="https://placeimg.com/500/500/people">
      <View fill direction="row" alignH="space-between" alignV="space-between">
        <Button backgroundColor="rgba(0,0,0,0.2)" color="white">Thank you</Button>
      </View>
    </Hero>
</ThemeProvider>`}</Example>
  </View>
)
