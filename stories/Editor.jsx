import React from 'react'
import PropTypes from 'prop-types'
import CodeMirror from 'react-codemirror'
import { css } from 'glamor'
import JSX from 'codemirror/mode/jsx/jsx'
import Diff from 'codemirror/mode/diff/diff'
import Javascript from 'codemirror/mode/javascript/javascript'

const styles = {
  code: css({
    borderRadius: '6px',
    overflow: 'hidden',
    marginTop: 20,
    padding: 20,
    backgroundColor: '#263238',
  }),
}

const Editor = ({ code, mode = 'jsx' }) => (
  <div {...styles.code}>
    <CodeMirror
      value={code}
      options={{
        mode,
        theme: 'material',
      }}
    />
  </div>
)

Editor.propTypes = {
  code: PropTypes.string,
  mode: PropTypes.oneOf(['javascript', 'jsx']),
}

export default Editor
