import React from 'react';
import Navbar from './Navbar';
import "../Style/Frame_15.css";
import { NavLink } from 'react-router-dom';


function Frame_15() {
  return (
    <>
      <Navbar />
      <div className="scripts ">
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
            <div className="scripts-profile dfdfd">
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
                <h2>Stage Timeline</h2>
                <div className='line'></div>
                <div className="drop" >
                  <img className="drop-img1" src="../assets/iamges/Ellipse 98.svg" />
                  <img className="drop-img2" src="../assets/iamges/Ellipse 97.svg" />
                  <p>Client <span>James Roy</span> Created Milestone and Waiting for Artist Response </p>
                </div>
                <div className="drop" style={{ marginTop: "53px" }}>
                  <img className="drop-img1" src="../assets/iamges/Ellipse 98.svg" />
                  <img className="drop-img2" src="../assets/iamges/Ellipse 97.svg" />
                  <p>Artist  <span>Vince Perkins</span>  accepted client’s offer </p>
                </div> 
                <div className="drop" style={{ marginTop: "53px" }}>
                  <img className="drop-img1" src="../assets/iamges/Ellipse 98.svg" />
                  <img className="drop-img2" src="../assets/iamges/Ellipse 97.svg" />
                  <p>Artist  <span>Vince Perkins</span>  Started Working </p>
                </div>
                <div className="drop" style={{ marginTop: "53px" }}>
                  <img className="drop-img1" src="../assets/iamges/Ellipse 98.svg" />
                  <img className="drop-img2" src="../assets/iamges/Ellipse 97.svg" />
                  <p>Artist  <span>Vince Perkins</span> Finished <span>Draft 1</span> </p>
                </div>  
                <div className="drop" style={{ marginTop: "50px" }}>
                  <img className="drop-img1" src="../assets/iamges/Ellipse 98.svg" />
                  <img className="drop-img2" src="../assets/iamges/Ellipse 97.svg" />
                  <p>Client Reqested an Adjustment Regrarding <span>Draft 1</span> </p>
                </div> 
                <div className="drop" style={{ marginTop: "53px" }}>
                  <img className="drop-img1" src="../assets/iamges/Ellipse 98.svg" />
                  <img className="drop-img2" src="../assets/iamges/Ellipse 97.svg" />
                  <p>Artist Finished  <span>Draft 2</span> </p>
                </div> 
                <div className="drop" style={{ marginTop: "53px" }}>
                  <img className="drop-img1" src="../assets/iamges/Ellipse 98.svg" />
                  <img className="drop-img2" src="../assets/iamges/Ellipse 97.svg" />
                  <p>Client Approved  <span>Draft 2</span> </p>
                </div>
                <div className="drop" style={{ marginTop: "53px" }}>
                  <img className="drop-img1" src="../assets/iamges/Ellipse 98.svg" />
                  <img className="drop-img2" src="../assets/iamges/Ellipse 97.svg" />
                  <p>Client Rleased Milestone and Gave a <span>Feedback</span> </p>
                </div>
                <div className="drop" style={{ marginTop: "53px" }}>
                  <img className="drop-img1" src="../assets/iamges/Ellipse 98.svg" />
                  <img className="drop-img2" src="../assets/iamges/Ellipse 97.svg" />
                  <p>Client Started Next Stage</p>
                </div>
              </div>
              <button className='buttons'> 
              <NavLink to="/Frame_15" class="tow-dark-a" style={{ color: "#ffff", background: "#51459E" }}>Next  Stage</NavLink>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Frame_15
