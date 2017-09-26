import React from 'react'
import Text from 'components/Text'
import View from '@allthings/react-view'
import Example from '../../Example'
import Notes from '../../Notes'

class TextStory extends React.Component {
  render() {
    return (
      <View>
        <Notes for={Text} />
        <Example>
          <Text>
            Text will be used for everywhere a text appears. The only exception
            is in molecules that already provide the text component for you.
          </Text>
        </Example>
        <h3>Auto Break Example</h3>
        <Example>
          <Text autoBreak={true}>
            Textwillbeusedforeverywhereatextappears.Theonlyexceptionisinmoleculesthatalreadyprovidethetextcomponentforyou.
          </Text>
        </Example>
      </View>
    )
  }
}

export default TextStory

/**
 import React from 'react'
 import Text from 'components/Text'
 import Card, { CardContent, Spacer } from 'components/Card'
 import { ColorPalette } from '@allthings/colors'
 import View from '@allthings/react-view'

 class TextStory extends React.Component {
  static propTypes = {}

  static defaultProps = {}

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <View>
        <Card>
          <CardContent>
            <Text strong size="xxl">Text</Text>
            <Spacer />
            <Text>
              Text will be used for everywhere a text appears.
              The only exception is in molecules that already provide the
              text component for you.
            </Text>
          </CardContent>
        </Card>
        <Spacer />
        <Card>
          <CardContent>
            <Text strong size="l">Colors</Text>
            <Text>
              Colors are passed as a string. Available colors are:
            </Text>
            {Object.keys(ColorPalette.text).map(color => (
              <Text color={color} block={false}>{color}, </Text>))}
          </CardContent>
        </Card>
        <Spacer />
        <Card>
          <CardContent>
            <Text strong size="l">Block</Text>
            <Spacer />
            <Text>
              Texts are <Text block={false} strong>block by default</Text>, so
              make sure
              to use block={false} to set it non blocking, e.g. when use nested
            </Text>
            <Spacer />
            <Text strong size="l">Auto Break</Text>
            <Spacer />
            <Text>
              Texts can <Text block={false} strong>auto-break for you</Text>, so
              make sure
              to use autoBreak=true if you dont want text that freaks out.
            </Text>
            <Spacer />
            <Text strong size="m">Without Auto Break</Text>
            <Text>
              Loremipsumdolorsitametconsectetueradipiscingelit.
            </Text>
            <Spacer />
            <Text strong size="m">With Auto Break</Text>
            <Text autoBreak={true}>
              Loremipsumdolorsitametconsectetueradipiscingelit.
            </Text>
          </CardContent>
        </Card>
      </View>
    )
  }
}

 export default TextStory
 **/
