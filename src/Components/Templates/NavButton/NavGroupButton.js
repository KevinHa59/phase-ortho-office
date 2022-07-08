import React from 'react';
import '../Templates.css';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { MdArrowDropDown } from 'react-icons/md';

const NavGroupButton = (props) => {
  const url = window.location.pathname;
  const urlLocation = window.location.pathname.split('/')[2];
  const currentLocation = props.path.split('/')[2];

  function LinkGroupExpandHandler(event) {
    event.currentTarget.querySelector('.NavTextContainer').classList.toggle('Active');
    event.currentTarget.querySelector('.Icon').classList.toggle('Active');
  }

  function HighlightAndPreventCollapseHandler(event) {
    event.stopPropagation();
    const NavTextButtons = document.querySelectorAll('.NavTextButton');
    NavTextButtons.forEach((item) => {
      item.classList.remove('Active');
    });
    event.currentTarget.classList.add('Active');
  }

  return (
    <div
      key={props.index}
      className="LinkGroupButton"
      onClick={(event) => {
        LinkGroupExpandHandler(event);
      }}
    >
      <Button variant="text" className={props.index === 0 ? 'NavGroupButton Active' : 'NavGroupButton'}>
        {props.name} <MdArrowDropDown className={urlLocation === currentLocation ? 'Icon Active' : 'Icon'} />
      </Button>
      <div className={urlLocation === currentLocation ? 'NavTextContainer Active' : 'NavTextContainer'}>
        {props.subMenu.map((item, index) => {
          return (
            <Link
              key={index}
              to={item.path}
              className={url === item.path ? 'NavTextButton Active' : 'NavTextButton'}
              onClick={(event) => {
                HighlightAndPreventCollapseHandler(event);
              }}
            >
              {item.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default NavGroupButton;
