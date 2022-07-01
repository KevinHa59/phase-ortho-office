import React from "react";
import "../Templates.css";
import { Link } from "react-router-dom";
import { setMenu } from "../../../Redux/actions/Menu";
import { useDispatch } from "react-redux";
import { Button } from "@mui/material";
const NavIconButton = (props) => {
  const dispatch = useDispatch();

  function NavButtonClickHandler(event) {
    const NavButtons = document.querySelectorAll(".NavButton");
    NavButtons.forEach((item) => {
      item.classList.remove("Active");
      item.querySelector(".Icon").classList.remove("Active");
    });
    event.currentTarget.classList.add("Active");
    event.currentTarget.querySelector(".Icon").classList.add("Active");
  }
  return (
    <Link
      key={props.index}
      to={props.to}
      onClick={() => {
        dispatch(setMenu(props.subMenu));
      }}
    >
      <Button variant="text" className="NavButton" onClick={(event) => NavButtonClickHandler(event)}>
        {props.icon}
      </Button>
    </Link>
  );
};

export default NavIconButton;
