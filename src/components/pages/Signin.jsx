import React from 'react'
import NavbarLogin from './NavbarLogin'
import "../Style/Signin.css";
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
import { NavLink } from  'react-router-dom';

export default function 
() {
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

  return (
    <>
            <NavbarLogin />
      <div className="sigin container">
        <h1>Sign in to Artbeak</h1>
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
              <div class="mb-3 forget">
                <FormControlLabel control={<Checkbox defaultChecked />} label="Keep me logged in" />
                <a href="">Forgot Password?</a>
              </div>
            </form>
          </div>
          <div className='col-md-12 accont'>
            <button>
              <NavLink to="/Signin" class="btn btn-outline-dark">Sign in</NavLink>
            </button>
            <p>Don’t have an account?
            <NavLink to="/Signup" class="btn btn-outline-dark">Sign up</NavLink>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
