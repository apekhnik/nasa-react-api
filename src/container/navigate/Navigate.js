import React, { useState } from "react";
import "./Navigate.css";
import { NavLink } from "react-router-dom";
import classnames from "classnames";
import Button from "../../component/Button/Button";
const Navigate = () => {
  const [navigate, setNavigate] = useState(false);
  const vision = navigate ? "nav-show" : "nav-hide";
  const classname = classnames("navigate", vision);
  return (
    <div className={classname}>
      <NavLink to={process.env.PUBLIC_URL + "/"} className="navigate-item home">
        HOME
      </NavLink>

      <NavLink to={process.env.PUBLIC_URL + "/APOD"} className="navigate-item">
        Astronimic Picture of Day
      </NavLink>

      <NavLink
        to={process.env.PUBLIC_URL + "/media-search"}
        className="navigate-item"
      >
        NASA media search
      </NavLink>

      <Button
        text={navigate ? "C" : "O"}
        onClick={() => setNavigate(!navigate)}
        className="nav-btn"
      />
    </div>
  );
};
export default Navigate;
