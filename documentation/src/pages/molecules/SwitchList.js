import React from 'react'
import View from '@allthings/elements/atoms/View'
import SwitchList from '@allthings/elements/molecules/SwitchList/SwitchList'
import Notes from '../../components/Notes'
import Example from '../../components/Example'

export default class extends React.Component {

  handleChange = (active) => this.setState({})

  render() {
    return (
      <View>
        <Notes for={SwitchList} />
        <Example bindings={{ onChange: this.handleChange }}>
          {`<SwitchList
    options={{
      a: 'Freiburg',
      b: 'Berlin',
      c: 'München',
    }}
    initialActive="b"
    showSpinner={false}
  />`}
        </Example>
      </View>
    )
  }
}
