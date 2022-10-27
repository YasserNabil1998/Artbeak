import React from 'react'
import Navbar from './Navbar';
import "../Style/Frame_14.css";
import { NavLink } from 'react-router-dom';

function Frame_14() {
  return (
    <>
      <Navbar />
      <div className="scripts">
        <div className="container">
          <div className="row">
            <div className="scripts-top">
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
            <div className="scripts-button">
              <h2>Voice Over Stage</h2>
              <div className="scripts-button-one">
                <button className='one-bth onw'>My company website explainer video</button>
                <button className='one-bth tow'>English Language </button>
                <button className='one-bth ther'>Both Mobile and Desktop Size</button>
                <button className='one-bth for'>30 Seconds Duration</button>
              </div>
              <div className="scripts-button-tow">
                <button className='tow-bth onw'>British Accent Voice over</button>
                <button className='tow-bth tow'>Male Voice Over Artist</button>
                <button className='tow-bth ther'>Script  <span>Michel is proud father, he love to take his children ... </span> <small>See More</small>  </button>
              </div>
              <button className='buttons'> Still on Progress</button>

            </div>
            <div className="scripts-profile">
              <h2>Hire Vince - Voice Over Stage</h2>
              <div className="scripts-profile-one">
                <div className="row">
                  <div className="col-md-6 pro-left" style={{ display: "flex", marginTop: "38px" }}>
                    <img className='img' src="../assets/iamges/criteri-4.svg" />
                    <div className=" pro-left-tite">
                      <p>Vince Perkins</p>
                      <span>Expert Voice over Artist <br /> Speed Rating: 10 Hours till First Draft</span>
                      <div className=" pro-left-tar">
                        <div className="start">
                          <img src="../assets/iamges/Asset 1.svg" style={{ marginLeft: "-2px" }} />
                          <img src="../assets/iamges/Asset 1.svg" style={{ marginLeft: "11px" }} />
                          <img src="../assets/iamges/Asset 1.svg" style={{ marginLeft: "11px" }} />
                          <img src="../assets/iamges/Asset 1.svg" style={{ marginLeft: "11px" }} />
                          <img src="../assets/iamges/Asset 1.svg" style={{ marginLeft: "11px" }} />
                        </div>
                        <small>Open Gallrey</small>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 pro-right">
                    <button className='Open'>Open Profile</button>
                    <br />
                    <button className='Change'>Change Artist</button>
                  </div>
                </div>
              </div>
              <div className="scripts-profile-tow">
                <p>Contract Terms</p>
                <p style={{ marginTop: "56px" }}> Create a Mileston to start working</p>
                <p style={{ marginTop: "45px" }}>You’re protected by <span>Artbeak Payment Protection.</span>  Only pay for the work you authorize.</p>
                <p style={{ marginTop: "45px", marginLeft: "30px" }}>I Read and Agree to Artbeak <span>Terms of Service</span> including the Privacy Policy and the <span>Artist Contract.</span> </p>
              </div>
              <button className='buttons'> 
              <NavLink to="/Frame_15" class="tow-dark-a" style={{ color: "#ffff", background: "#51459E" }}>Create Milestone</NavLink>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Frame_14
