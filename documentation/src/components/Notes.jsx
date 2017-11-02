import React from 'react'
import PropTypes from 'prop-types'
import PropTable from './PropTable'
import remark from 'remark'
import html from 'remark-html'
import Entities from 'html-entities'
import Helmet from 'react-helmet'

const entities = new Entities.AllHtmlEntities()

export default class Notes extends React.Component {
  static propTypes = {
    for: PropTypes.func.isRequired,
    name: PropTypes.string,
  }

  markdownToHtml = markdown => {
    remark()
      .use(html)
      .processSync(markdown)
  }

  render() {
    const component = this.props.for.component || this.props.for
    const docs =
      component.__docgenInfo &&
      this.markdownToHtml(entities.encode(component.__docgenInfo.description))
    const props = component.__docgenInfo && component.__docgenInfo.props
    const name = component.displayName || component.name
    return (
      <div>
        <Helmet>
          <title>{name}</title>
        </Helmet>
        <h1>{name}</h1>
        <div dangerouslySetInnerHTML={{ __html: docs }} />
        {props && <h2>Usage</h2>}
        {props && <PropTable props={props} />}
      </div>
    )
  }
}
