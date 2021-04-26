import React from "react"
import styles from "./footer.module.scss"
import IconEmail from "../../images/svg/email-icon.svg"
import IconLinkedIn from "../../images/svg/linkedin-icon.svg"
import IconCodePen from "../../images/svg/codepen-icon.svg"

const ListLinkContact = props => {
  const linkClass = camelize(props.name)
  return (
    <li>
      <a href={props.url} className={styles.iconLink + ' ' + linkClass}>
        {props.children}
        <span className="screen-reader-text">{props.name}</span>
      </a>
    </li>
  )
}

export default () => (
  <footer className={styles.footer}>
    <div className={`container--full ${styles.container}`}>
      <div className={styles.column}>
        <p>Nate Druss<br />
        Designer/Developer – Cleveland, OH</p>
      </div>
      <div className={styles.column}>
        <ul className={styles.contactLinks}>
          <ListLinkContact url="mailto:nhdruss@gmail.com" name="Email">
            <IconEmail />
          </ListLinkContact>
          <ListLinkContact url="https://www.linkedin.com/in/nate-druss/" name="LinkedIn">
            <IconLinkedIn />
          </ListLinkContact>
          <ListLinkContact url="https://codepen.io/nate_druss" name="CodePen">
            <IconCodePen />
          </ListLinkContact>
        </ul>
      </div>
    </div>
  </footer>
)

function camelize(str) {
  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
    return index === 0 ? word.toLowerCase() : word.toUpperCase();
  }).replace(/\s+/g, '');
}
