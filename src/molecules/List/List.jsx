import PropTypes from 'prop-types'
import React from 'react'
import View from '../../atoms/View'

/**
 * Lists display a series of related content.
 * Make sure to check out ListItem, ListIcon and ListSpinner to
 * get the maximum out of it.
 */
const List = ({ children, ...restProps }) => {
  return (
    <View direction="column" {...restProps}>
      {children}
    </View>
  )
}

List.propTypes = {
  /**
   * Use a ListItem or ChevronRightListItem,
   * or any View component.
   * */
  children: PropTypes.node,
}

export default List
