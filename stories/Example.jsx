import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'glamor'
import { DraggableCore } from 'react-draggable'
import Code from './Code'
import ReactDOMServer from 'react-dom/server'
import { renderStatic } from 'glamor/server'
import Frame from 'react-frame-component'
import ThemeProvider from '../src/behaviour/ThemeProvider'
import { getTheme } from './utils/themes'

class Purify extends React.PureComponent {
  render() {
    return this.props.children
  }
}

const styles = {
  wrapper: css({
    marginTop: 20,
    borderRadius: '6px',
    display: 'flex',
    flexDirection: 'row',
    maxWidth: '100%',
    alignItems: 'stretch',
    alignContent: 'stretch',
  }),
  example: css({
    background: '#F4F4F4',
    flexGrow: '1',
    flexShrink: '1',
    border: 0,
    padding: 15,
  }),
  dragger: css({
    borderRadius: '6px',
    positon: 'absolute',
    padding: '10px',
    boxShadow: '0 1.2rem 3.6rem rgba(0,0,0,.2)',
    alignSelf: 'stretch',
    fill: '#B1B2B3',
    backgroundColor: '#FFF',
    maxWidth: '15px',
  }),
}
export default class Example extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    showCode: PropTypes.bool,
    responsive: PropTypes.bool,
  }

  static defaultProps = {
    showCode: true,
    height: 50,
  }

  handleDrag = (e, ui) => {
    this.setState(({ width }) => ({
      width: Math.max(315, width + ui.deltaX),
    }))
  }

  handleDragToggle = () => this.setState(({ drag }) => ({ drag: !drag }))

  state = {
    width: null,
    drag: false,
  }

  setWrapper = w => (this.wrapper = w)
  setIframe = i => (this.iframe = i)

  componentDidMount() {
    this.setState({
      width: this.wrapper.getBoundingClientRect().width,
    })
    if (this.props.responsive) {
      this.renderCss(this.props.children)
      this.forceUpdate()
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.responsive) {
      this.renderCss(nextProps.children)
    }
  }

  renderCss(children) {
    let { css } = renderStatic(() => ReactDOMServer.renderToString(children))
    this.css = css
  }

  renderHead() {
    return (
      <style>
        {`body {
          margin: 0;
          -webkit-font-smoothing: antialiased;
	        -moz-osx-font-smoothing: grayscale;
        }`}
        {this.css}
      </style>
    )
  }

  renderExample = () => {
    const { width } = this.state
    const style = {
      maxWidth: width,
      minHeight: this.props.height,
      maxHeight: 800,
    }

    return this.props.responsive ? (
      <Frame
        ref={this.setIframe}
        head={this.renderHead()}
        {...styles.example}
        style={style}
      >
        <Purify>{this.getThemedExample()}</Purify>
      </Frame>
    ) : (
      <div {...styles.example} style={{ ...style, overflow: 'scroll' }}>
        {this.getThemedExample()}
      </div>
    )
  }

  getThemedExample = () => (
    <ThemeProvider theme={getTheme('demo')}>
      {this.props.children}
    </ThemeProvider>
  )

  render() {
    const { drag } = this.state
    return (
      <div>
        <div
          {...styles.wrapper}
          style={{ position: 'relative' }}
          ref={this.setWrapper}
        >
          <div
            style={{
              position: 'absolute',
              top: 0,
              right: 35,
              bottom: 0,
              left: 0,
              display: drag ? 'block' : 'none',
            }}
          />
          {this.renderExample()}
          <DraggableCore
            bounds="parent"
            onDrag={this.handleDrag}
            onStart={this.handleDragToggle}
            onStop={this.handleDragToggle}
          >
            <div {...styles.dragger}>
              <svg
                id="SVGIconDrag"
                viewBox="0 0 20 20"
                width="100%"
                height="100%"
              >
                <path d="M6 0h2v20H6zM13 0h2v20h-2z" />
              </svg>
            </div>
          </DraggableCore>
        </div>
        {this.props.showCode && <Code>{this.props.children}</Code>}
      </div>
    )
  }
}
