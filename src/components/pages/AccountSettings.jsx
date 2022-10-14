import React from 'react'
import "../Style/AccountSettings.css";
import Navbar from './Navbar';


function AccountSettings() {
  return (
    <>
      <Navbar />

      <div className="AccountSettings container">
        <div className="top">
          <h2>Account Settings</h2>
          <p>This is where you can manage all of your settings .</p>
        </div>

        <div className="button">
          <div className="row">
            <div className="buttons">
              <h3>Account Settings</h3>
              <span>...</span>
            </div>
            <div className="list">

              <div className="list-name">
                <div class="btn-group">
                  <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <p>Basic info</p>
                  </button>
                  <ul className="dropdown-menu">
                    <div className="row">
                      <div className="col-md-8">
                        <form action="" className='formd'>
                          <div class="mb-3 row">
                            <label for="inputPassword" class="col-sm-2 col-form-label">First Name</label>
                            <div class="col-sm-10">
                              <input type="text" class="form-control" id="inputPassword"  placeholder="Tasser" />
                            </div>
                          </div>
                          <div class="mb-3 row">
                            <label for="inputPassword" class="col-sm-2 col-form-label">Last Name</label>
                            <div class="col-sm-10">
                              <input type="text" class="form-control" id="inputPassword" placeholder="Nabeil" />
                            </div>
                          </div>
                          <div class="mb-3 row">
                            <label for="inputPassword" class="col-sm-2 col-form-label">Email</label>
                            <div class="col-sm-10">
                              <input type="email" class="form-control" id="inputPassword" placeholder="yaser@gmail.com" />
                            </div>
                          </div>
                          <div class="mb-3 row">
                            <label for="inputPassword" class="col-sm-2 col-form-label">Country</label>
                            <div class="col-sm-10">
                              <input type="password" class="form-control" id="inputPassword" placeholder="Gaza" />
                            </div>
                          </div>
                        </form>
                      </div>
                      <div className="col-md-4 cdcd">
                        <img src="../assets/iamges/Group 33810.svg" class="profil" />
                        <span>Click to change your profile photo</span>
                      </div>
                    </div>
                  </ul>
                </div>
              </div>
              <div className="list-Security" style={{marginTop: "22px"}}>
                <div class="btn-group">
                  <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <p>Security</p>
                  </button>
                  <ul className="dropdown-menu">
                      <div className="col-md-12">
                        <h3 className='pass'>Change your passoword</h3>
                        <form action="" className='Security'>
                          <div class="mb-3 row">
                            <label for="inputPassword" class="col-sm-2 col-form-label">Current password</label>
                            <div class="col-sm-10">
                              <input type="passoword" class="form-control" id="inputPassword"  placeholder="...." />
                            </div>
                          </div>
                          <div class="mb-3 row">
                            <label for="inputPassword" class="col-sm-2 col-form-label">New password</label>
                            <div class="col-sm-10">
                            <input type="passoword" class="form-control" id="inputPassword"  placeholder="...." />                            </div>
                          </div>
                          <div class="mb-3 row">
                            <label for="inputPassword" class="col-sm-2 col-form-label">Confirm new password</label>
                            <div class="col-sm-10">
                            <input type="passoword" class="form-control" id="inputPassword"  placeholder="...." />                            </div>
                          </div>
                        </form>
                    </div>
                  </ul>
                </div>
              </div>
              <div className="list-Membership" style={{marginTop: "22px"}}>
                <div class="btn-group">
                  <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <p>Membership</p>
                  </button>
                  <ul className="dropdown-menu">
                      <div className="col-md-12">
                        <h3 className='pass-Membership'>Membership <span>Free membership</span> </h3>
                    </div>
                  </ul>
                </div>
              </div>
              <div className="list-Notifications" style={{marginTop: "22px"}}>
                <div class="btn-group">
                  <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <p>Notifications</p>
                  </button>
                  <ul className="dropdown-menu">
                      <div className="col-md-12">
                        <h3 className='pass-Notifications'>Enable notifications <span>Enable</span> </h3>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
            {/* <div>
          <p className="sh">Showing 1 to 6 of 12 transactions</p>
        </div> */}
          </div>
        </div>
      </div>

    </>
  )
}

export default AccountSettings
