import React from 'react'
import Navbar from './Navbar'
import "../Style/Frame_02.css"
import { NavLink } from 'react-router-dom';

function Frame_02() {
  return (
    <>
      <Navbar />
      <div className="size">
        <div className="container">
          <div className="row">
            <div className="col-md-6 size-left">
              <div className='size-left-top'>
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
                <div className="size-left-title">
                  <h4>Each device have
                    Different size</h4>
                  <p>These aren’t final answers, you can always edit them again.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 size-right">
              <div className='voice-right-form'>
                <h5>Choose you Explainer video size</h5>
                <form action="" className='size-right-form'>
                  <div className="chek">
                    <div class="form-check">
                      <label for="exampleFormControlInput1" class="form-label">Large </label>
                      <input class="form-check-input formcheck" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    </div>
                    <span>For displaying on laptop, desktop, website, youtube. </span>
                    <br />
                    <img src="../assets/iamges/Asset 1 2.svg" alt="lab" />
                  </div>
                  <div className="chekS" style={{ marginTop: "47px" }}>
                    <div class="form-check">
                      <label for="exampleFormControlInput1" class="form-label">Small  </label>
                      <input class="form-check-input formcheck" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    </div>
                    <span>For displaying on phones, social media, stories, shorts. </span>
                    <br />
                    <img src="../assets/iamges/phone.svg" alt="lab" />
                  </div>
                  <div className="chekSC" style={{ marginTop: "63px" }}>
                    <div class="form-check">
                      <label for="exampleFormControlInput1" class="form-label">Both   </label>
                      <input class="form-check-input formcheck" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    </div>
                    <span>Get both sizes and enjoy maltuple use cases</span>
                    <br />
                    <img src="../assets/iamges/phone.svg" alt="lab" />
                    <img src="../assets/iamges/Asset 1 2.svg" alt="lab" className='img' />
                  </div>
                  <div className="butonssd">
                    <button className='onw-dark'>
                      <NavLink to="/Frame_01" class="onw-dark-a" style={{ color: "#51459E"}}>Back</NavLink>
                    </button>
                    <button className='tow-dark'>
                      <NavLink to="/Frame_03" class="tow-dark-a" style={{ color: "#51459E"}}>Next: Voice and Settings</NavLink>
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

export default Frame_02
