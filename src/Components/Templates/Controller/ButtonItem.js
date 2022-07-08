import React from 'react';
import { Button } from '@mui/material';
import '../Templates.css';
const ButtonItem = (props) => {
  return props.disabled ? (
    <Button variant="text" className={'ButtonItem Disabled ' + props.className} disabled>
      {props.children}
    </Button>
  ) : (
    <Button variant="text" className={'ButtonItem ' + props.className} onClick={props.onClick}>
      {props.children}
    </Button>
  );
};

export default ButtonItem;
