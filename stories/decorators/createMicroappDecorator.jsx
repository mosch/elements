import React from 'react'
import { css } from 'glamor'

const styles = {
  wrapper: css({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'absolute',
    width: '100%',
    height: '100vh',
    left: 0,
    top: 0,
    background: '#efefef',
    fontSmooth: 'auto',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'auto',
  }),

  mobileView: css({
    width: 320,
    height: 568,
    boxShadow: '0px 0px 6px 0px rgba(0, 0, 0, 0.15)',
    background: '#f0f2f5',
    marginTop: 40,
    overflow: 'auto',
    position: 'relative',
  }),
}

class Technology extends React.Component {
  static propTypes = {}

  static defaultProps = {}

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <svg width="42px" height="42px" viewBox="0 0 112.5 112.5">
        <g>
          <path d="M110.285,97.919H2.215C0.993,97.919,0,96.926,0,95.704V16.796c0-1.222,0.993-2.215,2.215-2.215h108.07
		c1.222,0,2.215,0.993,2.215,2.215v78.908C112.5,96.926,111.507,97.919,110.285,97.919z M2.215,15.581
		C1.545,15.581,1,16.126,1,16.796v78.908c0,0.67,0.545,1.215,1.215,1.215h108.07c0.67,0,1.215-0.545,1.215-1.215V16.796
		c0-0.67-0.545-1.215-1.215-1.215H2.215z M105.639,89.844H6.861V21.656h98.778V89.844L105.639,89.844z M7.861,88.844h96.778V22.656
		H7.861V88.844z M53.976,96.146l2.034-0.449v-2.025l-2.034,0.398V96.146z M53.976,93.58l2.034-0.399v-2.035l-2.034,0.447V93.58z
		 M56.49,95.59l2.033-0.448v-1.966l-2.033,0.398V95.59z M56.49,91.04v2.045l2.033-0.398V90.59L56.49,91.04z" />
        </g>
      </svg>
    )
  }
}

class Viewport extends React.Component {
  static propTypes = {
    children: React.PropTypes.node,
  }

  state = {
    width: 320,
    height: 770,
    scale: 1,
    padding: false,
    shiftPressed: false,
  }

  togglePadding = () => this.setState(({ padding }) => ({ padding: !padding }))

  setWidth = e => {
    const width = +e.target.value
    this.setState(state => ({
      width,
      ...this.calculateScale(state.height, width),
    }))
  }

  setHeight = e => {
    const height = +e.target.value
    this.setState(state => ({
      height,
      ...this.calculateScale(height, state.width),
    }))
  }

  setShiftPressed = e => {
    const { shiftKey } = e
    if (
      (!this.state.shiftPressed && shiftKey) ||
      (this.state.shiftPressed && !shiftKey)
    ) {
      this.setState(() => ({ shiftPressed: shiftKey }))
    }
  }

  setScreenSize = (width, height) => {
    this.setState(state => ({
      width,
      height,
      ...this.calculateScale(height, width),
    }))
  }

  setMobilePhone = () => this.setScreenSize(320, 568)
  setLargeMobilePhone = () => this.setScreenSize(441, 736)
  setSmallDesktop = () => this.setScreenSize(800, 600)
  setPortraitDesktop = () => this.setScreenSize(768, 1366)
  setDesktop = () => this.setScreenSize(1920, 1080)

  setWrapper = r => (this.wrapper = r)

  componentDidMount() {
    this.setState(state => this.calculateScale(state.height, state.width))
  }

  calculateScale = (newHeight, newWidth) => {
    console.log(this.wrapper.getBoundingClientRect())
    const { width, height } = this.wrapper.getBoundingClientRect()
    const heightScale = Math.min(1, height / (newHeight + 100))
    const widthScale = Math.min(1, width / newWidth)
    console.log(Math.floor(Math.min(1, widthScale, heightScale) * 100))
    return {
      scale: Math.floor(Math.min(1, widthScale, heightScale) * 100) / 100,
    }
  }

  render() {
    const { width, height, scale } = this.state

    return (
      <div {...styles.wrapper}>
        <div {...css({ flexDirection: 'row' })}>
          <input
            type="number"
            style={{ width: 40 }}
            value={width}
            step={this.state.shiftPressed ? 10 : 1}
            onChange={this.setWidth}
            onKeyDown={this.setShiftPressed}
            onKeyUp={this.setShiftPressed}
          />
          <span>⨉</span>
          <input
            type="number"
            style={{ width: 40 }}
            value={height}
            step={this.state.shiftPressed ? 10 : 1}
            onChange={this.setHeight}
            onKeyDown={this.setShiftPressed}
            onKeyUp={this.setShiftPressed}
          />
          <span>{this.state.scale * 100}%</span>
        </div>
        <div
          {...css({
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            width: '100%',
            border: '1px solid green',
          })}
        >
          <div onClick={this.setMobilePhone}>
            <Technology />
            320x568
          </div>
          <div onClick={this.setMobilePhone}>
            <Technology />
            320x568
          </div>
          <button onClick={this.setSmallDesktop}>800x600</button>
          <button onClick={this.setPortraitDesktop}>768x1366</button>
          <button onClick={this.setDesktop}>1920x1080</button>
        </div>
        <div
          style={{
            width: '100%',
            height: '90vh',
            display: 'flex',
            justifyContent: 'center',
          }}
          ref={this.setWrapper}
        >
          <div
            {...css(styles.mobileView, {
              transform: `scale(${scale})`,
              transformOrigin: '50% 0',
            })}
            style={{ width, height, minHeight: height - 10 }}
          >
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}

export default function createViewportDecorator() {
  return story => <Viewport>{story()}</Viewport>
}
