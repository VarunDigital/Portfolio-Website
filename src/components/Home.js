import React from 'react'
import html from '../certificates/html.jpg';
import css from '../certificates/css.jpg';
import javascript from '../certificates/javascript.jpg';
import php from '../certificates/php.jpg';
import mysql from '../certificates/mysql.jpg';
import jquery from '../certificates/jquery.jpg';

export default function Home() {
  return (
    <div className='main'>
        <div className="about">
            <h1 className='about-heading'>Hi, My Name is Varun</h1>
            <p className='about-para'>A software developer with zeal for innovation and desire to learn. And I want to apply my learnings & experience and to be a part of the growth of
              the organization.</p>
            <a style={{color : 'white'}} href="https://www.facebook.com/profile.php?id=100042532004400" target='_blank'>
            <i className="fab fa-facebook-f mx-2"></i>
            </a>
            <a style={{color : 'white'}} href="https://www.instagram.com/varun_digital_07/" target='_blank'>
            <i className="home fab fa-instagram mx-2"></i>
            </a>
            <a style={{color : 'white'}} href="https://www.linkedin.com/in/varun-sharma-383936212/" target='_blank'>
            <i className="home fab fa-linkedin mx-2"></i>
            </a>
            <a style={{color : 'white'}} href="https://github.com/VarunDigital/" target='_blank'>
            <i className="home fab fa-github mx-2"></i>
            </a>
        </div>

        <div className="skills">
            <h1 className='skills-heading'>Skills</h1>
            <ol className='list'>
                <button type="button" className="btn btn-primary my-2 mx-2">HTML</button>
                <button type="button" className="btn btn-primary my-2 mx-2">CSS</button>
                <button type="button" className="btn btn-primary my-2 mx-2">Javascript</button>
                <button type="button" className="btn btn-primary my-2 mx-2">Bootstrap</button>
                <button type="button" className="btn btn-primary my-2 mx-2">Tailwind CSS</button>
                <button type="button" className="btn btn-primary my-2 mx-2">jQuery</button>
                <button type="button" className="btn btn-primary my-2 mx-2">PHP</button>
                <button type="button" className="btn btn-primary my-2 mx-2">React</button>
                <button type="button" className="btn btn-primary my-2 mx-2">MySQL</button>
                <button type="button" className="btn btn-primary my-2 mx-2">Git</button>  
                <button type="button" className="btn btn-primary my-2 mx-2">Github</button>
                <button type="button" className="btn btn-primary my-2 mx-2">Wordpress</button>
                <button type="button" className="btn btn-primary my-2 mx-2">SEO</button> 
                <button type="button" className="btn btn-primary my-2 mx-2">Material UI</button>
                <button type="button" className="btn btn-primary my-2 mx-2">Canva</button>
                <button type="button" className="btn btn-primary my-2 mx-2">MS Office</button> 
            </ol>
        </div>
        <hr />
        <h1 className='certi-heading'>Certificates</h1>
        <div className="certificates card-group">
          
          <div className="card-category-2">
                <ul>
                    <li>
                        <div className="img-card iCard-style3">
                            <div className="card-content">
                                <div className="card-image">
                                    <img src={html} alt='HTML'/>
                                </div>
                                
                                
                            </div>
                            
                            <div className="card-link">
                                <a href="https://drive.google.com/file/d/1G5qWct2odaRvCVAWIEVeYInot2uJxdbs/view" target="_blank">
                                    <span>Go To Link</span>
                                </a>
                            </div>
                        </div>                    
                    </li>
                </ul>
            </div>

            <div className="card-category-2">
                <ul>
                    <li>
                        <div className="img-card iCard-style3">
                            <div className="card-content">
                                <div className="card-image">
                                    <img src={css} alt='CSS'/>
                                </div>
                                
                               
                            </div>
                            
                            <div className="card-link">
                                <a href="https://drive.google.com/file/d/1bAqFAfFv3kTVSaqOnBC5HfTfLxjmPRoh/view" target="_blank">
                                    <span>Go To Link</span>
                                </a>
                            </div>
                        </div>                    
                    </li>
                </ul>
            </div>

            <div className="card-category-2">
                <ul>
                    <li>
                        <div className="img-card iCard-style3">
                            <div className="card-content">
                                <div className="card-image">
                                    <img src={javascript} alt='Javascript'/>
                                </div>
                            </div>
                            
                            <div className="card-link">
                                <a href="https://drive.google.com/file/d/1UGujwVjhJRjY_018wM8rmWtXvu5Fj1F5/view" target="_blank">
                                    <span>Go To Link</span>
                                </a>
                            </div>
                        </div>                    
                    </li>
                </ul>
            </div>

            <div className="card-category-2">
                <ul>
                    <li>
                        <div className="img-card iCard-style3">
                            <div className="card-content">
                                <div className="card-image">
                                    <img  src={jquery} alt='jQuery'/>
                                </div>
                                
                               
                            </div>
                            
                            <div className="card-link">
                                <a href="https://drive.google.com/file/d/1DOEjaL4qssCsg4qMUSP64lKV3c3PFd5U/view" target="_blank">
                                    <span>Go To Link</span>
                                </a>
                            </div>
                        </div>                    
                    </li>
                </ul>
            </div>

            <div className="card-category-2">
                <ul>
                    <li>
                        <div className="img-card iCard-style3">
                            <div className="card-content">
                                <div className="card-image">
                                    <img  src={php} alt='PHP'/>
                                </div>
                                
                               
                            </div>
                            
                            <div className="card-link">
                                <a href="https://drive.google.com/file/d/1DOEjaL4qssCsg4qMUSP64lKV3c3PFd5U/view" target="_blank">
                                    <span>Go To Link</span>
                                </a>
                            </div>
                        </div>                    
                    </li>
                </ul>
            </div>

            <div className="card-category-2">
                <ul>
                    <li>
                        <div className="img-card iCard-style3">
                            <div className="card-content">
                                <div className="card-image">
                                    <img  src={mysql} alt='mysql'/>
                                </div>
                            </div>
                            
                            <div className="card-link">
                                <a href="https://drive.google.com/file/d/11HyUN9GL5sbTbK3Y_4oWZq6ga5qqSmZB/view" target="_blank">
                                    <span>Go To Link</span>
                                </a>
                            </div>
                        </div>                    
                    </li>
                </ul>
            </div>


        </div>

        <hr/>
        <div className="interests">
          <h1 className='interests-heading'>Interests</h1>
          <ul className='interest-list'>
              <li>As being aware with the Front-end technology. I want to go deep inside it and then interested to learn
                backend development, Cloud Computing(AWS) and then Blockchain.
              </li>
              <li>I also had tremendous interest in reading books, fitness, Cryptocurrencies.</li>
          </ul>
        </div>
    </div>
  )
}
