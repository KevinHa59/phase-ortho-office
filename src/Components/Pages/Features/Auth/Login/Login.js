import React, { useState } from 'react';
import './Login.css';
import BlankPanel from '../../../../Templates/Panel/BlankPanel';
import Logo from '../../../../../Images/Logo.jpg';
import TextField from '@mui/material/TextField';
import ButtonItem from '../../../../Templates/Controller/ButtonItem';
import { useSelector, useDispatch } from 'react-redux';
import { setLogin } from '../../../../../Redux/actions/User';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useNavigate } from 'react-router-dom';
export default function Login() {
  const dispatch = useDispatch();
  const [role, SetRole] = useState('');
  const navigate = useNavigate();
  function onRoleChangeHandler(value) {
    SetRole(value);
  }

  return (
    <div className="MainLoginContainer">
      <div className="LoginPanel">
        <BlankPanel className={'LoginForm'}>
          <img src={Logo} alt="" />
          <p className="Header">Welcome Back!</p>
          <p className="SubHeader">Login to your Phase Ortho account</p>
          <div className="Form">
            <div className="LoginRole">
              <FormControl fullWidth>
                <InputLabel id="role-label">Login as</InputLabel>
                <Select labelId="role-label" id="roleSelection" label="Role" value={role} onChange={(value) => onRoleChangeHandler(value.target.value)}>
                  <MenuItem value={'Guest'}>Guest</MenuItem>
                  <MenuItem value={'User'}>User</MenuItem>
                  <MenuItem value={'Admin'}>Admin</MenuItem>
                </Select>
              </FormControl>
            </div>
            <TextField id="outlined-basic" label="Username" variant="outlined" />
            <TextField id="outlined-password-input" label="Password" type="password" autoComplete="current-password" />
          </div>
          <div className="Action">
            <div className="Left">
              <input id="remember-me" type="checkbox" /> <label htmlFor="remember-me">Remember me</label>
            </div>
            <div className="Right">
              <a href="#">Forgot Password?</a>
            </div>
          </div>
          <div className="Controller">
            <ButtonItem
              onClick={() => {
                dispatch(setLogin(role));
                localStorage.setItem('role', role);
                navigate('/auth/user/overview');
              }}
            >
              Login
            </ButtonItem>
            <ButtonItem disabled={true}>Scan Badge</ButtonItem>
          </div>
        </BlankPanel>
      </div>
    </div>
  );
}
