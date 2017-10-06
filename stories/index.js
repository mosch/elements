import React from 'react'
import { storiesOf, linkTo } from '@storybook/react'

import Welcome from './Welcome'

import Text from './atoms/Text'
import Image from './atoms/Image'
import Icon from './atoms/Icon'
import Circle from './atoms/Circle'
import View from './atoms/View'
import Spinner from './atoms/Spinner'
import LogoStory from './atoms/Logo'

import SwitchList from './molecules/SwitchList'
import Card from './molecules/Card'
import CardList from './molecules/CardList'
import List from './molecules/List'
import ListIcon from './molecules/ListIcon'
import Button from './molecules/Button'
import CountIndicator from './molecules/CountIndicator'
import ProfileImage from './molecules/ProfileImage'
import SquareIconButton from './molecules/SquareIconButton'
import Slider from './molecules/Slider'
import ChatBubbleStory from './molecules/ChatBubble'

import TitleBar from './organisms/TitleBar'

import ThemeProvider from './behaviours/ThemeProvider'
import ResouceProvider from './behaviours/ResouceProvider'

storiesOf('Welcome', module)
  .add('Getting Started', () => (<Welcome showApp={linkTo('LoginButton')} />))
  .add('Theming', () => (<ThemeProvider />))

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
  .add('CountIndicator', () => <CountIndicator />)
  .add('SwitchList', () => <SwitchList />)
  .add('ProfileImage', () => <ProfileImage />)

storiesOf('3. Organisms', module)
  .add('TitleBar', () => <TitleBar />)

storiesOf('5. Behaviours', module)
  .add('ThemeProvider', () => <ThemeProvider />)
  .add('ResourceProvider', () => <ResouceProvider />)

