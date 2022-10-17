import React from 'react'
import Navbar from './Navbar'
import "../Style/Frame_09.css";
import { NavLink } from 'react-router-dom';

function Frame_09() {
  return (
    <>
      <Navbar />
      <div className="Animation">
        <div className="container">
          <div className="row">
            <div className="col-md-6 Animation-left">
              <div className='Animation-left-top'>
                <div class="progress">
                  <div class="progress-bar" role="progressbar" style={{ width: "82%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div className="small-list">
                  <small className="small-1">Voice  and Settings </small>
                  <small className="small-2">Storyboard</small>
                  <small className="small-3">illustration</small>
                  <small className="small-4">Animation</small>
                  <small className="small-5">Sound effects</small>
                </div>
                <div className="Animation-left-title">
                  <h4>Animating illustration
                    Feels amazing.</h4>
                  <p>This is where you make a few decisions about the final animation</p>

                </div>
              </div>
            </div>
            <div className="col-md-6 Animation-right">
              <div className='Animation-right-form'>
                <h5>Choose your animation type</h5>
                <form action="" className='size-right-form'>
                  <div className="chek">
                    <div class="form-check">
                      <label for="exampleFormControlInput1" class="form-label">Normal aniamation </label>
                      <input class="form-check-input formcheck" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                      <br />
                      <span>The best value for the price                   </span>
                    </div>
                    <div class="form-check" style={{ marginTop: "70px" }}>
                      <label for="exampleFormControlInput1" class="form-label">Frame by frame animation  </label>
                      <input class="form-check-input formcheck" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                      <br />
                      <span>The best quality, every frame from each second get drawn separately</span>
                    </div>

                  </div>
                  <div className="cheks" >
                    <h5>Choose your charactar preference</h5>
                    <div class="form-check">
                      <label for="exampleFormControlInput1" class="form-label">Acting charcters</label>
                      <input class="form-check-input formcheck" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                      <br />
                      <span>the charactars just act in the storyline</span>
                    </div>
                    <div class="form-check" style={{ marginTop: "43px" }}>
                      <label for="exampleFormControlInput1" class="form-label">Talking charactars</label>
                      <input class="form-check-input formcheck" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                      <br />
                      <span>the charactars talk and act in the storyline</span>
                    </div>
                  </div>
                  <div className="butonssd">
                    <button className='onw-dark'>
                      <NavLink to="/Frame_08" class="onw-dark-a" style={{ color: "#51459E" }}>Back</NavLink>
                    </button>
                    <button className='tow-dark'>
                      <NavLink to="/Frame_10" class="tow-dark-a" style={{ color: "#51459E" }}>Next: Sound Design</NavLink>
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

export default Frame_09
