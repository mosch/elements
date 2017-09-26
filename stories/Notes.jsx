import React from 'react'
import PropTypes from 'prop-types'
import PropTable from './PropTable'

export default class Notes extends React.Component {
  static propTypes = {
    for: PropTypes.func.isRequired,
    name: PropTypes.string,
  }

  render() {
    const component = this.props.for.component || this.props.for
    return (
      <div>
        <h1>{component.displayName || component.name}</h1>
        <p style={{ whiteSpace: 'pre' }}>
          {component.__docgenInfo && component.__docgenInfo.description}
        </p>
        <h2>Usage</h2>
        <PropTable
          props={component.__docgenInfo && component.__docgenInfo.props}
        />
      </div>
    )
  }
}
