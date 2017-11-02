import React from 'react'
import PropTypes from 'prop-types'
import Circle from '../atoms/Circle'
import Text from '../atoms/Text'
import Absolute from '../atoms/Absolute'
import Theme from '../behaviour/Theme'

/** Indicates changes or updates */
const CountIndicator = ({ count, ...props }) =>
  count === 0 ? null : (
    <Theme>
      {({ colorize }) => (
        <Absolute {...props}>
          <Circle color={colorize(props.color)} radius={18}>
            <Text size="xs" color="white">
              {count > 9 ? '9+' : count}
            </Text>
          </Circle>
        </Absolute>
      )}
    </Theme>
  )

CountIndicator.propTypes = {
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
  /** Color */
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

CountIndicator.defaultProps = {
  color: 'warn',
}

export default CountIndicator
