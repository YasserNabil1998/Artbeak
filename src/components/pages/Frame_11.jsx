import React from 'react'
import Navbar from './Navbar'
import "../Style/Frame_11.css";
import { NavLink } from 'react-router-dom';
function Frame_11() {
  return (
    <>
      <Navbar />
      <div className="effects">
        <div className="container">
          <div className="row">
            <div className="col-md-6 effects-left">
              <div className='effects-left-top'>
                <div class="progress">
                  <div class="progress-bar" role="progressbar" style={{ width: "100%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div className="small-list">
                  <small className="small-1">Voice  and Settings </small>
                  <small className="small-2">Storyboard</small>
                  <small className="small-3">illustration</small>
                  <small className="small-4">Animation</small>
                  <small className="small-5">Sound effects</small>
                </div>
                <div className="effects-left-title">
                  <h4>Choose your Package</h4>
                  <p>You can choose the artists according to your budget and needs. They all do an amazing job.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 effects-right">
              <div className='effects-right-form'>
                <h5>Choose The Quality Of Your Artists</h5>
                <form action="" className='size-right-form'>
                  <div className="cd">
                    <div class="form-check xc">
                      <label for="exampleFormControlInput1" class="form-label">Affordoble Artists</label>
                      <input class="form-check-input formcheck" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                      <br />
                      <span>Best for budget. <small>See Work</small></span>
                    </div>
                  </div>
                  <div className="cd" style={{marginTop: "37px",height: "155.12px"}}>
                    <div class="form-check xc">
                      <label for="exampleFormControlInput1" class="form-label">Professional Artists</label>
                      <input style={{marginTop: "31px",marginLeft: "222px"}} class="form-check-input formcheck" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                      <br />
                      <span>Best for Value. <small>See Work</small></span>
                    </div>
                  </div>
                  <div className="cd" style={{marginTop: "37px",height: "156.12px"}}>
                    <div class="form-check xc">
                      <label for="exampleFormControlInput1" class="form-label">Super Creative Artists</label>
                      <input style={{marginTop: "35px",marginLeft: "192px"}} class="form-check-input formcheck" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                      <br />
                      <span>Best for Quality. <small>See Work</small></span>
                    </div>
                  </div>
                  <div className="butonssd">
                    <button className='onw-dark'>
                      <NavLink to="/Frame_10" class="onw-dark-a" style={{ color: "#51459E" }}>Back</NavLink>
                    </button>
                    <button className='tow-dark'>
                      <NavLink to="/Frame_11" class="tow-dark-a" style={{ color: "#51459E" }}>Complete</NavLink>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Frame_11
