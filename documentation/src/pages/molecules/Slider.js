import React from 'react'
import Slider from '@allthings/elements/molecules/Slider'
import View from '@allthings/elements/atoms/View'
import Example from '../../components/Example'
import Notes from '../../components/Notes'

class CardStory extends React.Component {
  state = {
    value: 50,
  }

  handleChange = e => {
    this.setState({ value: e.target.value })
  }

  render() {
    return (
      <View>
        <Notes for={Slider} />
        <Example bindings={{value: this.state.value, onChange: this.handleChange}}>{`<Slider
  min={20}
  max={200}
  step={10}
/>`}</Example>
        {this.state.value}
      </View>
    )
  }
}

export default CardStory
