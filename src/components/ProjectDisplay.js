import React from 'react';
import { useParams } from "react-router-dom";
import { ProjectList } from '../helpers/ProjectList';

export default function ProjectDisplay() {
    const { id } = useParams();
    const project = ProjectList[id];
  return (
    <div className='project-display'>
        <div className="container-fluid pt-5">
        <div className="row">
            <div className="col-lg-2"></div>
            <div className="col-lg-8">
        <h1 className='display-heading'>{project.name}</h1>
        <img src={project.image} className="responsive pt-2 pb-4" alt={project.name} />
        <h2>Description :</h2>
        <p>{project.description}</p>
        
        <h2>Skills Used :</h2>
        <p>The skills that are used for the completion of this project are given below. Anyone can learn the skills mentioned below and then by taking this project as reference he/she can definitely create project like this.</p>
        <p>{project.skills}</p>
        
        <h2>Frequent Links :</h2>
        <p>You can directly go through the github file and website link by just clicking on the buttons below </p>
        <button type="button" className="btn btn-primary my-2"><a className='a-dis' target="_blank" href={project.website}>Website</a></button>
        <button type="button" className="btn btn-primary my-2 mx-2"><a className='a-dis' target="_blank" href={project.github}>Github</a></button>   
        </div>
        </div>
        </div>
    </div>
  )
}
