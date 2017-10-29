import React from 'react'
import View from '../atoms/View'
import { css } from 'glamor'
import Theme from '../behaviour/Theme'
import Icon from '../atoms/Icon'
import Text from '../atoms/Text'
import { Motion, spring } from 'react-motion'
import PropTypes from 'prop-types'

const styles = {
  bubble: css({
    zIndex: 200,
    position: 'fixed',
    bottom: 50,
    left: '50%',
    transform: 'translate(-50%, 0)',
    margin: '0 auto',
    width: 260,
    height: 68,
    borderRadius: 45,
    boxShadow: '2px 2px 14px 1px rgba(35,35,35,0.2)',
  }),
  text: css({
    width: 200,
    marginLeft: 20,
  }),
}

class NotificationBubble extends React.Component {
  static propTypes = {
    color: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    onTimeout: PropTypes.func.isRequired,
  }

  state = {
    visible: true,
  }

  static defaultProps = {
    color: 'primary',
    onTimeout: _ => _,
  }

  componentDidMount() {
    setTimeout(() => this.setState({ visible: false }), 2000)
  }

  handleRest = () => this.state.visible === false && this.props.onTimeout()

  render() {
    // eslint-disable-next-line no-unused-vars
    const { color, ...props } = this.props
    return (
      <Theme>
        {({ colorize }) => (
          <Motion
            defaultStyle={{ position: -50 }}
            onRest={this.handleRest}
            style={{
              position: spring(this.state.visible ? 50 : -100, {
                stiffness: 180,
                damping: 12,
              }),
            }}
          >
            {style => (
              <View {...styles.container}>
                <View
                  {...styles.bubble}
                  style={{backgroundColor: colorize(color), bottom: style.position}}
                  direction="row"
                  alignV="center"
                >
                  <View flex={70} direction="row" {...styles.text}>
                    <Text
                      color="textOnBackground"
                      align="center"
                      autoBreak
                      style={{ width: '100%' }}
                    >
                      {this.props.children}
                    </Text>
                  </View>
                  <View
                    flex={30}
                    alignH="center"
                    alignV="center"
                    direction="row"
                  >
                    <Icon name="check-filled" color="white" />
                  </View>
                </View>
              </View>
            )}
          </Motion>
        )}
      </Theme>
    )
  }
}

export default NotificationBubble
