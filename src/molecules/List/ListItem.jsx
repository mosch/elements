import PropTypes from 'prop-types'
import React from 'react'
import { css } from 'glamor'
import { ColorPalette } from '@allthings/colors'
import View from '../../atoms/View'

const styles = (backgroundColor, withCursor, hideLine) =>
  css({
    padding: '10px 15px',
    minHeight: '50px',
    borderBottom: !hideLine && `1px solid ${ColorPalette.lightGrey}`,
    cursor: withCursor && 'pointer',
    backgroundColor: backgroundColor,
  })

function ListItem(props) {
  const { children, backgroundColor, hideLine, ...restProps } = props
  return (
    <View
      direction="row"
      alignV="center"
      {...styles(backgroundColor, !!props.onClick, hideLine)}
      {...restProps}
    >
      {children}
    </View>
  )
}

ListItem.propTypes = {
  children: PropTypes.node,
  hideLine: PropTypes.bool,
  onClick: PropTypes.func,
  backgroundColor: PropTypes.string,
}

ListItem.defaultProps = {
  backgroundColor: 'white',
}

export default ListItem
