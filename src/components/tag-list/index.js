import React from "react";
import styles from "./tag-list.module.scss"

export default function TagList(props) {
  return props.tags ? (
    <p className={styles.list}>
      {props.tags.map(tag =>
        <span key={tag} className={styles.item}>{tag}</span>
      )}
    </p>
  ) : '';
}
