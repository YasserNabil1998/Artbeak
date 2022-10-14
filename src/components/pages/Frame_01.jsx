import React from 'react'
import Navbar from './Navbar'
import "../Style/Frame_01.css";
import { NavLink } from 'react-router-dom';



function Frame_01() {
  return (
    <>
      <Navbar />

      <div className='voice'>
        <div className="container">
          <div className="row">
            <div className="col-md-6 voice-left">
              <div className='voice-left-top'>
                <div class="progress">
                  <div class="progress-bar" role="progressbar" style={{ width: "21%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div className="small-list">
                  <small className="small-1">Voice  and Settings </small>
                  <small className="small-2">Storyboard</small>
                  <small className="small-3">illustration</small>
                  <small className="small-4">Animation</small>
                  <small className="small-5">Sound effects</small>
                </div>
                <div className="voice-left-title">
                  <h4>Let’s Start With
                    The basics</h4>
                  <p>Customaize your explainer
                    Video in 10 minutes.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 voice-right">
              <div className='voice-right-form'>
                <form action="">
                  <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Explainer video title </label>
                    <input type="email" class="form-control input" id="exampleFormControlInput1" />
                  </div>
                  <div className="chek">
                    <p>Explainer video language </p>
                    <div class="form-check">
                      <input class="form-check-input formcheck" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                      <label class="form-check-label" for="flexRadioDefault1">
                        English
                      </label>
                    </div>
                  </div>
                  <div className="select">
                    <p>How long will your video be</p>
                    <select class="form-select" aria-label="Default select example">
                      <option selected>30 Second</option>
                      <option value="30">30 Second</option>
                      <option value="40">40 Second</option>
                      <option value="50">50 Second</option>
                      <option value="60">60 Second</option>
                    </select>
                  </div>
                  <div className="butonssd">
                    <button className='onw-dark'> 
                      <NavLink to="/Index" class="onw-dark-a" style={{ color: "#51459E"}}>Back</NavLink>
                    </button>
                    <button className='tow-dark'>
                    <NavLink to="/Frame_02" class="tow-dark-a" style={{ color: "#51459E"}}>Next: Voice and Settings</NavLink>
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

export default Frame_01
