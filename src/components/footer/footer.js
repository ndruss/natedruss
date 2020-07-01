import React from "react"
import styles from "./footer.module.scss"

const ListLinkContact = props => (
  <li>
    <a href={props.url} className={styles.iconLink}>
      <span>{props.name}</span>
    </a>
  </li>
)

export default () => (
  <footer className={styles.footer}>
    <div className={`container--full ${styles.container}`}>
      <div className={styles.column}>
        <p>Nate Druss<br />
        Designer/Developer – Cleveland, OH</p>
      </div>
      <div className={styles.column}>
        <ul className={styles.contactLinks}>
          <ListLinkContact url="/" name="Email" />
          <ListLinkContact url="/" name="LinkedIn" />
          <ListLinkContact url="/" name="CodePen" />
        </ul>
      </div>
    </div>
  </footer>
)