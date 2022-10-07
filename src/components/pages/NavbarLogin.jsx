import React from 'react';
import "../Style/Navbar.css";

function NavbarLogin() {
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
              <img src="../assets/iamges/logosvgproper.svg" className='img'/>
            </div>
          </nav>
        </div>
      </section>

      {/* <!-----------end header-----------> */}
    </>
  )
}

export default NavbarLogin
