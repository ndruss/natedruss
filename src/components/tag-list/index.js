import React from 'react'
import styles from './tag-list.module.scss'

const TagList = props => {
  return props.tags ? (
    <p className={styles.list}>
      <span>{'// ' + props.tags.join(', ')}</span>
    </p>
  ) : (
    ''
  )
}

export default TagList
