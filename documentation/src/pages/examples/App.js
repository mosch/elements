import React from 'react'
import Example from '../../components/Example'

export default () => (
  <div>
    <Example>
      {`<ThemeProvider>
  <TitleBar>
    <Inset>
      <Text size="m" color="contrast">
        Todo
      </Text>
    </Inset>
  </TitleBar>
</ThemeProvider>
        `}
    </Example>
  </div>
)
