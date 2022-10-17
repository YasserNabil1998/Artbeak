import React from 'react'
import Navbar from './Navbar'
import "../Style/Frame_10.css";
import { NavLink } from 'react-router-dom';
function Frame_10() {
  return (
    <>
      <Navbar />
      <div className="Sound">
        <div className="container">
          <div className="row">
            <div className="col-md-6 Sound-left">
              <div className='Sound-left-top'>
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
                <div className="Sound-left-title">
                  <h4>Sound enhance
                    Everything</h4>
                  <p>Choose your music and sound effects.</p>
                  <div class="form-check" style={{ marginTop: "-9px" }}>
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label class="form-check-label" for="flexCheckDefault">
                      I don’t need sound effects
                    </label>
                  </div>
                  <div class="form-check" style={{ marginTop: "10px" }}>
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label class="form-check-label" for="flexCheckDefault">
                      I don’t need music
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 Sound-right">
              <div className='Sound-right-form'>
                <h5>Choose your music</h5>
                <form action="" className='size-right-form'>
                  <div className="you">
                    <img src="../assets/iamges/audio-player-hero-image 1.svg" alt="iamges" />
                  </div>
                  <div className="cheks" >
                    <h5>choose sound effects type</h5>
                    <div class="form-check">
                      <label for="exampleFormControlInput1" class="form-label">Normal sound effects</label>
                      <input class="form-check-input formcheck" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                      <br />
                      <span>just a basic way of inserting your sound effect</span>
                    </div>
                    <div class="form-check" style={{ marginTop: "50px" }}>
                      <label for="exampleFormControlInput1" class="form-label">Creative sound effects</label>
                      <input class="form-check-input formcheck" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                      <br />
                      <span>inserting a unique sounds with a creative vision</span>
                    </div>
                  </div>
                  <div className="butonssd">
                    <button className='onw-dark'>
                      <NavLink to="/Frame_09" class="onw-dark-a" style={{ color: "#51459E" }}>Back</NavLink>
                    </button>
                    <button className='tow-dark'>
                      <NavLink to="/Frame_11" class="tow-dark-a" style={{ color: "#51459E" }}>Next</NavLink>
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

export default Frame_10
