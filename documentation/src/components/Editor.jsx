import React from 'react'
import PropTypes from 'prop-types'
import CodeMirror from 'react-codemirror'
import { css } from 'glamor'
import Helmet from 'react-helmet'

const styles = {
  code: css({
    borderRadius: '6px',
    marginTop: 20,
    padding: 20,
    backgroundColor: '#263238',
  }),
}

const Editor = ({ code, mode = 'jsx', ...props }) => (
  <div {...styles.code}>
    <Helmet>
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.27.4/codemirror.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.27.4/theme/material.css"
      />
    </Helmet>
    <CodeMirror
      value={code}
      options={{
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
