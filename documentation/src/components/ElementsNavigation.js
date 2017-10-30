import React from 'react'
import PropTypes from 'prop-types'
import Navigation from './Navigation'

const ElementsNavigation = ({ items }) => {
  const index = items.reduce((acc, val) => {
    const path = val.node.path.split('/')
    const type = path[1]
    const component = path[2]
    acc[type] = [
      ...(acc[type] || []),
      {
        title: component,
        link: val.node.path,
      },
    ]
    return acc
  }, {})

  const navItems = Object.keys(index).map(type => ({
    title: type.charAt(0).toUpperCase() + type.slice(1),
    link: '/',
    items: Object.values(index[type]),
  }))

  return <Navigation items={navItems} />
}

ElementsNavigation.propTypes = {
  items: PropTypes.array.isRequired,
}

export default ElementsNavigation
