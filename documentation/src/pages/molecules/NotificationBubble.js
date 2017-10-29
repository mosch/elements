import React from 'react'
import View from '@allthings/elements/atoms/View'
import NotificationBubbleManager, {
  sendSuccess,
} from '@allthings/elements/behaviour/NotificationBubbleManager'
import ThemeProvider from '@allthings/elements/behaviour/ThemeProvider'
import ResourceProvider from '@allthings/elements/behaviour/ResourceProvider'
import Button from '@allthings/elements/molecules/Button'
import Editor from '../../components/Editor'

function sendMySuccess() {
  sendSuccess('Congratulations, you clicked the Button')
}

export default () => (
  <ThemeProvider>
    <ResourceProvider>
      <NotificationBubbleManager>
        <View>
          <h1>NotificationBubble</h1>
          <p>
            NotificationBubbles are used to inform users about important
            information, when an action has failed or succeeded. They&apos;re a most
            prominent ways to communicate to merchants. NotificationBubbles are
            always visible and pop up at the bottom of a page.
          </p>
          <h2>Best practices</h2>
          <ul>
            <li>
              Do use them when you otherwise users won&apos;t have any feedback.
            </li>
            <li>Don&apos;t use them extensive.</li>
            <li>Don&apos;t use them when no feedback is required.</li>
          </ul>
          <h2>Example</h2>
          <p>
            To use NotificationBubbles you need to wrap the{' '}
            <strong>NotificationBubbleManager</strong> around your app. Use{' '}
            <code>sendSuccess()</code> exported by the NotificationBubbleManager
            to show a Notification.
          </p>
          <Button
            onClick={sendMySuccess}
          >
            Click me!
          </Button>
          <Editor options={{ readOnly: 'nocursor' }}>
            {`import NotificationBubbleManager, { sendSuccess } from '@allthings/elements/behaviour/NotificationBubbleManager'
import Button from '@allthings/elements/molecules/Button'

const ShowNotification = () => (
  <NotificationBubbleManager>
    <View>
      <Button onClick={() => sendSuccess('Congratulations, you clicked the Button')}>
        Click me!
      </Button>
    </View>
  </NotificationBubbleManager>
)`}
          </Editor>
          {/**
          <Example>{`<ResourceProvider>
    <NotificationBubbleManager>
      Notification will be shown down there
    </NotificationBubbleManager>
</ResourceProvider>`}</Example> */}
        </View>
      </NotificationBubbleManager>
    </ResourceProvider>
  </ThemeProvider>
)
