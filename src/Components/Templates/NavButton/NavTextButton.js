import React from "react";
import "../Templates.css";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
const NavTextButton = (props) => {
  function NavButtonClickHandler(event) {
    const NavTextButtons = document.querySelectorAll(".NavTextButton");
    NavTextButtons.forEach((item) => {
      item.classList.remove("Active");
    });
    event.currentTarget.classList.add("Active");
  }
  return (
    <Link key={props.index} to={props.to} className="LinkTextButton">
      <Button
        variant="text"
        className={props.index === 0 ? "NavTextButton Active" : "NavTextButton"}
        onClick={(event) => {
          NavButtonClickHandler(event);
        }}
      >
        {props.name}
      </Button>
    </Link>
  );
};

export default NavTextButton;
