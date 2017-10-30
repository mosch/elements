import React from 'react'
import Example from '../../components/Example'
import Editor from '../../components/Editor'

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
        <p>
          Forms are used to allow the user to submit information to our app. The form component provides a very simple,
          yet powerful way how to handle forms.
        </p>
        <p>
          We are using uncontrolled components to handle forms. The native onSubmit Event gets intercepted and all values
          are collected and get pass them as second argument to your onSubmit callback.
        </p>
        <p style={{fontStyle: 'italic'}}>
          Note: You don't need to use the From component in order to make the components like TextInput work. You can also use them standalone.
          To learn more, check out <a href="https://reactjs.org/docs/forms.html#controlled-components">controlled components section</a> in the React docs.
        </p>
        <h2>Getting started with Form</h2>
        <p>
          The Form components just <strong>does one simple thing</strong>:
          It intercepts the onSubmit Event and collects all data that the user entered and passes it as <strong>second parameter</strong> to the onSubmit callback,
          so you can work with it.
        </p>
        <h3>Simple example</h3>
        <Editor>{`import { Form, TextInput } from '@allthings/elements'
class MyForm extends React.Component {

  handleSubmit = (e, data) => {
    exampleLoginRequest(data.username, data.password)
  }

  render () {
    return (
        <Form onSubmit={this.handleSubmit}>
            <TextInput name="username" required defaultValue="test"/>
            <TextInput type="password" name="password" required />
        </Form>)
  }
}`}</Editor>
        <h3>HTML5 Form validation</h3>
        <p>
          To validate user input, we rely on <a href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Form_validation">HTML5 Form validation</a>. It provides a standardized and powerful way to validate users input and is supported across all modern browsers.
          If you did not use it yet, make sure the read the documentation on <a href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Form_validation">Mozilla.org</a>.
          Also see the <a href="/molecules/TextInput/">TextInput</a> for allowed props.
        </p>

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
