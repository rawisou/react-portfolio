import React from 'react'

import { featuredProjects } from '../data'

import './styles/FeaturedProjects.css'


const FeaturedProjects = () => {
    const allFeaturedProjects = featuredProjects.map((project) => {
        return (
            <article className='featured-projects-container' key={project.id}>
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

    return (
        <section>
            {allFeaturedProjects}
        </section>
    )
}

export default FeaturedProjects
