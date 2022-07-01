import React from 'react';
import '../Templates.css';
export default function InfoPanel({ ...props }) {
  return (
    <div className="InfoPanel">
      <div className={'IconContainer ' + props.Color}>{props.Icon}</div>
      <div className="Detail">
        <div className="Title">{props.Title}</div>
        <div className="Description">{props.Desc}</div>
      </div>
    </div>
  );
}
