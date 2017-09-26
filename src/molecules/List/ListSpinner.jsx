import React from 'react'
import View from '@allthings/react-view'
import Spinner from '@allthings/elements/src/atoms/Spinner'
import Circle from '@allthings/elements/src/atoms/Circle'

const ListSpinner = props => (
  <View direction="row" alignH="center">
    <Circle radius={40} color="white" {...props}>
      <Spinner />
    </Circle>
  </View>
)

export default ListSpinner
