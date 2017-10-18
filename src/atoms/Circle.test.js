import React from 'react'
import renderer from 'react-test-renderer'
import Circle from './Circle'
import ThemeProvider from '../behaviour/ThemeProvider'

test('Circle renders without error', () => {
  const tree = renderer
    .create(
      <ThemeProvider>
        <Circle color="pink" fill={true} radius={5} />
      </ThemeProvider>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
