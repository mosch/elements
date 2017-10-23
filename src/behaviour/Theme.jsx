import React from 'react'
import PropTypes from 'prop-types'
import { Subscriber } from 'react-broadcast'

import { THEME_CHANNEL, defaultTheme } from './ThemeProvider'

const createColorizor = theme => color => theme[color] || color

const Theme = ({ children }, context) => {
  if (context.broadcasts && context.broadcasts[THEME_CHANNEL]) {
    return (
      <Subscriber channel={THEME_CHANNEL}>
        {theme =>
          children({
            theme,
            colorize: createColorizor(theme),
          })}
      </Subscriber>
    )
  } else {
    return children({
      defaultTheme,
      colorize: createColorizor(defaultTheme),
    })
  }
}

Theme.propTypes = {
  children: PropTypes.func.isRequired,
}

Theme.contextTypes = Subscriber.contextTypes

export default Theme
