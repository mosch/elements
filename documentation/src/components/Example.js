import React from 'react'
import PropTypes from 'prop-types'
import View from '@allthings/elements/atoms/View'
import Icon from '@allthings/elements/atoms/Icon'
import Relative from '@allthings/elements/atoms/Relative'
import Absolute from '@allthings/elements/atoms/Absolute'
import Image from '@allthings/elements/atoms/Image'
import Logo from '@allthings/elements/atoms/Logo'
import Text from '@allthings/elements/atoms/Text'
import Spinner from '@allthings/elements/atoms/Spinner'
import Line from '@allthings/elements/atoms/Line'
import Inset from '@allthings/elements/atoms/Inset'
import ListIcon from '@allthings/elements/molecules/ListIcon'
import TextInput from '@allthings/elements/molecules/TextInput'
import Form from '@allthings/elements/molecules/Form/Form'
import Checkbox from '@allthings/elements/molecules/Checkbox'
import ListSpinner from '@allthings/elements/molecules/List/ListSpinner'
import NotificationBubbleManager from '@allthings/elements/behaviour/NotificationBubbleManager'
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
import NotificationBubble from '@allthings/elements/molecules/NotificationBubble'
import Slider from '@allthings/elements/molecules/Slider'
import CountIndicator from '@allthings/elements/molecules/CountIndicator'
import ChatBubble from '@allthings/elements/molecules/ChatBubble'
import ProfileImage from '@allthings/elements/molecules/ProfileImage'
import TitleBar from '@allthings/elements/organisms/TitleBar'
import Hero from '@allthings/elements/organisms/Hero'
import SquareIconButton from '@allthings/elements/molecules/SquareIconButton'
import Circle from '@allthings/elements/atoms/Circle'
import ThemeProvider from '@allthings/elements/behaviour/ThemeProvider'
import ResourceProvider from '@allthings/elements/behaviour/ResourceProvider'
import SimpleLayout from '@allthings/elements/layouts/SimpleLayout'

import Editor from './Editor'
import JsxParser from 'react-jsx-parser'

export default class Example extends React.Component {
  static propTypes = {
    bindings: PropTypes.object,
    children: PropTypes.string.isRequired,
  }

  state = {
    code: this.props.children,
  }

  handleChange = code => this.setState({ code, error: null })
  handleError = error => this.setState({ error })

  render() {
    const code = `<ThemeProvider><ResourceProvider><View>${this.state
      .code}</View></ResourceProvider></ThemeProvider>`
    return (
      <div style={{marginBottom: '15px'}}>
        <h3>Example</h3>
        <div className="row">
          <div className="col-lg-7">
            <Editor onChange={this.handleChange} code={this.props.children} />
          </div>
          <div className="col-lg-5">
              <div style={{ backgroundColor: '#F4F4F4', width: '100%', padding: 15, borderRadius: '6px', {/*position: '-webkit-sticky',*/} position: 'sticky', top: 0 }}>
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
                    Line,
                    List,
                    ListItem,
                    SwitchList,
                    Hero,
                    SwitchListItem,
                    ChevronRightListItem,
                    Icon,
                    ResourceProvider,
                    Image,
                    Text,
                    Relative,
                    Slider,
                    Absolute,
                    Checkbox,
                    Logo,
                    Form,
                    ProfileImage,
                    TextInput,
                    Inset,
                    Spinner,
                    ListSpinner,
                    ListIcon,
                    NotificationBubble,
                    NotificationBubbleManager,
                    ChatBubble,
                    CountIndicator,
                    Circle,
                    Button,
                    SquareIconButton,
                    ThemeProvider,
                    TitleBar,
                    SimpleLayout,
                  }}
                  jsx={code}
                />
                {this.state.error}
              </div>
          </div>
        </div>
      </div>
    )
  }
}
