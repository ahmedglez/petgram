import React from 'react'
import { Anchor, Image } from './styles.js'

const DEFAULT_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpg'

const Category = ({ cover = DEFAULT_IMAGE, path, emoji = '?' }) => {
  return (
    <Anchor href={path}>
      <Image src={cover} alt='' />
      {emoji}
    </Anchor>
  )
}

export { Category }
