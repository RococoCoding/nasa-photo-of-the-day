import React, {useState} from "react";
import "./todayspic.css";
import Pickapic from "./pickapic";

const TodaysPic = (props) => {
  const {imgUrl, author, title, explanation, visible, settingVisible, lucky} = props;

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
      <img src={imgUrl} alt={title}/>
      <p className="title">{title}</p>
      <p className="author">{isAuthor()}</p>
      <Pickapic
        lucky={lucky}
      />
      <div className="hide-button" onClick={()=>settingVisible(!visible)}>{hideText()} Photographer's Explanation</div>
      <p className={`explanation ${hideClass()}`}>{explanation}</p>
    </div>
  )
}

export default TodaysPic;