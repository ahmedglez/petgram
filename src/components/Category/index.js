/* eslint-disable camelcase */
import React from 'react'
import { Anchor, Image } from './styles.js'



const Category = ({ cover, path, emoji = '?' }) => {
  return (
    <Anchor href={path}>
      <Image src={cover} />
      {emoji}
    </Anchor>
  )
}

export { Category }
