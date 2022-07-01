import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './PageRouter.css';
import { Link, Outlet } from 'react-router-dom';
import { Menu } from '../../Data/Menu';
import NavTextButton from '../Templates/NavButton/NavTextButton';
import NavGroupButton from '../Templates/NavButton/NavGroupButton';
export default function PageRouter() {
  const menu = useSelector((State) => State.Menu);
  const [SelectedMenu, setSelectedMenu] = useState(Menu[0]);

  useEffect(() => {
    menu.length !== 0 ? setSelectedMenu(menu) : setSelectedMenu(Menu[0]);
    const NavTextButtons = document.querySelectorAll('.NavTextButton');
    NavTextButtons.forEach((item, index) => {
      if (index === 0) {
        item.classList.add('Active');
      } else {
        item.classList.remove('Active');
      }
    });
  }, [menu]);
  return (
    <div className="PageRouter">
      <div className="Left">
        <div className="Header">{SelectedMenu.name}</div>
        <div className="MenuList">
          {SelectedMenu.subMenu.map((item, index) => {
            return item.subMenu === undefined ? (
              <NavTextButton key={index} index={index} to={item.path} name={item.name} />
            ) : (
              <NavGroupButton key={index} index={index} name={item.name} subMenu={item.subMenu} />
            );
          })}
        </div>
      </div>
      <div className="Right">
        <Outlet />
      </div>
    </div>
  );
}
