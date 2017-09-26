import React from 'react'
//import { format } from 'prettier/index.js'
//import babylon from 'prettier/parser-babylon'
import PropTypes from 'prop-types'
import Editor from './Editor'

/**
const pretty = doc => {
  return format(doc, {
    parser: babylon,
    semi: false,
    singleQuote: true,
  }).substring(1)
}**/

const pretty = doc => doc

export default class Code extends React.Component {
  static propTypes = {
    children: PropTypes.node,
  }

  shouldComponentUpdate() {
    return false
  }

  renderAttribute = (value, prop) => {
    const type = typeof value

    if (type === 'function') {
      return ` ${prop}={(e) => e}`
    } else if (['object', 'boolean', 'number'].indexOf(type) > -1) {
      return ` ${prop}={${JSON.stringify(value)}}`
    } else {
      return ` ${prop}="${value}"`
    }
  }

  renderExample = c => {
    if (typeof c !== 'object') {
      return c
    }

    const hasProps = !!c.props
    const hasChildren = c.props && !!c.props.children

    let props = ''
    if (hasProps) {
      props = Object.keys(c.props)
        // remove children from propTypes, because they are passed as children
        .filter(prop => !(prop === 'children'))
        // remove default props
        .filter(
          prop =>
            !c.type.defaultProps || c.props[prop] !== c.type.defaultProps[prop]
        )
        .map(prop => this.renderAttribute(c.props[prop], prop))
        .join('')
    }

    let name = 'Unknown'
    if (typeof c.type === 'string') {
      name = c.type
    } else if (c.type && typeof c.type.displayName === 'string') {
      name = c.type.displayName
    } else if (c.type && typeof c.type.name === 'string') {
      name = c.type.name
    }

    // const name = c.type && c.type.name ? c.type.name : 'Unknown'
    if (!hasChildren) {
      return `<${name}${props} />`
    }
    return `<${name}${props}>${React.Children
      .map(c.props.children, this.renderExample)
      .join('')}</${name}>`
  }

  render() {
    const code = pretty(
      React.Children.map(this.props.children, this.renderExample).join(''),
      { parser: 'flow' }
    )

    return <Editor code={code} />
  }
}
