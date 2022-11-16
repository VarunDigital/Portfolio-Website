import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <>
  <footer className="text-center text-white" style={{backgroundColor : 'rgb(4, 25, 74)'}}>
  
    <div className="container">
  
      <section className="mt-5">
        <div className="row text-center d-flex justify-content-center pt-5">
  
          <div className="col-md-2">
            <h6 className="text-uppercase font-weight-bold">
              <Link to="/" className="text-white">Home</Link>
            </h6>
          </div>
          <div className="col-md-2">
            <h6 className="text-uppercase font-weight-bold">
              <Link to="/projects" className="text-white">Projects</Link>
            </h6>
          </div>

          <div className="col-md-2">
            <h6 className="text-uppercase font-weight-bold">
              <Link to="/experiences" className="text-white">Experiences</Link>
            </h6>
          </div>
          <div className="col-md-2">
            <h6 className="text-uppercase font-weight-bold">
              <Link to="/contact" className="text-white">Contact</Link>
            </h6>
          </div>
        </div>
      </section>

      <hr className="my-3" />

      <section className="mb-1">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-8">
            <p>
            Hello Everyone, I am Varun Sharma and I am an aspiring front-end developer. And currently I am pursuing
            B. Tech.(CS) from ITM Group of Institution, Aligarh.
            </p>
          </div>
        </div>
      </section>
     
      <section className="text-center mb-2">
        <a href="https://www.facebook.com/profile.php?id=100042532004400" target='_blank' className="text-white me-4">
          <i className="fab fa-facebook-f"></i>
        </a>
        {/* <a href="" className="text-white me-4">
          <i className="fab fa-twitter"></i>
        </a> */}
        <a href="https://www.instagram.com/varun_digital_07/" target='_blank' className="text-white me-4">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://www.linkedin.com/in/varun-sharma-383936212/" target='_blank' className="text-white me-4">
           <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://github.com/VarunDigital/" target='_blank' className="text-white me-4">
          <i className="fab fa-github"></i>
        </a>
      </section>
   
    </div>
   
    <div
         className="text-center p-3"
         style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}
         >© 2022 Copyright : varundigital.netlify.app
     
    </div>
  </footer>
    </>
  )
}
