import React, { useState } from "react";
import { Link } from "react-router-dom";

function ProfileMenuBar() {
  const [leftPosition, setleftPosition] = useState("1.2%");
  const [widthStyle, setWidthStyle] = useState("13.5%");
  const currTitleButtonStyle = {
    position: "absolute",
    width: `${widthStyle}`,
    height: "7px",
    left: `${leftPosition}`,
    bottom: "0px",
    background: "#219ebc",
    borderRadius: "6.15385px",
  };

  return (
    <div className="profileMenuBar__mainDiv">
      <Link
        className="menu__titles"
        to="/ProfilePage/overview"
        onClick={() => {
          setleftPosition("1.2%");
          setWidthStyle("13.5%");
        }}
      >
        Overview
      </Link>
      <div style={currTitleButtonStyle} className="current__menu--tile"></div>
      <Link
        className="menu__titles"
        to="/ProfilePage/mypost"
        onClick={() => {
          setleftPosition("16%");
          setWidthStyle("9.8%");
        }}
      >
        Posts
      </Link>
      <Link
        className="menu__titles"
        to="/ProfilePage"
        onClick={() => {
          setleftPosition("27.2%");
          setWidthStyle("16.2%");
        }}
      >
        Comments
      </Link>
      <Link
        className="menu__titles"
        to="/ProfilePage"
        onClick={() => {
          setleftPosition("45%");
          setWidthStyle("10.2%");
        }}
      >
        Saved
      </Link>
      <Link
        className="menu__titles"
        to="/ProfilePage"
        onClick={() => {
          setleftPosition("57%");
          setWidthStyle("24.8%");
        }}
      >
        Connect Requests
      </Link>
    </div>
  );
}

export default ProfileMenuBar;
