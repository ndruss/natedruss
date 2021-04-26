import React from 'react'
import styles from './footer.module.scss'
import ContactLinkList from '../contact-link-list'
import IconEmail from '../../images/svg/email-icon.svg'
import IconLinkedIn from '../../images/svg/linkedin-icon.svg'
import IconCodePen from '../../images/svg/codepen-icon.svg'

const Footer = () => (
  <footer className={styles.footer}>
    <div className={`container--full ${styles.container}`}>
      <div className={styles.column}>
        <p>
          Nate Druss
          <br />
          Designer/Developer – Cleveland, OH
        </p>
      </div>
      <div className={styles.column}>
        <ContactLinkList
          links={[
            {
              name: 'Email',
              url: 'mailto:nhdruss@gmail.com',
              icon: IconEmail,
            },
            {
              name: 'LinkedIn',
              url: 'https://www.linkedin.com/in/nate-druss/',
              icon: IconLinkedIn,
            },
            {
              name: 'CodePen',
              url: 'https://codepen.io/nate_druss',
              icon: IconCodePen,
            },
          ]}
        />
      </div>
    </div>
  </footer>
)

export default Footer
