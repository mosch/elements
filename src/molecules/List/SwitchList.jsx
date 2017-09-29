import PropTypes from 'prop-types'
import React from 'react'
import SwitchListItem from './SwitchListItem'
import SwitchListItemRender from './SwitchListItemRender'

export default class SwitchList extends React.Component {
  static propTypes = {
    children: PropTypes.arrayOf(
      PropTypes.shape({
        props: PropTypes.shape(SwitchListItem.propTypes),
      })
    ).isRequired,
    orientation: PropTypes.oneOf(['vertical', 'horizontal']),
    onChange: PropTypes.func.isRequired,
    defaultValue: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {
      value: props.defaultValue,
    }
    this.handleListClick = this.handleListClick.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.defaultValue !== nextProps.defaultValue) {
      this.setState({ value: nextProps.defaultValue })
    }
  }

  handleListClick(value) {
    this.setState({ value })
    this.props.onChange(value)
  }

  render() {
    // eslint-disable-next-line no-unused-vars
    const {
      defaultValue,
      onChange,
      orientation,
      children,
      ...restProps
    } = this.props
    return (
      <div
        className={
          'switch ' +
            (orientation === 'vertical' ? 'switchVertical' : 'switchHorizontal')
        }
      >
        <ul className="switch-list" {...restProps}>
          {children.map(child => (
            <SwitchListItemRender
              {...child.props}
              key={child.props.value}
              active={this.state.value === child.props.value}
              onClick={this.handleListClick}
            />
          ))}
        </ul>
      </div>
    )
  }
}
