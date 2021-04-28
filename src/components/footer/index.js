import React from 'react'
import ContactLinkList from '../contact-link-list'
import IconEmail from '../../images/svg/email-icon.svg'
import IconLinkedIn from '../../images/svg/linkedin-icon.svg'
import IconCodePen from '../../images/svg/codepen-icon.svg'
import { footer, container, column } from './footer.module.scss'

const Footer = () => (
  <footer className={footer}>
    <div className={`container--full ${container}`}>
      <div className={column}>
        <p>
          Nate Druss
          <br />
          Designer/Developer – Cleveland, OH
        </p>
      </div>
      <div className={column}>
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
