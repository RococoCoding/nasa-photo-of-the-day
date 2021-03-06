import React from "react";
import "./pickapic.css"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Pickapic = (props) => {
  const {pickDate, lucky, startDate} = props;
  return (
  <div>
    <p>Pick a date!</p>
    <DatePicker selected={startDate} onChange={date => pickDate(date)}/>
    <p>Or</p>
    <div className="lucky" onClick={()=>lucky()}>I'm feeling lucky!</div>
  </div>
  )
}

export default Pickapic;