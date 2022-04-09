import React from 'react'

import { featuredProjects, otherProjects } from '../data'

import './styles/Projects.css'



const Projects = () => {
  const allFeaturedProjects = featuredProjects.map((project) => {
    return (
      <article className='featured-projects-container featured-projects__card--content' key={project.id}>
        <div className='featured-project-card'>
          <img className='featured-project-img' src={project.img} alt="project preview" />
          <div className='overlay-card'></div>
          <div className='text-overlay'>
            <h4>{project.title}</h4>
          </div>
        </div>
        <div className='text-box'>
          <h5>{project.name}</h5>
          <p>{project.description}</p>
          <div className='tags'>
            {project.tags.map((tag) => <p>{tag}</p>)}
          </div>
        </div>
      </article>
    )
  })

  const allOtherProjects = otherProjects.map((project) => {
    return (
      <div className="other-projects__card--content">
        <div>
          <a href={project.netlify} target="_blank" rel="noopener noreferrer">
            <h5>{project.project} <span> {project.description} </span> >> </h5>
          </a>
          <div className='tags'>
            {project.tags.map((tag) => <p>{tag}</p>)}
          </div>
        </div>
      </div>
    )
  })

  return (
    <>
      <div>
      <div className="flex">
      <h3>Featured projects</h3>
      </div>
      {allFeaturedProjects}
      <div className="flex">
      <h3>OTHER PROJECTS</h3>
      </div>
      {allOtherProjects}
      </div>
    </>
  )
}

export default Projects
