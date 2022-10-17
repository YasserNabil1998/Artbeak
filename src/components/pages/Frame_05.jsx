import React from 'react'
import Navbar from './Navbar'
import "../Style/Frame_05.css";
import { NavLink } from 'react-router-dom';
function Frame_05() {
  return (
    <>
      <Navbar />
      <div className="Storyboard">
        <div className="container">
          <div className="row">
            <div className="col-md-6 Storyboard-left">
              <div className='Storyboard-left-top'>
                <div class="progress">
                  <div class="progress-bar" role="progressbar" style={{ width: "44%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div className="small-list">
                  <small className="small-1">Voice  and Settings </small>
                  <small className="small-2">Storyboard</small>
                  <small className="small-3">illustration</small>
                  <small className="small-4">Animation</small>
                  <small className="small-5">Sound effects</small>
                </div>
                <div className="Storyboard-left-title">
                  <h4>Good storyboard means
                    Good planning</h4>
                  <p>Having storyboard is important to have a clear
                    Production process. but you can still make your
                    Video without it.</p>
                  <div class="form-check" style={{ marginTop: "15px" }}>
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label class="form-check-label" for="flexCheckDefault">
                      I don’t want a storyborad
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 Storyboard-right">
              <div className='Storyboard-right-form'>
                <h5>Choose storyborad style you prefer</h5>
                <form action="" className='size-right-form'>
                  <div className="chek">
                    <div class="form-check">
                      <label for="exampleFormControlInput1" class="form-label">Sketchy storyboard style </label>
                      <input class="form-check-input formcheck" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                      <br />
                      <span>Just a rough and fast version of the storyborad</span>
                    </div>
                    <div class="form-check" style={{ marginTop: "21px" }}>
                      <label for="exampleFormControlInput1" class="form-label">Precise storyboard style  </label>
                      <input class="form-check-input formcheck" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                      <br />
                      <span>A Precise storyborad with clear look</span>
                    </div>

                  </div>
                  <div className="cheks" >
                    <h5>Choose the amount of details in your storyboard</h5>
                    <div class="form-check">
                      <label for="exampleFormControlInput1" class="form-label">Normal details</label>
                      <input class="form-check-input formcheck" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                      <br />
                      <span>I just want to preview the frame before going to illustration</span>
                    </div>
                    <div class="form-check" style={{ marginTop: "21px" }}>
                      <label for="exampleFormControlInput1" class="form-label">Dense details </label>
                      <input class="form-check-input formcheck" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                      <br />
                      <span>I would like to see my frame clearly before I continue into illustration</span>
                    </div>
                  </div>
                  <div className="butonssd">
                    <button className='onw-dark'>
                      <NavLink to="/Frame_04" class="onw-dark-a" style={{ color: "#51459E" }}>Back</NavLink>
                    </button>
                    <button className='tow-dark'>
                      <NavLink to="/Frame_06" class="tow-dark-a" style={{ color: "#51459E" }}>Next: Storyboard</NavLink>
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

export default Frame_05