import React from "react";
import "./todayspic.css";

const TodaysPic = (props) => {
  const {author, title, explanation, visible, settingVisible} = props;

  function hideText() { //change text of button to say hide exp/show exp
    return visible ? "Hide":"Show";
  }

  function hideClass() { //set class of exp <p> to hide
    return visible ? "": "hide";
  }

  function isAuthor() { //if no copyright info included with api data
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