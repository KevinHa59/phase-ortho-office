import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './PageRouter.css';
import { Link, Outlet } from 'react-router-dom';
import { Menu } from '../../Data/Menu';
import NavTextButton from '../Templates/NavButton/NavTextButton';
import NavGroupButton from '../Templates/NavButton/NavGroupButton';
import { setMenu } from '../../Redux/actions/Menu';
import { useDispatch } from 'react-redux';
export default function PageRouter() {
  const dispatch = useDispatch();
  const menu = useSelector((State) => State.Menu);
  const user = useSelector((State) => State.User);
  const [SelectedMenu, setSelectedMenu] = useState(Menu[0]);
  const urlSub = window.location.pathname;
  const urlSubIndex =
    // if user enter url without using menu to go to page, then set selected menu to first menu
    useLayoutEffect(() => {
      const domain = 'http://localhost:3000';
      const url = window.location.href.replace(domain, '');

      Menu.forEach((item, index) => {
        if (item.path === url) {
          dispatch(setMenu(Menu[index]));
        } else {
          item.subMenu.forEach((subItem) => {
            if (subItem.path === url) {
              dispatch(setMenu(Menu[index]));
            } else {
              subItem.subMenu?.forEach((subSubItem) => {
                if (subSubItem.path === url) {
                  dispatch(setMenu(Menu[index]));
                }
              });
            }
          });
        }
      });
    }, []);

  useEffect(() => {
    menu.length !== 0 ? setSelectedMenu(menu) : setSelectedMenu(Menu[0]);
    const NavTextButtons = document.querySelectorAll('.NavTextButton');
    const subUrlIndex = SelectedMenu.subMenu.findIndex((item) => item.path === urlSub);
    NavTextButtons.forEach((item, index) => {
      if (index === subUrlIndex) {
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
            return item.roles.includes(user.userInfo.role) ? (
              item.subMenu === undefined ? (
                <NavTextButton key={index} isActive={item.path === urlSub ? 'Active' : ''} index={index} to={item.path} name={item.name} />
              ) : (
                <NavGroupButton key={index} index={index} name={item.name} subMenu={item.subMenu} path={item.path} />
              )
            ) : null;
          })}
        </div>
      </div>
      <div className="Right">
        <Outlet />
      </div>
    </div>
  );
}
