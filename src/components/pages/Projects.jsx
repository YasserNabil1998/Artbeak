import React from 'react'
import Navbar from './Navbar'
import "../Style/Projects.css";

function Projects() {
  return (
    <>
    <Navbar />
    <div className="project container">
      <div className="top">
        <h2>My Projects</h2>
        <p>This is where you can manage all of your projects.</p>
        <button>
          <a href="">New Project</a>
        </button>
      </div>

      <div className="button">
        <div className="row">
          <div className="buttons">
            <h3>Explainers Drafts</h3>
            <span>...</span>
          </div>
          <div className="buton col-md-12">
            <div className="buton-own">
              <p className='p-own'>New Product release explainer video</p>
              <p className='p-tow'>Storyboard stage</p>
              <p className='p-the'>Last edited 3 Days ago</p>
              <p className='p-for'>Open Project</p>
            </div>
            <div className="buton-tow">
              <p className='p-own'>Youtube content explainer video</p>
              <p className='p-tow'>Animation stage</p>
              <p className='p-the'>Last edited 2 Hours ago</p>
              <p className='p-for'>Open Project</p>
            </div>
            <div className="buton-tow">
              <p className='p-own'>Youtube content explainer video</p>
              <p className='p-tow'>Animation stage</p>
              <p className='p-the'>Last edited 2 Hours ago</p>
              <p className='p-for'>Open Project</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default Projects
