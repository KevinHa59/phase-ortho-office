import React from 'react';
import './ChangePassword.css';
import BlankPanel from '../../../../../Templates/Panel/BlankPanel';
import { TextField, Button } from '@mui/material';
import ButtonItem from '../../../../../Templates/Controller/ButtonItem';
export default function ChangePassword() {
  return (
    <div className="MainBodyContainer">
      <div className="ChangePasswordContainer">
        <BlankPanel className={'ChangePasswordForm'}>
          <div className="Header">Change Password</div>
          <div className="Input">
            <TextField label="Current Password" type={'password'} />
            <TextField label="New Password" type={'password'} />
            <TextField label="Confirm New Password" type={'password'} />
          </div>
          <div className="Controller">
            <ButtonItem className={'Button'}>Change</ButtonItem>
          </div>
        </BlankPanel>
      </div>
    </div>
  );
}
