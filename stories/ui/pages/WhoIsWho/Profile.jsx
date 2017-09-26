import React, { PureComponent } from 'react'
import { ColorPalette } from '@allthings/colors'

import { Card, OverlayMenu } from 'components/Card'
import Text from 'components/Text'
import ProfileImage from 'components/ProfileImage'
import {
  CardButton,
  CardFooter,
  CardContent,
  CardOverlayEditor,
} from 'components/Card'

import MoreIcon from '@allthings/react-ionicons/lib/AndroidMoreVerticalIcon'
import View from '@allthings/react-view'
import { css } from 'glamor'

const styles = {
  container: css({
    padding: 20,
    position: 'relative',
  }),
  topColumn: css({
    width: '100%',
    position: 'relative',
    marginBottom: 30,
  }),
  profileImage: css({
    margin: 'auto',
  }),
  moreIcon: css({
    position: 'absolute',
    right: 0,
    top: 0,
    ':hover': {
      cursor: 'pointer',
    },
  }),
}

export default class Profile extends PureComponent {
  state = {
    showMenu: false,
    showMailForm: false,
  }

  showMenu = () => this.setState({ showMenu: true })
  hideMenu = () => this.setState({ showMenu: false })

  showMailForm = () => this.setState({ showMailForm: true })
  hideMailForm = () => this.setState({ showMailForm: false })

  render() {
    return (
      <Card direction="column">
        <CardContent alignV="center" direction="column">
          <View direction="row" alignH="space-between" {...styles.topColumn}>
            <ProfileImage
              {...styles.profileImage}
              size="big"
              image="https://placeimg.com/225/225/people"
            />
            <MoreIcon
              onClick={this.showMenu}
              {...styles.moreIcon}
              height={20}
              width={20}
            />
            {this.state.showMenu && (
              <OverlayMenu onRequestClose={this.hideMenu}>
                <Text size="m" color={ColorPalette.text.secondary}>
                  Mein Profil verstecken
                </Text>
                <Text size="m" color={ColorPalette.text.secondary}>
                  Einstellungen
                </Text>
              </OverlayMenu>
            )}
          </View>

          <View {...css({ marginBottom: 20 })}>
            <Text
              size="xl"
              strong
              color={ColorPalette.text.secondary}
              {...css({ maxWidth: 220 })}
            >
              Kunigunde Bräuer
            </Text>
            <Text size="l" color={ColorPalette.text.secondary} align="center">
              Lilienweg
            </Text>
          </View>

          <Text
            size="s"
            color={ColorPalette.text.secondary}
            italic
            align="center"
            {...css({ maxWidth: 220 })}
          >
            Ich gehe gerne Joggen und Radfahren - freue mich immer über neue
            Kontakte!
          </Text>

          {this.state.showMailForm && (
            <View>
              <CardOverlayEditor
                onSave={this.hideMailForm}
                onRequestClose={this.hideMailForm}
                confirmText="Text verwerfen?"
                cancelText="Abbrechen"
                submitText="Senden"
              />
            </View>
          )}
        </CardContent>
        <CardFooter>
          <CardButton onClick={this.showMailForm}>
            <Text size="m" color={ColorPalette.text.secondary} strong>
              E-Mail senden
            </Text>
          </CardButton>
        </CardFooter>
      </Card>
    )
  }
}
