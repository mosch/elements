import React from 'react'
import Text from 'components/Text'

import {
  Post,
  PostContent,
  PostAuthor,
  PostText,
  PostInfo,
  PostFooter,
  PostLikeButton,
  PostCommentButton,
  PostOverlayMenu,
} from 'components/Pinboard'

export default class StandardPost extends React.Component {
  state = {
    showMenu: false,
  }

  toggleMenu = () => {
    this.setState(({ showMenu }) => ({ showMenu: !showMenu }))
  }

  render() {
    const Menu = (
      <PostOverlayMenu onRequestClose={this.toggleMenu}>
        <Text size="m" key="edit" color="#626262">
          Bearbeiten
        </Text>
        <Text size="m" key="report" color="#626262">
          Melden
        </Text>
        <Text size="m" key="delete" color="#e16d6d">
          Löschen
        </Text>
      </PostOverlayMenu>
    )
    return (
      <Post>
        <PostContent>
          <PostAuthor
            author={{ name: 'Jens-Peter Stickelmann' }}
            dateText="Gestern, 23:12 Uhr"
            onClickMore={this.toggleMenu}
            renderMenu={() => this.state.showMenu && Menu}
          />
          <PostText>{`La-la-Freilager
Hat irgendjemand in den oberen Stockwerken sehen können, wo es da so schaurig schön (und spanisch) singt?
Sehen kann ich nichts, es tönt wie zwischen Rautiblock und Studentenlanghaus... (wobei ich mir ziemlich sicher bin, dass es nicht unsere Studis sind, die sich da so inbrünstig-stimmlich üben).

Amüsierte Nachtgrüsse
JP`}</PostText>
          <PostInfo
            likes={32}
            comments={6}
            likeText={likes => `${likes} Personen gefällt das`}
            commentText={comments => `${comments} Kommentare`}
          />
        </PostContent>
        <PostFooter>
          <PostLikeButton liked text="Mag ich" />
          <PostCommentButton text="Kommentieren" />
        </PostFooter>
      </Post>
    )
  }
}
