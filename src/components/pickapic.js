import React from "react";
import "./pickapic.css"

const Pickapic = (props) => {
  const {lucky} = props;

  // firstdate is 1995, 6/16
  return (
  <div>
    <div className="lucky" onClick={()=>lucky}>I'm feeling Lucky!</div>
  </div>
  )
}

export default Pickapic;