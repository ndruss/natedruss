import { navigate, withPrefix } from 'gatsby'

export const homeLinkClick = e => {
  e.preventDefault()
  if (window.location.pathname !== withPrefix('/')) {
    navigate('/')
    return
  }
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth',
  })
  if (!!window.location.hash) {
    window.history.pushState({ content: 'home' }, '', '/')
  }
}

export const hashLinkClick = e => {
  e.preventDefault()
  if (e.target.pathname !== window.location.pathname) {
    navigate(e.target.pathname + e.target.hash)
    return
  }
  const section = document.querySelector(e.target.hash)
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' })
  } else {
    window.location = e.target.href
  }
  window.history.pushState({ content: e.target.hash }, '', e.target.hash)
}
