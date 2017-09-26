import PropTypes from 'prop-types'
import React from 'react'
import { css, merge } from 'glamor'
import { View } from '@allthings/react-view'
import { ColorPalette } from '@allthings/colors'
import ListItem from './ListItem'
import ChevronRightIcon from '@allthings/react-ionicons/lib/ChevronRightIcon'

const style = css({
  fill: ColorPalette.greyIntense,
  width: 12,
  height: 12,
})

function ChevronRightListItem(props) {
  const { children, flex = 'grow', innerStyle = {}, ...restProps } = props
  return (
    <ListItem {...restProps} flex={flex}>
      <View
        direction="column"
        flex={flex}
        {...merge(css(innerStyle), css({ width: '100%' }))}
      >
        {children}
      </View>
      <View flex="nogrow">
        <ChevronRightIcon {...style} />
      </View>
    </ListItem>
  )
}

ChevronRightListItem.propTypes = {
  children: PropTypes.node.isRequired,
  flex: PropTypes.node,
  innerStyle: PropTypes.object,
}

export default ChevronRightListItem
