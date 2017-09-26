import React from 'react'
import Text from 'components/Text'
import { css } from 'glamor'

import {
  Post,
  PostContent,
  PostAuthor,
  PostText,
  PostEditor,
  PostInfo,
  PostFooter,
  PostLikeButton,
  PostCommentButton,
  PostOverlayMenu,
  PostImageAttachments,
  PostForm,
  PostFormInput,
  PostAddImageButton,
  PostSendButton,
  PostSpacer,
} from 'components/Pinboard'
import Dropzone from 'react-dropzone'
import { View } from '@allthings/react-view'
import RemovableImage from 'components/Pinboard/Upload/RemovableImage'
import ShowNewPostsButton from 'components/Pinboard/ShowNewPostsButton'
import EyeIcon from '@allthings/react-ionicons/lib/IosEyeIcon'

const TEXT = `Aufzug Sanierung

Sehr geehrte Burgweg Bewohner,
am 20.12. ist es nicht möglich den Fahrstuhl zu nutzen, aufgrund von Sanierungsarbeiten.

Viele Grüße,
Ihre Hausverwaltung`

export default class HighlightedPost extends React.PureComponent {
  state = {
    showMenu: false,
    liked: false,
    dropActive: false,
    isEditing: false,
    files: [],
    showSelectChannelMenu: false,
    channel: 'property',
  }

  toggleMenu = () => this.setState(({ showMenu }) => ({ showMenu: !showMenu }))
  toggleLike = () => this.setState(({ liked }) => ({ liked: !liked }))

  setDropzone = dropzone => (this.dropzone = dropzone)
  openDropzone = () => this.dropzone && this.dropzone.open()
  handleDragEnter = () =>
    this.setState(({ dropzoneActive }) => ({ dropActive: true }))
  handleDragLeave = () =>
    this.setState(({ dropzoneActive }) => ({ dropActive: false }))
  handleDrop = droppedFiles =>
    this.setState(({ files }) => ({
      files: files.concat(droppedFiles),
      dropActive: false,
    }))
  removeFile = index =>
    this.setState(({ files }) => ({
      files: files.filter((_, i) => i !== index),
    }))

  handleEdit = () => this.setState(() => ({ showMenu: false, isEditing: true }))
  handleCloseEdit = () => this.setState(() => ({ isEditing: false }))

  showSelectChannelMenu = () =>
    this.setState(() => ({ showSelectChannelMenu: true }))
  closeSelectChannelMenu = () =>
    this.setState(() => ({ showSelectChannelMenu: false }))
  selectChannel = channel => e =>
    this.setState(() => ({ channel, showSelectChannelMenu: false }))

  getChannelName = () => {
    switch (this.state.channel) {
      case 'property':
        return 'Öffentlich'
      case 'group':
        return 'Nur in Baufeld F'
    }
  }

  render() {
    const renderMenu = () =>
      this.state.showMenu && (
        <PostOverlayMenu onRequestClose={this.toggleMenu}>
          <Text size="m" key="edit" color="#626262" onClick={this.handleEdit}>
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
      <View direction="column" alignV="center">
        <PostForm>
          <Dropzone
            disableClick
            onDragEnter={this.handleDragEnter}
            onDragLeave={this.handleDragLeave}
            onDrop={this.handleDrop}
            multiple
            ref={this.setDropzone}
            accept="image/*"
            style={{}}
            {...css({
              ':before': {
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                content: `""`,
                pointerEvents: 'none',
                border: this.state.dropActive && '2px dashed #e67f22',
              },
            })}
          >
            <PostContent>
              <PostFormInput placeholder="Was gibt's zu erzählen?" />
              <View
                {...css({
                  marginTop: 5,
                  position: 'relative',
                  zIndex: 1,
                  ':hover': { cursor: 'pointer' },
                })}
              >
                {this.state.showSelectChannelMenu && (
                  <PostOverlayMenu onRequestClose={this.closeSelectChannelMenu}>
                    <Text
                      size="m"
                      key="report"
                      color="#626262"
                      onClick={this.selectChannel('property')}
                    >
                      Öffentlich
                    </Text>
                    <Text
                      size="m"
                      key="delete"
                      color="#626262"
                      onClick={this.selectChannel('group')}
                    >
                      Nur in{' '}
                      <Text block={false} italic>
                        »Baufeld F«
                      </Text>
                    </Text>
                  </PostOverlayMenu>
                )}
                <View
                  direction="row"
                  alignH="end"
                  alignV="center"
                  onClick={this.showSelectChannelMenu}
                >
                  <EyeIcon
                    width="18"
                    height="18"
                    style={{ fill: '#bababa', marginRight: 5 }}
                  />
                  <Text size="s" color="#bababa" strong>
                    Sichtbar in: {this.getChannelName()}
                  </Text>
                </View>
              </View>
              <View direction="row" wrap="wrap" {...css({ marginTop: 10 })}>
                {this.state.files.map((file, index) => (
                  <View
                    key={file.preview}
                    {...css({ width: 60, marginRight: 10, marginBottom: 10 })}
                  >
                    <RemovableImage
                      id={index}
                      image={file.preview}
                      onRemove={this.removeFile}
                    />
                  </View>
                ))}
              </View>
            </PostContent>
          </Dropzone>
          <PostFooter>
            <PostAddImageButton
              text="Bild hinzufügen"
              onClick={this.openDropzone}
            />
            <PostSendButton text="Senden" />
          </PostFooter>
        </PostForm>
        <PostSpacer />

        <ShowNewPostsButton
          onClick={noop => noop}
          count={5}
          text={count => `${count} neue Beiträge anzeigen`}
        />

        <PostSpacer />

        <Post highlightColor="#e67f22">
          <PostContent>
            <PostAuthor
              highlight={{
                color: '#e67f22',
                text: 'wellstein Wohnungsverwaltung',
              }}
              author={{
                name: 'Sanjay Gupta',
                profileImage: 'https://placeimg.com/40/40/people',
              }}
              onClickMore={this.toggleMenu}
              renderMenu={renderMenu}
              dateText="Vor 3 Tagen, 19:03 Uhr"
            />

            {this.state.isEditing ? (
              <PostEditor
                initialText={TEXT}
                confirmText="Änderungen verwerfen?"
                onSave={this.handleCloseEdit}
                onRequestClose={this.handleCloseEdit}
              />
            ) : (
              <PostText>{TEXT}</PostText>
            )}
            <PostImageAttachments
              moreImagesText={count => `+${count} Bilder mehr`}
              imageUrls={[
                'https://placeimg.com/640/480/arch',
                'https://placeimg.com/640/480/arch',
                'https://placeimg.com/640/480/arch',
              ]}
            />
            <PostInfo
              likes={6}
              likeText={likes => 'Einer Person gefällt das'}
            />
          </PostContent>
          <PostFooter>
            <PostLikeButton
              onClick={this.toggleLike}
              liked={this.state.liked}
              text="Mag ich"
            />
            <PostCommentButton text="Kommentieren" />
          </PostFooter>
        </Post>
      </View>
    )
  }
}
