import React from 'react'
import { Card, CardButton, CardContent, CardFooter } from 'components/Card'
import Text from 'components/Text'
import View from '@allthings/react-view'
import SwitchList from 'components/SwitchList/SwitchList'
import Notes from '../../Notes'
import Example from '../../Example'

class SwitchListStory extends React.Component {
  state = {
    disabled: false,
    spinning: false,
  }

  toggleDisabled = () => this.setState(state => ({ disabled: !state.disabled }))
  toggleSpin = () => this.setState(state => ({ spinning: !state.spinning }))

  render() {
    return (
      <View>
        <Notes for={SwitchList} />
        <Example>
          <SwitchList
            disabled={this.state.disabled}
            onChange={_ => _}
            options={{
              freiburg: 'Freiburg',
              berlin: 'Berlin',
              münchen: 'München',
            }}
            initialActive="freiburg"
            showSpinner={false}
          />
        </Example>
        <h2>Extended Example</h2>
        <Example>
          <Card>
            <CardContent>
              <SwitchList
                disabled={this.state.disabled}
                onChange={_ => _}
                options={{
                  freiburg: 'Freiburg',
                  berlin: 'Berlin',
                  münchen: 'München',
                }}
                initialActive="freiburg"
                showSpinner={this.state.spinning}
              />
            </CardContent>
            <CardFooter>
              <CardButton onClick={this.toggleDisabled}>
                <Text>Disable / Enable</Text>
              </CardButton>
              <CardButton onClick={this.toggleSpin}>
                <Text>Spin / Stop</Text>
              </CardButton>
            </CardFooter>
          </Card>
        </Example>
      </View>
    )
  }
}

export default SwitchListStory
