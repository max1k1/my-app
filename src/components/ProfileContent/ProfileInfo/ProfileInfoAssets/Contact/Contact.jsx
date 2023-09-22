import { React } from "react";
import { NavLink } from "react-router-dom";

const Contact = ({ contactValue, contactLogo }) => {
  if (!!contactValue) {
    return (
      <div>
        <NavLink to={contactValue}>
          {<img src={contactLogo} alt="Icon" />}
        </NavLink>
      </div>
    );
  }
  return;
};

export default Contact;
