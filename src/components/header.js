import React from "react";
import "./header.css";

const Header = (props) => {
  const {date} = props;
  return (
    <div className="header">
      <p>NASA Photo of the Day</p>
      <p>{date}</p>
    </div>
  );
};

export default Header;