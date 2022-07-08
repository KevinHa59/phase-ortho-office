import React from 'react';
import '../Templates.css';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
const NavIconLoginButton = (props) => {
  function NavButtonClickHandler(event) {
    const NavButtons = document.querySelectorAll('.NavButton');
    NavButtons.forEach((item) => {
      item.classList.remove('Active');
      item.querySelector('.Icon').classList.remove('Active');
    });
    event.currentTarget.classList.add('Active');
    event.currentTarget.querySelector('.Icon').classList.add('Active');
  }
  return (
    <Link to={props.to} onClick={props.onClick}>
      <Button variant="text" className={'NavButton ' + props.isActive} onClick={(event) => NavButtonClickHandler(event)}>
        {props.icon}
        <div className="ToolTip">{props.name}</div>
      </Button>
    </Link>
  );
};

export default NavIconLoginButton;
