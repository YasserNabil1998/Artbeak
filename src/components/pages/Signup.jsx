import React from 'react';
import NavbarLogin from './NavbarLogin'
import "../Style/Signup.css";
import { NavLink } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

export default function Signup() {
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const [value, setValue] = React.useState('');

  const [America, setAge] = React.useState('');

  const handleChanges = (event) => {
    setAge(event.target.value);
  };

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
              <img src="../assets/iamges/Asset 7 1.svg" alt="" />
            </div>
            <div class="Navbar__Items">
              <div className='lefts'>
                <p>
                  Here to work?
                  <span>Join as an Artist</span>
                </p>
              </div>
            </div>

          </nav>
        </div>
      </section>

      {/* <!-----------end header-----------> */}

      <div className="signup container">
        <h1>Sign Up as Client </h1>
        <div className="row">
          <div className="top col-md-12">
            <button className='button-googel'>
              <img src="../assets/iamges/Google__G__Logo 1.svg" alt="" />
              <span>Continue with Google </span>
            </button>
          </div>
          <div className="button col-md-12">
            <button className='button-googel'>
              <img src="../assets/iamges/LinkedIn_icon_circle 1.svg" alt="" />
              <span>Continue with Linkedin  </span>
            </button>
          </div>
          <div className='hr'>
            <div className='hr-left'></div>
            <div className='hr-or'>or</div>
            <div className='hr-right'></div>
          </div>
          <div className="form">
            <form action="">
              <div className='rows'>
                <div class="mb-3">
                  <TextField
                    className='top-input-onw'
                    id="outlined-textarea"
                    label="First name"
                    multiline
                  />
                </div>
                <div class="mb-3">
                  <TextField
                    className='top-input-tow'
                    id="outlined-textarea"
                    label="Second Name"
                    multiline
                  />
                </div>
              </div>
              <div class="mb-3">
                <TextField
                  className='top-input'
                  id="outlined-textarea"
                  label="Email Address"
                  multiline
                />
              </div>
              <div class="mb-3">
                <FormControl className='button-input' variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type={values.showPassword ? 'text' : 'password'}
                    value={values.password}
                    onChange={handleChange('password')}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {values.showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                  />
                </FormControl>
              </div>
              <div className="md-3">
                <FormControl fullWidth className='buttonn-input'>
                  <InputLabel id="demo-simple-select-label">United States of America</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={America}
                    label="America"
                    onChange={handleChanges}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div class="mb-3 forget">
                <FormControlLabel className='label' control={<Checkbox defaultChecked />} label="I understand and agree to the Artbeak Terms of Service, including the User Agreement and Privacy Policy." />
              </div>
              <div class="mb-3 forgets">
                <FormControlLabel control={<Checkbox defaultChecked />} label="Send me emails with tips on how to find an artist that fits my needs." />
              </div>
            </form>
          </div>
          <div className='col-md-12 accont'>
            <button>
              <NavLink to="/Signin" class="btn btn-outline-dark">Create Account  </NavLink>
            </button>
            <p>
            Already have an account? 
              <NavLink to="/Signup" class="btn btn-outline-dark">Log in</NavLink>
            </p>
          </div>
        </div>
      </div>

    </>
  )
}
