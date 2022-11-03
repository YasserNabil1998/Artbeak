import React from 'react';
import "../Style/Index.css";
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';

function Index() {
  return (
    <>
    <Navbar />
      {/* <!-----------main-----------> */}
      <div id="main">
        <section id="welcome col-md-12">
          <div class="container">
            <div class="row">
              <div class="top-welcom ">
                <h2>Good Morning James</h2>
                <p>Start Making Your High Quality Explainer Video.</p>
                <div style={{ display: "flex", marginLeft: "24px", marginTop: "32px" }}>
                  <button class="button1"> 
                  <NavLink to="/Frame_01" class="btn btn-outline-dark" style={{color: "#51459E !important"}} >Create Explainer</NavLink>
                  </button>
                  <button class="button2">Upgrade plan</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- top --> */}
        <div class="top col-md-12">
          <div class="container">
            <div class="row">
              <div class="top-top">

                <div class="Recent">
                  <h3 class="col-md-8">Recent Payments</h3>
                  <span class="col-md-4">...</span>
                </div>
                <div class="buttons">
                  <img src="../assets/iamges/Group 85.png" />
                  <p>Seth Daniels</p>
                  <span>Creative Illustrator</span>
                  <strong>150USD</strong>
                  <img src="../assets/iamges/Vector 9.svg" class="img" />
                </div>

                <div class="buttonss" style={{ margintop: "10px" }}>
                  <img src="../assets/iamges/Group 82.png" />
                  <p>Dominic Baker</p>
                  <span>Creative Animator</span>
                  <strong>400USD</strong>
                  <img src="../assets/iamges/circle.svg" class="img" />
                </div>

                <div class="buttonsss" style={{ margintop: "10px" }}>
                  <img src="../assets/iamges/Group 81.png" />
                  <p>Ollie Baldwin</p>
                  <span>Professional Storyborad designer</span>
                  <strong>400USD</strong>
                  <img src="../assets/iamges/Vector 9.svg" class="img" />
                </div>
                <p class="open">
                <NavLink to="/Transactions" class="btn btn-outline-dark">Open My Transactions </NavLink>
                 <span>
                  <img src="../assets/iamges/arrow.svg" alt="" />
                </span></p>
              </div>
              <div class=" top-button">
                <div class="Recent">
                  <h3 class="col-md-8">Explainers Drafts</h3>
                  <span class="col-md-4">...</span>
                </div>
                <div class="buttons">
                  <p>New Product release explainer video</p>
                  <NavLink to="/Projects" class="btn btn-outline-dark">Open Project </NavLink>
                </div>
                <div class="buttonss" style={{ margintop: "13px" }}>
                  <p>Youtube content explainer video</p>
                  <NavLink to="/Projects" class="btn btn-outline-dark">Open Project </NavLink>
                </div>
                <p class="open">
                  <NavLink to="/Projects" class="btn btn-outline-dark" >Open My Projects </NavLink>
                  <span>
                    <img src="../assets/iamges/arrow.svg" alt="" />
                  </span></p>
              </div>
              <div class="col-md-12 beta">
                <h4>Explainers Analytics (Beta)</h4>
                <button>Activate</button>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End top ---> */}
      </div>
      {/* <!-----------End main-----------> */}
    </>
  )
}

export default Index
