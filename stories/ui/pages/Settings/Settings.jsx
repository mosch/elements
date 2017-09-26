import React from 'react'
import Text from 'components/Text'

import GroupedCardList from 'components/CardList/GroupedCardList'
import SettingsListItem from 'components/Settings/SettingsListItem'
import View from '@allthings/react-view'
import { ColorPalette } from '@allthings/colors'
import ProfileImage from 'components/ProfileImage'
import { css } from 'glamor'
import TextInput from 'components/TextInput'
import SwitchList from 'components/SwitchList/SwitchList'
import SwitchListItem from 'components/SwitchList/SwitchListItem'
import ExpandingTextarea from 'components/ExpandingTextarea'
import UserProfileImage from 'components/UserProfileImage'

const styles = {
  expTextarea: css({
    color: ColorPalette.text.secondary,
    fontSize: '14px',
    fontFamily: '"Open Sans"',
    padding: 0,
    '::placeholder': {
      color: ColorPalette.text.gray,
    },
  }),
}

export default class Settings extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      description: "User's own description",
      showCharsLeft: false,
    }
  }
  render() {
    return (
      <View padded background="#ecf0f1">
        {this.renderContent()}
      </View>
    )
  }

  renderContent = () => {
    return (
      <View>
        <GroupedCardList title="Account and profile">
          <SettingsListItem property="profile image" onClick={() => {}}>
            <UserProfileImage
              profileImage={null}
              size="medium"
              style={{ cursor: 'pointer', flexShrink: 0 }}
            />
            {this.state.profileImageTick && this.renderTick()}
          </SettingsListItem>
          <SettingsListItem property="name">
            <TextInput
              onBlur={this.handleNameChange}
              placeholder="enter name"
              initialValue="Test User"
              validateField={this.validateUsername}
              flex="grow"
            />
            {this.state.usernameTick && this.renderTick()}
          </SettingsListItem>
          <SettingsListItem property="email">
            <TextInput placeholder="enter email" type="email" flex="grow" />
            {this.state.emailTick && this.renderTick()}
          </SettingsListItem>
          <SettingsListItem property="phone">
            <TextInput placeholder="phone" type="tel" flex="grow" />
            {this.state.phoneNumberTick && this.renderTick()}
          </SettingsListItem>
          <SettingsListItem property="language setting">
            {this.renderLanguageSwitchList()}
          </SettingsListItem>
          <SettingsListItem
            property="summary"
            description="description of summary"
          >
            {this.renderSummaryList()}
          </SettingsListItem>
        </GroupedCardList>
        <GroupedCardList title="profile text">
          <View direction="row">
            <ExpandingTextarea
              placeholder="write somethign about yourself"
              value={this.state.description}
              onChange={this.handleDescriptionChange}
              onBlur={this.handleDescriptionSubmit}
              containerStyle={{ padding: 14 }}
              {...styles.expTextarea}
            />
            {this.state.descriptionTick &&
              this.renderTick({}, { paddingTop: 16, paddingRight: 16 })}
            {this.state.showCharsLeft &&
              this.renderCharsLeft(
                MAX_DESC_CHARS - this.state.description.length
              )}
          </View>
        </GroupedCardList>
        <GroupedCardList title="other settings">
          <SettingsListItem
            property="change password"
            onClick={this.props.openChangePasswordOverlay}
          />
          <SettingsListItem
            property="Invitations"
            onClick={this.props.navigateToInvitations}
          />
          <SettingsListItem
            property="log out"
            data-e2e="logout-button"
            onClick={this.props.handleClickLogout}
          />
        </GroupedCardList>
      </View>
    )
  }
  renderSummaryList = () => {
    return (
      <View direction="row">
        <SwitchList
          onChange={this.handleActiveSummaryChange}
          options={{
            daily: 'daily',
            weekly: 'weekly',
            never: 'never',
          }}
        />
      </View>
    )
  }
  renderLanguageSwitchList = () => {
    return (
      <View direction="row">
        <SwitchList options={{ fr: 'french', us: 'english', de: 'german' }} />
      </View>
    )
  }

  renderCharsLeft = charsLeft => (
    <View
      direction="column"
      {...css({
        marginTop: 15,
        marginRight: 15,
        color: ColorPalette.text.gray,
      })}
    >
      {charsLeft}
    </View>
  )

  renderTick = (checkmarkStyle, containerStyle) => (
    <i style={{ paddingTop: 2, ...containerStyle }}>
      <CheckmarkIcon
        {...css({
          fill: ColorPalette.state.success,
          width: 15,
          height: 15,
          marginLeft: 6,
          ...checkmarkStyle,
        })}
      />
    </i>
  )

  handleActiveSummaryChange = setting => this.props.changeNotification(setting)
  handleActiveLocaleChange = locale => this.handleChange('locale', locale)

  fieldStatus = fieldName => {
    if (this.props.fieldStatuses && this.props.fieldStatuses[fieldName]) {
      return this.props.fieldStatuses[fieldName]
    }
  }
}
