import React from 'react';
import '../Templates.css';
import { useDispatch } from 'react-redux';
import { Button } from '@mui/material';
import { setLogout } from '../../../Redux/actions/User';
import { useNavigate } from 'react-router-dom';
const NavIconLogoutButton = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function logoutHandler() {
    localStorage.removeItem('role'); // remove role in local storage
    dispatch(setLogout()); // set user to Guest role with Authentication is false
    navigate('/auth/login'); // navigate back to login page if user logs out
  }
  return (
    <Button type="button" variant="text" className="NavButton" onClick={() => logoutHandler()}>
      {props.icon}
      <div className="ToolTip">{props.name}</div>
    </Button>
  );
};

export default NavIconLogoutButton;
