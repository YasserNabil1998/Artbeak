import React from 'react'
import Navbar from './Navbar';
import "../Style/Frame_08.css";
import { NavLink } from 'react-router-dom';
function Frame_08() {
  return (
    <>
      <Navbar />

      <div className="Proper">
        <div className="container">
          <div className="row">
            <div className="col-md-6 Proper-left">
              <div className='Proper-left-top'>
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
                <div className="Proper-left-title">
                  <h4>Proper illustration
                    Style is essential</h4>
                  <p>The style you choose effect how people see your brand in a hug way.</p>
                  <p style={{ marginTop: "23px" }}>Note: this is just an indication of the style you will get, the Final output depends on the artist's quality and some other Factors.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 Proper-right">
              <div className='Proper-right-form'>
                <h5>Paste the link for a video that inspires you</h5>
                <form action="" className='size-right-form'>
                  <div className="cheka">
                    <div class="form-check">
                      <input type="text" class="form-control imagination-chek-1" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Video link " />
                      <br />
                      <span>Video can be any type of explainer video you like and want <br />
                        something similer to it     </span>
                    </div>
                  </div>
                  <div className="slider">
                    <p>Or you can choose from our styles</p>
                    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                      <div class="carousel-inner">
                        <div class="carousel-item active">
                          <img class="d-block" src="../assets/iamges/1.svg" alt="First slide" />
                        </div>
                        <div class="carousel-item">
                          <img class="d-block" src="../assets/iamges/1.svg" alt="Second slide" />
                        </div>
                        <div class="carousel-item">
                          <img class="d-block" src="../assets/iamges/1.svg" alt="Third slide" />
                        </div>
                      </div>
                      <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      </a>
                      <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      </a>
                    </div>
                  </div>

                  <div className="butonssd"> 
                    <button className='onw-dark'>
                      <NavLink to="/Frame_07" class="onw-dark-a" style={{ color: "#51459E" }}>Back</NavLink>
                    </button>
                    <button className='tow-dark'>
                      <NavLink to="/Frame_09" class="tow-dark-a" style={{ color: "#51459E" }}>Next: Illustration</NavLink>
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

export default Frame_08