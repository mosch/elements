import React from 'react'
import Example from '../../components/Example'

class FormExample extends React.Component {
  state = {
    data: null,
  }

  handleSubmit = (e, formData) => {
    formData && this.setState({ data: formData })
  }

  render() {
    return (
      <div>
        <h1>Forms</h1>
        <p>Forms are a curical </p>
        <Example bindings={{onSubmit: this.handleSubmit}}>
          {`<ResourceProvider>
  <ThemeProvider theme={{ primary: '#bada55' }}>
    <View direction="column" flex="flex">
      <TitleBar>
        <SquareIconButton icon="login-key" iconColor="white" />
        <Text strong color="white">
          Create new account
        </Text>
      </TitleBar>
      <SimpleLayout>
        <Form>
          <Card>
            <List>
              <TextInput
                name="name"
                placeholder="Your first- and surname"
                pattern="[A-Za-z ]*"
                required
              />
              <TextInput
                type="email"
                name="number"
                placeholder="Your email address"
                required
              />
              <TextInput
                type="text"
                lines={3}
                name="longStory"
                placeholder="A long story"
              />
              <TextInput
                type="text"
                lines={2}
                maxLength={15}
                name="limitedStory"
                placeholder="A limited story"
              />
              <TextInput
                name="number"
                placeholder="Your phone number"
                minLength={3}
              />
              <Checkbox
                name="accept"
                required
                label="Hereby I accept the terms & blablabla"
              />
              <ListItem alignH="center">
                <Button type="submit">Create my account</Button>
              </ListItem>
            </List>
          </Card>
        </Form>
      </SimpleLayout>
    </View>
  </ThemeProvider>
  </ResourceProvider>`}
        </Example>
        <h2>Output of onSubmit</h2>
        <pre>{JSON.stringify(this.state.data, null, 2)}</pre>
      </div>
    )
  }
}

export default FormExample
