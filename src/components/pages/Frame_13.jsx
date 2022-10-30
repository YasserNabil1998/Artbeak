import React from 'react'
import Navbar from './Navbar';
import "../Style/Frame_13.css";
import { NavLink } from 'react-router-dom';


function Frame_13() {
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
            <div className="scripts-button ffdd">
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
              <h2 className='your'>Choose Your Preferd Artist</h2>
              <div style={{ display: "flex" }}>
                <div className="scripts-button-ther">
                  <div className='tow-ther onw'>
                    <img className='img' src="../assets/iamges/criteri.svg" />
                    <div className="tite">
                      <h4>Wanda Noble</h4>
                      <p>Expert Voice over Artist</p>
                      <strong>Open Gallrey</strong>
                      <br />
                      <span>Speed Rating </span>
                      <br />
                      <small>5 Hours till First Draft</small>
                      <div className="start">
                        <img src="../assets/iamges/Asset 1.svg" style={{ marginLeft: "-1px" }} />
                        <img src="../assets/iamges/Asset 1.svg" style={{ marginLeft: "9px" }} />
                        <img src="../assets/iamges/Asset 1.svg" style={{ marginLeft: "9px" }} />
                        <img src="../assets/iamges/Asset 1.svg" style={{ marginLeft: "9px" }} />
                      </div>
                      <button>
                        <NavLink to="/Frame_14" class="tow-dark-a" style={{ color: "#ffff", background: "#51459E" }}>Hire</NavLink>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="scripts-button-ther" style={{ marginLeft: "74px" }}>
                  <div className='tow-ther onw'>
                    <img className='img' src="../assets/iamges/criteri-1.svg" />
                    <div className="tite">
                      <h4 style={{ marginLeft: "7px", marginTop: "21px" }}>Grant Francis</h4>
                      <p style={{ marginLeft: "-8px" }}>Expert Voice over Artist</p>
                      <strong style={{ marginLeft: "20px" }}>Open Gallrey</strong>
                      <br />
                      <span>Speed Rating </span>
                      <br />
                      <small>20 Hours till First Draft</small>
                      <div className="start">
                        <img src="../assets/iamges/Asset 1.svg" style={{ marginLeft: "24px" }} />
                        <img src="../assets/iamges/Asset 1.svg" style={{ marginLeft: "9px" }} />
                      </div>
                      <button>
                        <NavLink to="/Frame_14" class="tow-dark-a" style={{ color: "#ffff", background: "#51459E" }}>Hire</NavLink>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="scripts-button-ther" style={{ marginLeft: "74px" }}>
                  <div className='tow-ther onw'>
                    <img className='img' src="../assets/iamges/criteri-2.svg" />
                    <div className="tite">
                      <h4 style={{ marginLeft: "-6px", marginTop: "22px" }}>Roxanne Wallaker</h4>
                      <p>Expert Voice over Artist</p>
                      <strong>Open Gallrey</strong>
                      <br />
                      <span>Speed Rating </span>
                      <br />
                      <small>4 Horus till First Draft</small>
                      <div className="start">
                        <img src="../assets/iamges/Asset 1.svg" style={{ marginLeft: "-1px" }} />
                        <img src="../assets/iamges/Asset 1.svg" style={{ marginLeft: "9px" }} />
                        <img src="../assets/iamges/Asset 1.svg" style={{ marginLeft: "9px" }} />
                        <img src="../assets/iamges/Asset 1.svg" style={{ marginLeft: "9px" }} />
                      </div>
                      <button>
                        <NavLink to="/Frame_14" class="tow-dark-a" style={{ color: "#ffff", background: "#51459E" }}>Hire</NavLink>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="scripts-button-ther" style={{ marginLeft: "74px" }}>
                  <div className='tow-ther onw'>
                    <img className='img' src="../assets/iamges/criteri-3.svg" />
                    <div className="tite">
                      <h4 style={{ marginLeft: "-15px", marginTop: "22px" }}>Markus Magnusson</h4>
                      <p style={{ marginLeft: "-11px", marginTop: "-4px" }}>Expert Voice over Artist</p>
                      <strong style={{ marginLeft: "19px" }}>Open Gallrey</strong>
                      <br />
                      <span style={{ marginLeft: "24px" }}> Speed Rating </span>
                      <br />
                      <small style={{ marginLeft: "11px" }}>1 Day till First Draft</small>
                      <div className="start">
                        <img src="../assets/iamges/Asset 1.svg" style={{ marginLeft: "23px" }} />
                        <img src="../assets/iamges/Asset 1.svg" style={{ marginLeft: "9px" }} />
                      </div>
                      <button>
                        <NavLink to="/Frame_14" class="tow-dark-a" style={{  marginLeft: "-10px", color: "#ffff", background: "#51459E" }}>Hire</NavLink>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="scripts-button-ther" style={{ marginLeft: "74px" }}>
                  <div className='tow-ther onw'>
                    <img className='img' src="../assets/iamges/criteri-4.svg" />
                    <div className="tite">
                      <h4 style={{ marginLeft: "7px", marginTop: "22px" }}>Vince Perkins</h4>
                      <p style={{ marginLeft: "-10px" }}>Expert Voice over Artist</p>
                      <strong>Open Gallrey</strong>
                      <br />
                      <span>Speed Rating </span>
                      <br />
                      <small style={{ marginLeft: "-1px" }}>10 Hours till First Draft</small>
                      <div className="start">
                        <img src="../assets/iamges/Asset 1.svg" style={{ marginLeft: "-19px" }} />
                        <img src="../assets/iamges/Asset 1.svg" style={{ marginLeft: "9px" }} />
                        <img src="../assets/iamges/Asset 1.svg" style={{ marginLeft: "9px" }} />
                        <img src="../assets/iamges/Asset 1.svg" style={{ marginLeft: "9px" }} />
                        <img src="../assets/iamges/Asset 1.svg" style={{ marginLeft: "9px" }} />
                      </div>
                      <button>
                        <NavLink to="/Frame_14" class="tow-dark-a" style={{ color: "#ffff", background: "#51459E" }}>Hire</NavLink>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Frame_13
