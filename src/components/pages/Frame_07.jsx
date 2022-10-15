import React from 'react';
import Navbar from './Navbar';
import "../Style/Frame_07.css";
import { NavLink } from 'react-router-dom';
const Frame07 = () => {
  return (
    <>
      <Navbar />
      <div className="illustration">
        <div className="container">
          <div className="row">
            <div className="col-md-6 illustration-left">
              <div className='illustration-left-top'>
                <div class="progress">
                  <div class="progress-bar" role="progressbar" style={{ width: "63%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div className="small-list">
                  <small className="small-1">Voice  and Settings </small>
                  <small className="small-2">Storyboard</small>
                  <small className="small-3">illustration</small>
                  <small className="small-4">Animation</small>
                  <small className="small-5">Sound effects</small>
                </div>
                <div className="illustration-left-title">
                  <h4>Main
                    Course.</h4>
                  <p>Think of illustration as the face of your brand. <br />
                    Choose something that fits your brand feel and mission</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 illustration-right">
              <div className='illustration-right-form'>
                <h5>Choose illustration type</h5>
                <form action="" className='size-right-form'>
                  <div className="chek">
                    <div class="form-check">
                      <label for="exampleFormControlInput1" class="form-label">Charactars and graphics illustration</label>
                      <input class="form-check-input formcheck" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                      <br />
                      <span>This style contains shapes, texts, and charctars, it’s the standerd explainer video         </span>
                    </div>
                    <div class="form-check" style={{ marginTop: "61px" }}>
                      <label for="exampleFormControlInput1" class="form-label">Graphics only illustration</label>
                      <input class="form-check-input formcheck" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                      <br />
                      <span>This style contains shapes, texts, without characters, also known and Motion Graphics   </span>
                    </div>
                    <div className="chose">
                      <p>Choose your brand colors</p>
                      <div className="chose-onw">
                        <span className="chose-onw-pan-1"></span>
                        <span className="chose-onw-pan-2"></span>
                      </div>
                      <div className="chose-tow">
                        <span className="chose-tow-pan-1"></span>
                        <span className="chose-tow-pan-2"></span>
                      </div>
                    </div>
                    <div className="uplode">
                      <p> Upload your logo and any other files <span>(Optional)</span> </p>
                      <button>Upload</button>
                    </div>
                  </div>
                  <div className="butonssd">
                    <button className='onw-dark'>
                      <NavLink to="/Frame_06" class="onw-dark-a" style={{ color: "#51459E" }}>Back</NavLink>
                    </button>
                    <button className='tow-dark'>
                      <NavLink to="/Frame_07" class="tow-dark-a" style={{ color: "#51459E" }}>Next: Illustration</NavLink>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Frame07;
