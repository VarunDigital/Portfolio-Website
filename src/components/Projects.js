import React from 'react'
import ProjectItem from './ProjectItem'
import unsplash from '../images/unsplash.png';
import wiki from '../images/wiki.png';
import quote from '../images/quote.png';
import portfolio from '../images/portfolio.png';
import { ProjectList} from '../helpers/ProjectList'

export default function Projects() {
  return (
    <div className='projects'>
        <h1>My Projects</h1>
        <div className="projectList card-group">
           {/* <ProjectItem name="Unsplash Clone" website="https://cloneunsplash.netlify.app/" image={unsplash}/>
           <ProjectItem name="Wikipedia Search Engine" website="https://wikiengine.netlify.app/" image={wiki}/>
           <ProjectItem name="Quote Generator" website="https://getnewquotes.netlify.app/" image={quote}/>
           <ProjectItem name="Portfolio Website" website="https://varundigital.netlify.app/" image={portfolio}/>   */}

            {ProjectList.map((project, index) =>{
              return <ProjectItem id={index} name={project.name} image={project.image} website={project.website} github={project.github}/>
            })}
        </div>
    </div>
  )
}
