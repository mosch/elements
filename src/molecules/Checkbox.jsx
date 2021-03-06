import React from 'react'
import View from '../atoms/View'
import Icon from '../atoms/Icon'
import Text from '../atoms/Text'
import Relative from '../atoms/Relative'
import ListItem from './List/ListItem'
import { css } from 'glamor'
import Theme from '../behaviour/Theme'
import PropTypes from 'prop-types'
import Absolute from '../atoms/Absolute'
import Inset from '../atoms/Inset'

const styles = {
  checkbox: (background, checked) =>
    css({
      borderRadius: '3px',
      height: '25px',
      width: '25px',
      backgroundColor: checked && background,
      border: checked ? 0 : '3px solid lightGrey',
    }),
  text: css({
    width: 200,
    marginLeft: 20,
  }),
}

class Checkbox extends React.Component {
  static propTypes = {
    onChange: PropTypes.func,
    checked: PropTypes.bool,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    labelSize: Text.propTypes.size,
  }

  state = {
    checked: this.props.checked,
  }

  static defaultProps = {
    checked: false,
    size: 'l',
  }

  handleChange = () => this.setState(({ checked }) => ({ checked: !checked }))

  render() {
    const { checked, onChange, ...props } = this.props
    const realChecked = checked || this.state.checked
    const changeHandler = onChange || this.handleChange
    return (
      <Theme>
        {({ theme, colorize }) => (
          <ListItem>
            <View direction="row" alignV="center">
              <Relative
                focusable={false}
                {...styles.checkbox(theme.primary, realChecked)}
              >
                <Absolute top={1} left={5}>
                  <Icon
                    name="check-filled"
                    size={14}
                    color={`rgba(255,255,255,${realChecked ? '1' : '0.3'})`}
                  />
                </Absolute>
                <Absolute top={0} left={0}>
                  <input
                    type="checkbox"
                    checked={realChecked}
                    id={this.props.name}
                    value={realChecked}
                    style={{ opacity: 0, width: '25px', height: '25px' }}
                    onChange={changeHandler}
                    {...props}
                  />
                </Absolute>
              </Relative>
            </View>
            <label htmlFor={this.props.name}>
              <Inset horizontal>
                <Text size={this.props.labelSize}>{this.props.label}</Text>
              </Inset>
            </label>
          </ListItem>
        )}
      </Theme>
    )
  }
}

export default Checkbox
