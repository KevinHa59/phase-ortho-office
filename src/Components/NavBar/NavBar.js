import React, { useEffect, useLayoutEffect, useState } from 'react';

import './NavBar.css';
import { Menu } from '../../Data/Menu';
import NavIconButton from '../Templates/NavButton/NavIconButton';
import NavIconLoginButton from '../Templates/NavButton/NavIconLoginButton';
import NavIconLogoutButton from '../Templates/NavButton/NavIconLogoutButton';
import Logo from '../../Images/Logo.jpg';
import { MdLogin, MdLogout, MdAccountCircle } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';
import { setLogin } from '../../Redux/actions/User';
import { setMenu } from '../../Redux/actions/Menu';
export default function NavBar() {
  const User = useSelector((state) => state.User);
  const dispatch = useDispatch();
  const url = window.location.pathname.split('/')[1];
  const [MenuIndex, SetMenuIndex] = useState(Menu.findIndex((item) => item.path.split('/')[1] === url));

  useLayoutEffect(() => {
    const role = localStorage.getItem('role');
    if (role) {
      dispatch(setLogin(role));
    }
  }, []);

  const MenuData = Menu;
  return (
    <div className="NavBar">
      <div className="Logo">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="MenuLinkContainer">
        <div className="NavLinkContainer">
          {MenuData.map((item, index) => {
            return index < MenuData.length - 1 ? (
              <NavIconButton
                key={index}
                index={index}
                isActive={MenuIndex === index ? 'Active' : ''}
                to={item.path}
                name={item.name}
                subMenu={item}
                icon={item.icon}
                userRole={User.userInfo.role}
                requireRoles={item.roles}
              />
            ) : null;
          })}
        </div>
        <div className="AccountContainer">
          {User.isAuthenticated ? (
            <>
              <NavIconLoginButton
                isActive={url === 'auth' ? 'Active' : ''}
                to="/auth/user/overview"
                name="Account"
                icon={<MdAccountCircle className="Icon" />}
                onClick={() => dispatch(setMenu(Menu[Menu.length - 1]))}
              />
              <NavIconLogoutButton name="Logout" icon={<MdLogout className="Icon" />} />
            </>
          ) : (
            <NavIconLoginButton isActive={url === '/auth/login' ? 'Active' : ''} to="/auth/login" icon={<MdLogin className="Icon" />} />
          )}
        </div>
      </div>
    </div>
  );
}
