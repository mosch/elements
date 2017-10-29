import Typography from "typography"
import gray from 'gray-percentage'

const Theme = {
  title: 'Allthings',
  baseFontSize: '16px',
  baseLineHeight: 1.56,
  googleFonts: [
    {
      name: 'Source Sans Pro',
      styles: ['600'],
    },
    {
      name: 'Open Sans',
      styles: ['200', '400', '400i', '700'],
    },
  ],
  scaleRatio: 2.5,
  headerFontFamily: ['Source Sans Pro', 'sans-serif'],
  bodyFontFamily: ['Open Sans', 'sans-serif'],
  headerColor: 'hsla(0,0%,0%,0.85)',
  bodyColor: 'hsla(0,0%,0%,0.7)',
  headerWeight: '600',
  bodyWeight: 400,
  boldWeight: 700,
  overrideStyles: ({ scale, rhythm }, options) => {
    const styles = {
      'h1 a,h2 a,h3 a,h4 a,h5 a,h6 a': {
        fontWeight: options.headerWeight,
      },
      a: {
        fontWeight: 400,
        color: '#419eda',
        textDecoration: 'none',
      },
      'a:hover': {
        color: '#2a6496',
        textDecoration: 'underline',
      },
      blockquote: {
        ...scale(1 / 5),
        color: gray(40),
        paddingLeft: rhythm(3 / 4),
        marginLeft: 0,
        borderLeft: `${rhythm(1 / 4)} solid ${gray(87)}`,
      },
    }

    return styles
  },
}

const typography = new Typography(Theme)

export default typography
