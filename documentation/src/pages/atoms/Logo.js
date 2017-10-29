import React from 'react'
import View from '@allthings/elements/atoms/View'
import Example from '../../components/Example'
import Notes from '../../components/Notes'
import Logo from '@allthings/elements/atoms/Logo'

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
        <Example>{`
<ThemeProvider>
  <View style={{ background: '#bada55', padding: 15 }}>
    <Relative>
      <Logo size={80} onClick={this.handleClick} />
      <CountIndicator top="55" left="50" count={this.state.count} />
    </Relative>
  </View>
</ThemeProvider>
        `}</Example>
      </View>
    )
  }
}

export default LogoStory
