import React from 'react'

import {
  Post,
  PostForm,
  PostContent,
  PostText,
  PostFormInput,
  PostFooter,
  PostSendButton,
  PostAuthorCompact,
  PostSpacer,
  CommentLoaderButton,
} from 'components/Pinboard'
import { View } from '@allthings/react-view'
import { css } from 'glamor'

import Text from 'components/Text'

export default class GreetingPost extends React.Component {
  render() {
    return (
      <View>
        <Text size="l" strong color="#626262" {...css({ margin: 15 })}>
          3 Kommentare
        </Text>

        <Post>
          <PostContent>
            <PostAuthorCompact
              author={{
                name: 'Susanne Heinrich',
                profileImage: 'https://placeimg.com/29/29/people',
              }}
              dateText="Heute, 12:29 Uhr"
            />
            <PostText>
              {`Da hat es ja eine Visitenkarte mit Telefonnummer und Mailadresse drauf.. Dort anrufen, nachfragen, erledigt.`}
            </PostText>
          </PostContent>
        </Post>

        <PostSpacer background="#e7ecee" height={1} />

        <Post>
          <PostContent>
            <PostAuthorCompact
              author={{
                name: 'Susanne Heinrich',
                profileImage: 'https://placeimg.com/29/29/people',
              }}
              dateText="Heute, 12:45 Uhr"
            />
            <PostText>
              {`Da hat es ja eine Visitenkarte mit Telefonnummer und Mailadresse drauf.. Dort anrufen, nachfragen, erledigt.`}
            </PostText>
          </PostContent>
        </Post>

        <PostSpacer background="#e7ecee" height={1} />

        <CommentLoaderButton>
          20 weitere Kommentare anzeigen
        </CommentLoaderButton>

        <PostSpacer background="#e7ecee" height={1} />

        <Post>
          <PostContent>
            <PostAuthorCompact
              author={{
                name: 'Susanne Heinrich',
                profileImage: 'https://placeimg.com/29/29/people',
              }}
              dateText="Heute, 12:45 Uhr"
            />
            <PostText>
              {`Da hat es ja eine Visitenkarte mit Telefonnummer und Mailadresse drauf.. Dort anrufen, nachfragen, erledigt.`}
            </PostText>
          </PostContent>
        </Post>

        <PostSpacer background="#e7ecee" height={1} />

        <PostForm>
          <PostContent>
            <PostFormInput placeholder="Gib einen Kommentar ab" />
          </PostContent>
          <PostFooter>
            <PostSendButton text="Senden" />
          </PostFooter>
        </PostForm>
        <PostSpacer />
      </View>
    )
  }
}
