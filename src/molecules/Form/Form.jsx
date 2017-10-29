import React from 'react'
import PropTypes from 'prop-types'

class Form extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    onSubmit: PropTypes.func.isRequired,
  }

  handleSubmit = e => {
    e.preventDefault()
    const data = {}
    const elements = e.target.elements
    for (let i = 0; i < elements.length; i++) {
      let item = elements.item(i)
      data[item.name] = item.value
    }
    this.props.onSubmit(e, data)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.props.children}
      </form>
    )
  }
}

export default Form
