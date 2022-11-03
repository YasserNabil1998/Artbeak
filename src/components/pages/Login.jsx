import React from 'react'
import "../Style/Login.css";
import NavbarLogin from './NavbarLogin';
import { Button, FormControlLabel, Radio } from "@mui/material";
import { NavLink } from 'react-router-dom';

function Login() {
  return (
    <>
      <NavbarLogin />
      <div className='login container'>
        <div className='titel'> <h1>Join As Client or Artist</h1> </div>
        <div className="row">
          <div className="col-md-6 top">
            <div class="form-check">
              <input class="form-check-input" type="radio" value="client" name="flexRadioDefault" id="flexRadioDefault1" />
              <label class="form-check-label" for="flexRadioDefault1">
                client
              </label>
            </div>
            <p>Looking for explainer videos</p>
            <img src="assets/iamges/Clineticonsvg.svg" alt="" />
          </div>
          <div className="col-md-6 button">
            <div class="form-check">
              <input class="form-check-input" type="radio" value="client" name="flexRadioDefault" id="flexRadioDefault1" />
              <label class="form-check-label" for="flexRadioDefault1">
                Artist
              </label>
            </div>
            <p>Looking for Work</p>
            <img src="assets/iamges/Artisticonsvg.svg" alt="" />
          </div>
          <div className='col-md-12 accont'>
            <button>
              <NavLink to="/Signup" class="btn btn-outline-dark">Create Account </NavLink>
            </button>
            <p>Already have an account?
              <NavLink to="/Signin" class="btn btn-outline-dark">Log in</NavLink>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
