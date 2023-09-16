import React from "react";
import { NavLink } from "react-router-dom";
import "./DialogItem.css";
const DialogItem = ({ id, userName }) => {
    return (
        <NavLink  className="dialogsUsersList" to={"/dialogs/" + id}>{userName} </NavLink>
    );
  };

export default DialogItem;