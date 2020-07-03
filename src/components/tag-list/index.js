import React from "react";
import styles from "./tag-list.module.scss"

export default function TagList(props) {
  return props.tags ? (
    <ul className={styles.list}>
      {props.tags.map(tag =>
        <li key={tag} className={styles.item}>{tag}</li>
      )}
    </ul>
  ) : '';
}
