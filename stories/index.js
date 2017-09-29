import React from 'react'
import { storiesOf, linkTo } from '@storybook/react'

import createMicroappDecorator from './decorators/createMicroappDecorator'
import createViewportDecorator from './decorators/createViewportDecorator'

import Welcome from './Welcome'
import Incomplete from './Incomplete'

import Text from './ui/atoms/Text'
import Image from './ui/atoms/Image'
import Icon from './ui/atoms/Icon'
import Circle from './ui/atoms/Circle'
import View from './ui/atoms/View'
import Spinner from './ui/atoms/Spinner'

import SwitchList from './ui/molecules/SwitchList'
import Card from './ui/molecules/Card'
import CardList from './ui/molecules/CardList'
import List from './ui/molecules/List'
import ListIcon from './ui/molecules/ListIcon'
import Button from './ui/molecules/Button'
import CountIndicatorStory from './ui/molecules/CountIndicator'
import ProfileImage from './ui/molecules/ProfileImage'
import SquareIconButton from './ui/molecules/SquareIconButton'
import Slider from './ui/molecules/Slider'

import ThemeProviderStory from './ui/behaviours/ThemeProvider'

import TitleBar from './ui/organisms/TitleBar'
import LogoStory from './ui/atoms/Logo'
import ChatBubbleStory from './ui/molecules/ChatBubble'

storiesOf('Welcome', module).add('Getting Started', () => (
  <Welcome showApp={linkTo('LoginButton')} />
)).add('Themeing', () => (
  <ThemeProviderStory />
))

storiesOf('1. Atoms', module)
  .add('Icon', () => <Icon />)
  .add('Circle', () => <Circle />)
  .add('Image', () => <Image />)
  .add('Spinner', () => <Spinner />)
  .add('Text', () => <Text />)
  .add('View', () => <View />)
  .add('Logo', () => <LogoStory />)

storiesOf('2. Molecules', module)
  .add('List', () => <List />)
  .add('Slider', () => <Slider />)
  .add('ListIcon', () => <ListIcon />)
  .add('Button', () => <Button />)
  .add('ChatBubble', () => <ChatBubbleStory />)
  .add('Card', () => <Card />)
  .add('CardList', () => <CardList />)
  .add('SquareIconButton', () => <SquareIconButton />)
  .add('CountIndicator', () => <CountIndicatorStory />)
  .add('SwitchList', () => <SwitchList />)
  .add('ProfileImage', () => <ProfileImage />)
  .add('RangeSlider', () => <Incomplete />)

storiesOf('3. Organisms', module)
  .add('Microapp', () => <Incomplete />)
  .add('TitleBar', () => <TitleBar />)

//storiesOf('4. Templates & Layouts', module)

storiesOf('5. Behaviours', module).add('ThemeProvider', () => (
  <ThemeProviderStory />
))

