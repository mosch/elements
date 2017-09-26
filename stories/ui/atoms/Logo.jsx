import React from 'react'
import View from '@allthings/react-view'
import Example from '../../Example'
import Notes from '../../Notes'
import Logo from '../../../src/atoms/Logo'
import Relative from '../../../src/atoms/Relative'
import CountIndicator from '../../../src/molecules/CountIndicator'

class LogoStory extends React.Component {
  state = {
    count: 3,
  }

  handleClick = () => {
    this.setState(state => ({ count: state.count + 1 }))
  }

  render() {
    return (
      <View>
        <Notes for={Logo} />
        <Example>
          <View style={{ background: '#bada55', padding: 15 }}>
            <Relative>
              <Logo size={80} onClick={this.handleClick} />
              <CountIndicator top="55" left="50" count={this.state.count} />
            </Relative>
          </View>
        </Example>
      </View>
    )
  }
}

export default LogoStory
