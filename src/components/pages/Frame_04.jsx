import React from 'react'
import Navbar from './Navbar'
import "../Style/Frame_04.css";
import { NavLink } from 'react-router-dom';
function Frame_04() {
  return (
    <>
      <Navbar />

      <div className="Speak">
        <div className="container">
          <div className="row">
            <div className="col-md-6 Speak-left">
              <div className='Speak-left-top'>
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
                <div className="Speak-left-title">
                  <h4>Speak your people’s
                    Language</h4>
                  <p>Get closer to your customers by talking their accent.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 Speak-right">
              <div className='Speak-right-form'>
                <h5>Choose your voice over accent</h5>
                <form action="" className='size-right-form'>
                  <div className="chek">
                    <div class="form-check">
                      <label for="exampleFormControlInput1" class="form-label">British accent  </label>
                      <input class="form-check-input formcheck" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    </div>
                    <div class="form-check"  style={{ marginTop: "21px" }}>
                      <label for="exampleFormControlInput1" class="form-label">American accent  </label>
                      <input class="form-check-input formcheck" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    </div>
                    <div class="form-check"  style={{ marginTop: "25px" }}>
                      <label for="exampleFormControlInput1" class="form-label">Australian accent  </label>
                      <input class="form-check-input formcheck" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    </div>
                    <div class="form-check"  style={{ marginTop: "26px" }}>
                      <label for="exampleFormControlInput1" class="form-label">Irish accent  </label>
                      <input class="form-check-input formcheck" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    </div>
                  </div>
                  <div className="cheks" style={{ marginTop: "-21px" }}>
                    <h5>Choose your voice over type</h5>
                    <div class="form-check">
                      <label for="exampleFormControlInput1" class="form-label">Female  </label>
                      <input class="form-check-input formcheck" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    </div>
                    <div class="form-check"  style={{ marginTop: "-8px" }}>
                      <label for="exampleFormControlInput1" class="form-label">Male </label>
                      <input class="form-check-input formcheck" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    </div>
                  </div>
                  <div className="butonssd">
                    <button className='onw-dark'>
                      <NavLink to="/Frame_04" class="onw-dark-a" style={{ color: "#51459E"}}>Back</NavLink>
                    </button>
                    <button className='tow-dark'>
                      <NavLink to="/Frame_05" class="tow-dark-a" style={{ color: "#51459E"}}>Next: Voice and Settings</NavLink>
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

export default Frame_04