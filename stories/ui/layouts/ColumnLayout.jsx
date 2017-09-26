import React from 'react'
import View from '@allthings/react-view'
import Example from '../../Example'
import Notes from '../../Notes'
import ColumnLayout from 'ui/layouts/ColumnLayout'
import Button from 'components/Button'

class ColumnLayoutStory extends React.Component {
  state = {
    active: 1,
  }

  setActive = () =>
    this.setState(state => ({ active: state.active == 1 ? 2 : 1 }))

  render() {
    return (
      <View>
        <Notes for={ColumnLayout} />
        <Example>
          <ColumnLayout active={this.state.active}>
            <View alignH="end" direction="row">
              <Button onClick={this.setActive}>1</Button>
            </View>
            <View alignH="end" direction="row">
              <Button onClick={this.setActive}>2</Button>
            </View>
            <View>
              <Button onClick={this.setActive}>3</Button>
            </View>
          </ColumnLayout>
        </Example>
      </View>
    )
  }
}

export default ColumnLayoutStory
