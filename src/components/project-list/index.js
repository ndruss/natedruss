// ProjectList

import React from "react"
import styles from "./project-list.module.scss"
import ProjectLink from "../project-link";

const ProjectList = ({ data }) => (
  <ul className={styles.list}>
    {data.map(edge => 
      <ProjectLink key={edge.node.id} post={edge.node} />
    )}
  </ul>
)

export default ProjectList