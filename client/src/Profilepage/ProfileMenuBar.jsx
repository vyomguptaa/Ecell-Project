import React, { useState } from "react";
import { Link } from "react-router-dom";

function ProfileMenuBar() {
  const [leftPosition, setleftPosition] = useState("1.3%");
  const [widthStyle, setWidthStyle] = useState("14%");
  const currTitleButtonStyle = {
    position: "absolute",
    width: `${widthStyle}`,
    height: "12.31px",
    left: `${leftPosition}`,
    bottom: "0px",
    background: "#219ebc",
    borderRadius: "6.15385px",
  };

  return (
    <div className="profileMenuBar__mainDiv">
      <Link
        className="menu__titles"
        to="/ProfilePage"
        onClick={() => {
          setleftPosition("1.3%");
          setWidthStyle("14%");
        }}
      >
        Overview
      </Link>
      <div style={currTitleButtonStyle} className="current__menu--tile"></div>
      <Link
        className="menu__titles"
        to="/ProfilePage"
        onClick={() => {
          setleftPosition("16%");
          setWidthStyle("12%");
        }}
      >
        Posts
      </Link>
      <Link
        className="menu__titles"
        to="/ProfilePage"
        onClick={() => {
          setleftPosition("28%");
          setWidthStyle("17.5%");
        }}
      >
        Comments
      </Link>
      <Link
        className="menu__titles"
        to="/ProfilePage"
        onClick={() => {
          setleftPosition("46.5%");
          setWidthStyle("12%");
        }}
      >
        Saved
      </Link>
    </div>
  );
}

export default ProfileMenuBar;
