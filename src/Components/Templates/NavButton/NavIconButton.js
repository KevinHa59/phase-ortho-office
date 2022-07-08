import React from 'react';
import '../Templates.css';
import { Link } from 'react-router-dom';
import { setMenu } from '../../../Redux/actions/Menu';
import { useDispatch } from 'react-redux';
import { Button } from '@mui/material';
import { useSelector } from 'react-redux';
const NavIconButton = (props) => {
  const dispatch = useDispatch();
  const User = useSelector((state) => state.User);
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
    <>
      {props.requireRoles.includes(User.userInfo.role) ? (
        <Link
          key={props.index}
          to={props.to}
          onClick={() => {
            dispatch(setMenu(props.subMenu));
          }}
        >
          <Button type="button" variant="text" className={'NavButton ' + props.isActive} onClick={(event) => NavButtonClickHandler(event)}>
            {props.icon}
            <div className="ToolTip">{props.name}</div>
          </Button>
        </Link>
      ) : null}
    </>
  );
};

export default NavIconButton;
