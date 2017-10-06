import React from 'react'
import Slider from '../../src/molecules/Slider'
import View from '@allthings/react-view'
import Example from '../Example'
import Notes from '../Notes'

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
        <Example>
          <Slider
            min={20}
            max={200}
            step={10}
            value={this.state.value}
            onChange={this.handleChange}
          />
        </Example>
      </View>
    )
  }
}

export default CardStory
