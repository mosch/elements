import React from 'react'
import View from '../../atoms/View'
import Spinner from '../../atoms/Spinner'
import Circle from '../../atoms/Circle'

/** It's a spinner for a list **/
const ListSpinner = props => (
  <View direction="row" alignH="center">
    <Circle radius={40} color="white" {...props}>
      <Spinner />
    </Circle>
  </View>
)

export default ListSpinner
