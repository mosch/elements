import React from 'react'
import PropTypes from 'prop-types'
import PropTable from './PropTable'
import marked from 'marked'
import Entities from 'html-entities'

const entities = new Entities.AllHtmlEntities();

export default class Notes extends React.Component {
  static propTypes = {
    for: PropTypes.func.isRequired,
    name: PropTypes.string,
  }

  render() {
    const component = this.props.for.component || this.props.for
    const docs = component.__docgenInfo && marked(entities.encode(component.__docgenInfo.description))

    return (
      <div>
        <h1>{component.displayName || component.name}</h1>
        <div dangerouslySetInnerHTML={{ __html: docs }} />
        <h2>Usage</h2>
        <PropTable
          props={component.__docgenInfo && component.__docgenInfo.props}
        />
      </div>
    )
  }
}
