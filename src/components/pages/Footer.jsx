import React from 'react';
import "../Style/Footer.css";

function Footer() {
  return (
    <>
      {/* <!----------- footer -----------> */}
      <footer id="footer">
        <div class="container">
          <div class="row">
            <div class="top col-sm-6">
              <img src="../assets/iamges/logosvgproper.svg" class="inmg" />
              <p >
                Artbeak is your all in one video marketing platform.
                <br />
                Hire and manage the finest artists to craft your high
                <br />
                Quality Explainer video in no time.
              </p>
              <div class="top-links" style={{ marginLeft: "29px", marginTop: "24px" }}>
                <img src="../assets/img/LinkedIn.svg" />
                <img src="../assets/img/Facebook.svg" />
                <img src="../assets/img/Twitter.svg" />
              </div>

            </div>
            <div class="top-sds col-sm-6">

              <div class="onw col-sm-4">

                <h3 style={{ marginLeft: "-27px", marginTop: "3px" }}>Artistis</h3>
                <div class="tow" style={{ marginTop: "43px", marginLeft: "-26px" }}>
                  <p>Sign up as Artist</p>
                  <p>Terms & Conditions</p>
                  <p>Acceptance Process</p>
                </div>
              </div>
              <div class="onw col-sm-4">
                <h3 style={{ marginLeft: "-14px", marginTop: "px" }}>clients</h3>
                <div class="tow" style={{ marginTop: "44px", marginLeft: "-26px" }}>
                  <p>Sign up as a Client</p>
                  <p>Terms & Conditions</p>
                  <p>Payament Process</p>
                </div>
              </div>
              <div class="onw col-sm-4">

                <h3 style={{ marginLeft: "-2px", marginTop: "3px" }}>company</h3>
                <div class="tow" style={{ marginTop: "43px", marginLeft: "-16px" }}>
                  <p>Pravicy police</p>
                  <p>Contact</p>
                  <p>About us</p>
                </div>
              </div>

            </div>

            <h5>
              <p class="p">@Artbeak 2021 All right reserved.</p>
            </h5>
          </div>
        </div>
      </footer>

      {/* <!----------- end footer -----------> */}
    </>
  )
}

export default Footer