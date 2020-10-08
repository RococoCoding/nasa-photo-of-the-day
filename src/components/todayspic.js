import React from "react";
import "./todayspic.css";

const TodaysPic = (props) => {
  const {author, title, explanation, visible, settingVisible} = props;

  function hideText() {
    return visible ? "Hide":"Show";
  }
  function hideClass() {
    return visible ? "": "hide";
  }
  function isAuthor() {
    return author ? `By ${author}`:"No copyright information available";
  }


  return (
    <div>
      <p className="title">{title}</p>
      <p className="author">{isAuthor()}</p>
      <div className="hide-button" onClick={()=>settingVisible(!visible)}>{hideText()} Photographer's Explanation</div>
      <p className={`explanation ${hideClass()}`}>{explanation}</p>
    </div>
  )
}

export default TodaysPic;