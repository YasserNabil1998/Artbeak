import React from 'react';
import "../Style/Transactions.css";
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';

function Transactions() {
  return (
    <>
      <Navbar />
      <div className="Transactions container">
        <div className="top">
          <h2>My Transactions</h2>
          <p>This is where you can manage all of your payments.</p>
        </div>

        <div className="button">
          <div className="row">
            <div className="buttons">
              <h3>Transactions list</h3>
              <span>...</span>
            </div>
            <div className="list">
              <div class="btn-group">
                <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <strong>1</strong>
                  <div className="fg">
                    <img src="../assets/iamges/Image-1.svg" alt="sss" />
                    <p>Seth Daniels</p>
                    <small>Creative Sound effect designer</small>
                  </div>
                  <p className='Sound'>Sound effects stage</p>
                  <span>Jul, 25, 2022</span>
                  <small className='small'>150USD</small>
                  <img className='img' src="../assets/iamges/Vector 9.svg" alt="" />
                </button>
                <ul className="dropdown-menu">
                  ...fgsd
                  sfdgsdf
                </ul>
              </div>
              <div class="btn-group" style={{marginTop: "10px"}}>
                <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <strong>2</strong>
                  <div className="fg">
                    <img src="../assets/iamges/Image-1.svg" alt="sss" />
                    <p>Dominic Baker</p>
                    <small style={{marginLeft: "-74px"}}>Creative Animator</small>
                  </div>
                  <p className='Sound' style={{marginLeft: "158px"}}>Animation stage</p>
                  <span style={{marginLeft: "202px", marginTop: "15px"}}>Jul, 21, 2022</span>
                  <small className='small' style={{color: "#DE350B"}}> 400USD</small>
                  <img className='img' src="../assets/iamges/circle.svg" alt="" />
                </button>
                <ul className="dropdown-menu">
                  ...fgsd
                  sfdgsdf
                </ul>
              </div>
              <div class="btn-group" style={{marginTop: "10px"}}>
                <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <strong>3</strong>
                  <div className="fg">
                    <img src="../assets/iamges/Image-1.svg" alt="sss" />
                    <p>Seth Daniels</p>
                    <small>Creative Sound effect designer</small>
                  </div>
                  <p className='Sound'>Sound effects stage</p>
                  <span>Jul, 25, 2022</span>
                  <small className='small'>150USD</small>
                  <img className='img' src="../assets/iamges/Vector 9.svg" alt="" />
                </button>
                <ul className="dropdown-menu">
                  ...fgsd
                  sfdgsdf
                </ul>
              </div>
              <div class="btn-group" style={{marginTop: "10px"}}>
                <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <strong>4</strong>
                  <div className="fg">
                    <img src="../assets/iamges/Image-1.svg" alt="sss" />
                    <p>Dominic Baker</p>
                    <small style={{marginLeft: "-74px"}}>Creative Animator</small>
                  </div>
                  <p className='Sound' style={{marginLeft: "158px"}}>Animation stage</p>
                  <span style={{marginLeft: "202px", marginTop: "15px"}}>Jul, 21, 2022</span>
                  <small className='small' style={{color: "#DE350B"}}> 400USD</small>
                  <img className='img' src="../assets/iamges/circle.svg" alt="" />
                </button>
                <ul className="dropdown-menu">
                  ...fgsd
                  sfdgsdf
                </ul>
              </div>
              <div class="btn-group" style={{marginTop: "10px"}}>
                <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <strong>5</strong>
                  <div className="fg">
                    <img src="../assets/iamges/Image-1.svg" alt="sss" />
                    <p>Seth Daniels</p>
                    <small>Creative Sound effect designer</small>
                  </div>
                  <p className='Sound'>Sound effects stage</p>
                  <span>Jul, 25, 2022</span>
                  <small className='small'>150USD</small>
                  <img className='img' src="../assets/iamges/Vector 9.svg" alt="" />
                </button>
                <ul className="dropdown-menu">
                  ...fgsd
                  sfdgsdf
                </ul>
              </div>
              <div class="btn-group" style={{marginTop: "10px"}}>
                <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <strong>6</strong>
                  <div className="fg">
                    <img src="../assets/iamges/Image-1.svg" alt="sss" />
                    <p>Dominic Baker</p>
                    <small style={{marginLeft: "-74px"}}>Creative Animator</small>
                  </div>
                  <p className='Sound' style={{marginLeft: "158px"}}>Animation stage</p>
                  <span style={{marginLeft: "202px", marginTop: "15px"}}>Jul, 21, 2022</span>
                  <small className='small' style={{color: "#DE350B"}}> 400USD</small>
                  <img className='img' src="../assets/iamges/circle.svg" alt="" />
                </button>
                <ul className="dropdown-menu">
                  ...fgsd
                  sfdgsdf
                </ul>
              </div>

              <div>
                <p className="sh">Showing 1 to 6 of 12 transactions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Transactions
