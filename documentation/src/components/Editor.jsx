import React from 'react'
import PropTypes from 'prop-types'
import CodeMirror from 'react-codemirror'
import { css } from 'glamor'
import Helmet from 'react-helmet'
import 'codemirror/mode/jsx/jsx';

const styles = {
  code: css({
    borderRadius: '6px',
    marginTop: 20,
    padding: 20,
    backgroundColor: '#263238',
  }),
}

const Editor = ({ code, mode = 'jsx', options, children, ...props }) => (
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
        href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.18.2/theme/material.css"
      />
    </Helmet>
    <CodeMirror
      value={code || children}
      options={{
        ...options,
        mode,
        viewportMargin: Infinity,
        theme: 'material',
      }}
      {...props}
    />
  </div>
)

Editor.propTypes = {
  code: PropTypes.string,
  mode: PropTypes.oneOf(['javascript', 'jsx']),
}

export default Editor
