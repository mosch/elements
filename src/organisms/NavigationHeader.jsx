import React from 'react'
import View from '@allthings/react-view'
// import Logo from '../atoms/Logo'
import Logo from '../atoms/Logo'
import Text from '../atoms/Text'
import PropTypes from 'prop-types'
import { withTheme } from '../behaviour/ThemeProvider'
import { color, lightness } from 'kewler'

class NavigationHeader extends React.Component {
  static propTypes = {
    /* The text to show beside the logo (App title) */
    title: PropTypes.string.isRequired,
    /* The text underneath the title, if existing (App subtitle) */
    subTitle: PropTypes.string,
    /* The logo to show, will be rendered in size of 36px */
    logo: PropTypes.string,
    backgroundColor: PropTypes.string.isRequired,
    titleColor: PropTypes.string.isRequired,
    subTitleColor: PropTypes.string.isRequired,
  }

  render() {
    const {
      backgroundColor,
      titleColor,
      subTitleColor,
      title,
      subTitle,
    } = this.props
    return (
      <View
        style={{ height: 65, padding: '0 18px', backgroundColor }}
        direction="row"
        alignV="center"
      >
        <Logo
          size={30}
          color={titleColor}
          style={{ maxHeight: '29px', maxWidth: '65px', flexShrink: 0 }}
        />
        <View
          style={{
            width: 1,
            height: 20,
            backgroundColor: titleColor,
            opacity: 0.25,
            margin: 10,
          }}
        />
        <View direction="column">
          <Text size="l" color={titleColor} strong>
            {title}
          </Text>
          {subTitle && (
            <Text size="s" color={color(subTitleColor, lightness(-20))}>
              {subTitle}
            </Text>
          )}
        </View>
      </View>
    )
  }
}
const mapThemeToProps = theme => ({
  backgroundColor: color(theme.primary, lightness(-8)),
  titleColor: theme.contrast,
  subTitleColor: color(theme.contrast, lightness(-20)),
})

export default withTheme(mapThemeToProps, 'NavigationHeader')(NavigationHeader)
