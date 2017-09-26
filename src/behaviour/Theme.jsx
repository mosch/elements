import React from 'react'
import PropTypes from 'prop-types'
import { Subscriber } from 'react-broadcast'

import { THEME_CHANNEL } from './ThemeProvider'

const createColorizor = theme => color => theme[color] || color

const Theme = ({ children }) => (
  <Subscriber channel={THEME_CHANNEL}>
    {theme =>
      children({
        theme,
        colorize: createColorizor(theme),
      })}
  </Subscriber>
)

Theme.propTypes = {
  children: PropTypes.func.isRequired,
}

export default Theme
