import React from 'react';
import Navbar from './Navbar';
import "../Style/Frame_12.css";
import { NavLink } from 'react-router-dom';

function Frame_12() {
  return (
    <>
      <Navbar />
      <div className="script">
        <div className="container">
          <div className="row">
            <div className="script-top">
              <div className="boil">
                <div className="boil-Voice">
                  <p>1</p>
                  <span>Voice over</span>
                  <br />
                  <small>Waiting </small>
                </div>
                <hr className="boil-onw" />
                <div className="boil-Storyborad">
                  <p>2</p>
                  <span>Storyborad</span>
                  <small>Waiting </small>
                </div>
                <hr className="boil-tow" />
                <div className="boil-Illustration">
                  <p>3</p>
                  <span>Illustration </span>
                  <small>Waiting </small>
                </div>
                <hr className="boil-threr" />
                <div className="boil-Animation">
                  <p>4</p>
                  <span>Animation </span>
                  <small>Waiting </small>
                </div>
                <hr className="boil-for" />
                <div className="boil-Effects">
                  <p>5</p>
                  <span>Sound Effects </span>
                  <small>Waiting </small>
                </div>
              </div>
            </div>
            <div className="script-button">
              <h2>Voice Over Stage</h2>
              <div className="script-button-one">
                <button className='one-bth onw'>My company website explainer video</button>
                <button className='one-bth tow'>English Language </button>
                <button className='one-bth ther'>Both Mobile and Desktop Size</button>
                <button className='one-bth for'>30 Seconds Duration</button>
              </div>
              <div className="script-button-tow">
                <button className='tow-bth onw'>British Accent Voice over</button>
                <button className='tow-bth tow'>Male Voice Over Artist</button>
                <button className='tow-bth ther'>Script  <span>Michel is proud father, he love to take his children ... </span> <small>See More</small>  </button>
              </div>
              <button className='buttons'> 
              <NavLink to="/Frame_13" class="tow-dark-a" style={{ color: "#ffff",   background: "#51459E" }}>Start Stage</NavLink>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Frame_12
