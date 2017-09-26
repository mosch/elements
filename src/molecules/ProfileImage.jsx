import PropTypes from 'prop-types'
import React from 'react'
import Image from '../atoms/Image'
import { css } from 'glamor'

const styles = {
  wrapper: css({
    borderRadius: '50%',
    overflow: 'hidden',
    flexShrink: 0,
  }),

  wrapperBorder: css({
    position: 'relative',
    // inner transparent border
    ':before': {
      content: `""`,
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      border: '1px solid rgba(0, 0, 0, 0.2)',
      borderRadius: '50%',
    },
  }),

  image: css({
    width: '100%',
  }),
}

const sizeMap = {
  small: 29,
  medium: 40,
  big: 225,
}

const getDefaultImageUrl = size =>
  `/static/img/profile${size !== 'big' ? '40x40' : ''}.png`

const ProfileImage = ({
  size = 'medium',
  showBorder = true,
  image,
  onClick,
  children,
  ...restProps
}) => {
  if (!image) {
    image = getDefaultImageUrl(size)
  }

  const width = sizeMap[size]
  const height = sizeMap[size]
  const pointerStyle = onClick ? { ':hover': { cursor: 'pointer' } } : {}

  return (
    <div
      onClick={onClick}
      {...css(
        styles.wrapper,
        showBorder && styles.wrapperBorder,
        {
          width,
          height,
        },
        pointerStyle
      )}
      {...restProps}
    >
      <Image
        alt=""
        src={image}
        srcFallback={getDefaultImageUrl(size)}
        {...styles.image}
      />
      {children}
    </div>
  )
}

ProfileImage.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  image: PropTypes.string,
  showBorder: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'big']),
}

export default ProfileImage
