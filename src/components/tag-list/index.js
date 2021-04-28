import React from 'react'
import { list } from './tag-list.module.scss'

const TagList = props => {
  return props.tags ? (
    <p className={list}>
      <span>{'// ' + props.tags.join(', ')}</span>
    </p>
  ) : (
    ''
  )
}

export default TagList
