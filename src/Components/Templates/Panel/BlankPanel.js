import React from 'react';
import '../Templates.css';
const BlankPanel = (props) => {
  return <div className={'BlankPanel ' + props.className}>{props.children}</div>;
};

export default BlankPanel;
