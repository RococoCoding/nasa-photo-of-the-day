import React, {useState} from "react";
import "./todayspic.css";

const TodaysPic = (props) => {
  function hideText() {
    return props.visible ? "Hide":"Show";
  }
  function hideClass() {
    return props.visible ? "": "hide";
  }

  return (
    <div>
      <img src={props.imgUrl} />
      <div className="hide-button" onClick={()=>props.settingVisible(!props.visible)}>{hideText()} Explanation</div>
      <div className={`explanation ${hideClass()}`}>{props.explanation}</div>
    </div>
  )
}

export default TodaysPic;