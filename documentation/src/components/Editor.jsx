import React from 'react'
import PropTypes from 'prop-types'
import CodeMirror from 'react-codemirror'
import { css } from 'glamor'
import Helmet from 'react-helmet'
import 'codemirror/mode/jsx/jsx';
import 'codemirror/mode/diff/diff';
import 'codemirror/addon/selection/active-line';
import 'codemirror/addon/edit/matchbrackets.js'

const styles = {
  code: css({
    borderRadius: '6px',
    marginTop: 0,
    marginBottom: 30,
    padding: 20,
    backgroundColor: '#263238',
  }),
}

const getMode = (mode) => {
  switch (mode) {
    case 'js':
      return 'javascript'
    default:
      return mode
  }
}

const Editor = ({ code, mode = 'jsx', options = {}, children, ...props }) => (
  <div {...styles.code}>
    <Helmet>
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.18.2/codemirror.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="/css/codemirror.theme.allthings.css"
      />
    </Helmet>
    <CodeMirror
      value={code || children}
      options={{
        ...options,
        mode: getMode(mode),
        viewportMargin: Infinity,
        styleActiveLine: true,
        matchBrackets: true,
        lineNumbers: true,
        theme: 'allthings',
      }}
      {...props}
    />
  </div>
)

Editor.propTypes = {
  code: PropTypes.string,
  children: PropTypes.string,
  mode: PropTypes.oneOf(['javascript', 'js', 'jsx', 'diff']),
  options: PropTypes.object,
}

export default Editor
