import React from 'react'
import styles from './tag-list.module.scss'

export default function TagList(props) {
  return props.tags ? (
    <p className={styles.list}>
      <span>{'// ' + props.tags.join(', ')}</span>
    </p>
  ) : (
    ''
  )
}
