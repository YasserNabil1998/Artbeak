import React from 'react';
import "../Style/Navbar.css";

function Navbar() {
  return (
    <>
            {/* <!-----------header---------------> */}

            <section id="header">
        <div class="container">
          <nav>
            <a id="menu-icon" class="menu-icon">
              <i class="fa fa-bars"></i>
            </a>
            <div class="logo col-sm-3">
              <img src="../assets/iamges/logosvgproper.svg" className='img' />
            </div>
            <div class="links col-sm-8 Navbar__Items">
              <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <img src="../assets/iamges/search.svg" />
              </form>
              <ul class="menu ">
                <li>
                  <a href="#Visual Nutration">
                    <img src="../assets/img/Group_1.svg" alt="" />
                    My Board
                  </a>
                </li>
                <li className='li'>
                  <a href="# My Explainer videos" class="grout-t">
                    <img src="../assets/iamges/folder.svg" class="Group_4" />
                    My Projects
                  </a>
                </li>
              </ul>
            </div>
            <div class="left Navbar__Items">
              <img src="../assets/img/Asset 10 1.svg" class="Asset" />
              <img src="../assets/iamges/Group 33810.svg" onClick={"myFunction()"} class="Profile" />
            </div>
          
          </nav>
        </div>
      </section>

      {/* <!-----------end header-----------> */}
    </>
  )
}

export default Navbar
