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

export const getNextProject = (allMarkdownRemark, frontmatter) => {
  const allProjects = allMarkdownRemark.edges

  const thisNode = allProjects.find(
    edge => edge.node.frontmatter.slug === frontmatter.slug
  )

  const position = allProjects.indexOf(thisNode)

  if (position === allProjects.length - 1) {
    return allProjects[0].node
  }

  return allProjects[position + 1].node
}
