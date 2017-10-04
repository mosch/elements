import {
  colorCode,
  textColorCode,
  backgroundColorCode,
} from '../../src/propTypes/color'

const themes = {
  demo: {
    primary: colorCode('red'),
    text: textColorCode('primary'),
    textOnBackground: colorCode('white'),
    secondaryText: textColorCode('secondary'),
    titleColor: colorCode('grey'),
    notificationIndicator: colorCode('red'),
    contrast: colorCode('white'),
    disabled: colorCode('grey'),
    background: backgroundColorCode('bright'),
  },
}

export const getTheme = name => themes[name]
