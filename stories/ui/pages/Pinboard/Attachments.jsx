import React from 'react'
import { css } from 'glamor'
import { List } from 'components/List'
import { Post, PostSpacer, PostAttachment } from 'components/Pinboard'
import { View } from '@allthings/react-view'
import Text from 'components/Text'

function handleClick(name, url) {
  console.log(`Clicked on file ${name} with URL ${url}`)
}

export default function Attachments() {
  return (
    <View direction="column">
      <Text size="l" strong color="#626262" {...css({ margin: 15 })}>
        Dateianhänge
      </Text>
      <List>
        <Post>
          <PostAttachment
            name="Anleitung für Staubsauger 2014.pdf"
            onClick={handleClick}
            url="a/b/c"
          />
        </Post>
        <PostSpacer background="#e7ecee" height={1} />
        <Post>
          <PostAttachment
            name="Bestellbestaetigung_5544.pdf"
            onClick={handleClick}
            url="d/e/f"
          />
        </Post>
      </List>
    </View>
  )
}
