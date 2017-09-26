import React from 'react'
import PropTypes from 'prop-types'
import Circle from '../atoms/Circle'
import Text from 'components/Text'
import Absolute from '../atoms/Absolute'

class CountIndicator extends React.Component {
  static propTypes = {
    /** Number to display */
    count: PropTypes.number.isRequired,
    /** Top offset */
    top: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    /** Bottom offset */
    bottom: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    /** Left offset */
    left: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    /** Right offset */
    right: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }

  render() {
    const { count, ...props } = this.props

    return count === 0 ? null : (
      <Absolute {...props}>
        <Circle color="notificationIndicator" radius={18}>
          <Text size="xs" color="white">
            {count > 9 ? '9+' : count}
          </Text>
        </Circle>
      </Absolute>
    )
  }
}

export default CountIndicator
