import React from 'react'
import Navbar from './Navbar'
import "../Style/Frame_03.css";
import { NavLink } from 'react-router-dom';

function Frame_03() {
  return (
    <>
      <Navbar />
      <div className="write">
        <div className="container">
          <div className="row">
            <div className="col-md-6 write-left">
              <div className='write-left-top'>
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
                <div className="write-left-title">
                  <h4>Let’s write your
                    Voice over </h4>
                  <p>Writing voice over is easy. start with your customer
                    Problem and then present your product solution.</p>
                  <div class="form-check" style={{ marginTop: "46px" }}>
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label class="form-check-label" for="flexCheckDefault">
                      I don’t want a Voice over
                    </label>
                  </div>
                  <span className='span-one'>This option will make your video slient (no talking, Just music)</span>
                  <br />
                  <span className='span-tow'>Sentences will be marked as “there’s no voice over” </span>
                </div>
              </div>
            </div>
            <div className="col-md-6 write-right">
              <div className='write-right-form'>
                <h5>Your Voice over script</h5>
                <span>30 second equals  60 words of script.</span>
                <form action="" className='size-right-form'>
                  <div className="chek">
                    <div class="form-check">
                      <input type="email" class="form-control chek-1" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Sentence 1" />
                      <span className='span-1'>0/10</span>
                    </div>
                    <div class="form-check">
                      <input type="email" class="form-control chek-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Sentence 2" />
                      <span className='span-2'>0/10</span>
                    </div>
                    <div class="form-check">
                      <input type="email" class="form-control chek-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Sentence 3" />
                      <span className='span-3'>0/10</span>
                    </div>
                    <div class="form-check">
                      <input type="email" class="form-control chek-4" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Sentence 4" />
                      <span className='span-4'>0/10</span>
                    </div>
                    <div class="form-check">
                      <input type="email" class="form-control chek-5" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Sentence 5" />
                      <span className='span-5'>0/10</span>
                    </div>
                    <div class="form-check">
                      <input type="email" class="form-control chek-6" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Sentence 6" />
                      <span className='span-6'>0/10</span>
                    </div>
                  </div>
                  <div className='need'>
                    <p className='need-1'>
                      Need help writing your Voice-over?
                      Take a look at some examples <small>here</small>
                    </p>
                    <p className='need-2'> 0/60</p>
                  </div>
                  <div className="butonssd">
                    <button className='onw-dark'>
                      <NavLink to="/Frame_03" class="onw-dark-a" style={{ color: "#51459E"}}>Back</NavLink>
                    </button>
                    <button className='tow-dark'>
                      <NavLink to="/Frame_04" class="tow-dark-a" style={{ color: "#51459E"}}>Next: Voice and Settings</NavLink>
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

export default Frame_03
