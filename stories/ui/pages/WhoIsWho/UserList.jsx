import React from 'react'

import View from '@allthings/react-view'
import GroupedCardList from 'components/CardList/GroupedCardList'
import UserListItem from 'components/WhoIsWho/UserListItem'

const UserList = () => (
  <View>
    <GroupedCardList title="A">
      <UserListItem
        id="1342"
        name="Mike Abdul"
        additional="Theresienstraße"
        profileImage="https://placeimg.com/40/40/people?t=1"
      />
      <UserListItem
        id="1342"
        name="Timo Ammer"
        additional="Blankenweg"
        profileImage="https://placeimg.com/40/40/people?t=2"
      />
    </GroupedCardList>

    <GroupedCardList title="B">
      <UserListItem
        id="1342"
        name="Sabrina Bemme"
        additional="Lilienweg"
        profileImage="https://placeimg.com/40/40/people?t=3"
      />
      <UserListItem
        id="1342"
        name="Hilde Bruhn"
        additional="Oranienallee"
        profileImage="https://placeimg.com/40/40/people?t=4"
      />
      <UserListItem
        id="1342"
        name="John Bwala"
        additional="Wichtelweg"
        profileImage="https://placeimg.com/40/40/people?t=5"
      />
    </GroupedCardList>
  </View>
)

export default UserList
