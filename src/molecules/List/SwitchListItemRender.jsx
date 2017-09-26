import PropTypes from 'prop-types'
import React from 'react'
import SwitchListItem from './SwitchListItem'

export default class SwitchListItemRender extends React.Component {
  static propTypes = {
    ...SwitchListItem.propTypes,
    active: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.onClick(this.props.value)
  }

  render() {
    const { active, children, ...rest } = this.props
    return (
      <li className="switch-list-item" {...rest} onClick={this.handleClick}>
        <button
          className={'switch-button' + (active ? ' switch-button-active' : '')}
        >
          <span className="switch-button-label">{children}</span>
        </button>
      </li>
    )
  }
}
