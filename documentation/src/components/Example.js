import React from 'react'
import View from '@allthings/elements/atoms/View'
import Icon from '@allthings/elements/atoms/Icon'
import Relative from '@allthings/elements/atoms/Relative'
import Absolute from '@allthings/elements/atoms/Absolute'
import Image from '@allthings/elements/atoms/Image'
import Logo from '@allthings/elements/atoms/Logo'
import Text from '@allthings/elements/atoms/Text'
import Spinner from '@allthings/elements/atoms/Spinner'
import ListSpinner from '@allthings/elements/molecules/List/ListSpinner'
import {
  List,
  ListItem,
  ChevronRightListItem,
} from '@allthings/elements/molecules/List'
import {
  SwitchList,
  SwitchListItem,
} from '@allthings/elements/molecules/SwitchList'
import {
  Card,
  CardButton,
  CardContent,
  CardFooter,
  CardOverlayEditor,
} from '@allthings/elements/molecules/Card'
import Button from '@allthings/elements/molecules/Button'
import Slider from '@allthings/elements/molecules/Slider'
import CountIndicator from '@allthings/elements/molecules/CountIndicator'
import ChatBubble from '@allthings/elements/molecules/ChatBubble'
import TitleBar from '@allthings/elements/organisms/TitleBar'
import SquareIconButton from '@allthings/elements/molecules/SquareIconButton'
import Circle from '@allthings/elements/atoms/Circle'
import ThemeProvider from '@allthings/elements/behaviour/ThemeProvider'
import ResourceProvider from '@allthings/elements/behaviour/ResourceProvider'
import Editor from './Editor'
import JsxParser from 'react-jsx-parser'

export default class Example extends React.Component {
  static propTypes = {
  }

  state = {
    code: this.props.children,
  }

  handleChange = code => this.setState({ code, error: null })
  handleError = error => this.setState({ error })

  render() {
    const code = `<ThemeProvider><View>${this.state
      .code}</View></ThemeProvider>`
    return (
      <div>
        <h1>example</h1>
        <Editor onChange={this.handleChange} code={this.props.children} />
        <div style={{ backgroundColor: '#F4F4F4', width: '100%', padding: 15 }}>
          <JsxParser
            bindings={this.props.bindings}
            onError={this.handleError}
            components={{
              Card,
              CardButton,
              CardContent,
              CardFooter,
              CardOverlayEditor,
              View,
              List,
              ListItem,
              SwitchList,
              SwitchListItem,
              ChevronRightListItem,
              Icon,
              ResourceProvider,
              Image,
              Text,
              Relative,
              Slider,
              Absolute,
              Logo,
              Spinner,
              ListSpinner,
              ChatBubble,
              CountIndicator,
              Circle,
              Button,
              SquareIconButton,
              ThemeProvider,
              TitleBar,
            }}
            jsx={code}
          />
          {this.state.error}
        </div>
      </div>
    )
  }
}
