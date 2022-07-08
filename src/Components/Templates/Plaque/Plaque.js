import React, { Component } from 'react';
import './Plaque.css';

export function Plaque({ ...props }) {
  return (
    <div className="Plaque">
      <div className={'Box ' + props.style} />
      <div className="Plaque_Text">{props.children}</div>
      {props.level === 1 ? (
        <div className={'Level1 ' + props.style}>
          <Level1BG />
        </div>
      ) : props.level === 2 ? (
        <>
          <div className={'Level1 ' + props.style}>
            <Level1BG />
          </div>
          <div className={'Level2 ' + props.style}>
            <Level2BG />
          </div>
        </>
      ) : props.level === 3 ? (
        <div className={'Level3 ' + props.style} />
      ) : null}
    </div>
  );
}

function Level1BG() {
  return (
    <svg width="100%" height="41" viewBox="0 0 198 41" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M99 0L197.91 15.5817L160.13 40.7934L37.8703 40.7934L0.090126 15.5817L99 0Z" className="SVG" />
    </svg>
  );
}

function Level2BG() {
  return (
    <svg width="90%" height="41" viewBox="0 0 179 41" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M89.5 41L0.576219 25.4529L34.5421 0.297118L144.458 0.297127L178.424 25.4529L89.5 41Z" className="SVG" />
    </svg>
  );
}
