import React from 'react';
import Navbar from './Navbar';
import "../Style/Frame_06.css";
import { NavLink } from 'react-router-dom';

const Frame06 = () => {
  return (
    <>
      <Navbar />
      <div className="imagination">
        <div className="container">
          <div className="row">
            <div className="col-md-6 imagination-left">
              <div className='imagination-left-top'>
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
                <div className="imagination-left-title">
                  <h4>Make your imagination
                    A Reality.</h4>
                  <p>Where do you imagin your script?
                    Just write down what you see.</p>

                </div>
              </div>
            </div>
            <div className="col-md-6 imagination-right">
              <div className='imagination-right-form'>
                <h5>Visual Description</h5>
                <form action="" className='size-right-form'>
                  <div className="chek">
                    <div class="form-check">
                      <input type="email" class="form-control imagination-chek-1" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Sentence 1" />
                      <input type="email" class="form-control imagination-chek-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="What do you see here?" />
                      <span></span>
                    </div>
                    <div class="form-check" style={{marginTop: "42px"}}>
                      <input type="email" class="form-control imagination-chek-1" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Sentence 2" />
                      <input type="email" class="form-control imagination-chek-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="What do you see here?" />
                      <span></span>
                    </div>
                    <div class="form-check" style={{marginTop: "51px"}}>
                      <input type="email" class="form-control imagination-chek-1" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Sentence 3" />
                      <input type="email" class="form-control imagination-chek-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="What do you see here?" />
                      <span></span>
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

export default Frame06;
