import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'glamor'
import View from '@allthings/react-view'
import { colorCode } from '../propTypes/color'
import { withTheme } from '../behaviour/ThemeProvider'
import Inset from '../atoms/Inset'
import Text from '../atoms/Text'

const heroStyle = background =>
  css({
    overflowY: 'hidden',
    overflowX: 'hidden',
    height: 232,
    backgroundColor: colorCode(background),
    position: 'relative',
    boxShadow: '0px -1px 5px rgba(0,0,0,0.3)',
  })

const styles = {
  heroImage: css({
    position: 'absolute',
    right: '-150px',
    top: '-70px',
    width: '360px',
    height: '360px',
  }),
  // necessary because the image itself is negatively placed and
  // the flex properties are messed up without a container
  heroImageContainer: css({
    width: '150px',
  }),
}

class Hero extends React.Component {
  static propTypes = {
    /** Callback when title bar is clicked */
    onClick: PropTypes.func,
    /** Color of the title bar */
    color: PropTypes.string,
    children: PropTypes.node,
    text: PropTypes.string,
    img: PropTypes.string,
  }

  static defaultProps = {
    color: 'grey',
  }

  render() {
    const { img, text, children, color, ...props } = this.props
    return (
      <View
        direction="row"
        alignV="center"
        alignH="space-around"
        {...heroStyle(color)}
        {...props}
      >
        <Inset direction="row" alignH="start">
          <Text color="white" size="l" strong style={{maxWidth: '142px'}}>
            { text }
          </Text>
        </Inset>
        <View {...styles.heroImageContainer}>
          <img {...styles.heroImage} src={img}/>
        </View>
      </View>
    )
  }
}

const mapThemeToProps = theme => ({
  color: theme.primary,
})

export default withTheme(mapThemeToProps)(Hero)
