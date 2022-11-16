import React from 'react';
import { useNavigate } from "react-router-dom";

export default function ProjectItem({name, image, github, website, id}) {
    const navigate = useNavigate();
  return (
    <div>
        <div className="card-category-2 mx-auto projectitems" onClick={() => { navigate("/projects/" + id);}}>
                <ul>
                    <li>
                        <div className="img-card iCard-style3 mx-2">
                            <div className="card-content">
                                <div className="card-image">
                                    <img  src={image} alt='mysql'/>
                                </div>
                            </div>
                            <p>{name}</p>
                            <div className="card-link">
                                <a href={website} className='mx-2' target="_blank">
                                    <span><b>Website</b></span>
                                </a>
                                <a href={github} className='mx-2' target="_blank">
                                    <span><b>Github</b></span>
                                </a>
                            </div>
                        </div>                    
                    </li>
                </ul>
            </div>
    </div>
  )
}
