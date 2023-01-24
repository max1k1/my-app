import React from "react";
import { NavLink } from "react-router-dom";

const DialogItem = ({ id, userName }) => {
    return (
      <div >
        <NavLink to={"/dialogs/" + id}>{userName}</NavLink>
      </div>
    );
  };

export default DialogItem;