import React, {useState, useEffect} from "react";
import "react-datepicker/dist/react-datepicker.css";
import "./App.css";
import axios from "axios";
import Header from "./components/header";
import Apod from "./components/apod";
import TodaysPic from "./components/todayspic";
import Pickapic from "./components/pickapic";

function App() {
const [pic, setPic] = useState("assets/loading.jpg"); //one APOD photo at a time, pic === API data
const [visible, setVisible] = useState(false); //for hide/show explanation button
const date = new Date();
const [pickedDate, setDate] = useState(`2011-11-08`) //for random date `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`
const [startDate, setStartDate] = useState(new Date());

const settingVisible = (input) => {
  setVisible(input);
}

const pickDate = (date) =>{
  setDate(`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`);
  setStartDate(date);
}

const randomDate = () => {
  let currentYear = new Date().getFullYear();
  let year = Math.floor(Math.random() * (currentYear + 1 - 1995) + 1995)
  let month = pickMonth() + 1;
  let date = pickDate();
  function pickDate() {
    let months31 = [0, 2, 4, 6, 7, 9, 11];
    let months30 = [3, 5, 8, 10];
    if (months31.includes(month)) {
      return Math.floor(Math.random() * 32);
    }
    else if (months30.includes(month)) {
      return Math.floor(Math.random() * 31);
    }
    else if (year % 4 === 0) {
      return Math.floor(Math.random() * 30);
    }
    else return Math.floor(Math.random() * 29);
  }

  function pickMonth() {
    if (year === 1995) {
      return Math.floor(Math.random() * (12 - 5) + 5);
    }
    else return Math.floor(Math.random() * 12);
  }
  setDate(`${year}-${month}-${date}`);
}

useEffect(() => {
  const fetchData = () => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=l2DCf4qG8bTbWjrmfyqXz4FpyFkiREfaZbkmzZj5&date=${pickedDate}`)
      .then(res => {
        if (!res.data.url) {
          res.data.url = "assets/noapod.jpg";
        }
        setPic(res.data);
      })
      .catch(err => {
        setPic({url: "assets/noapod.jpg"});
      })
  }
  fetchData();
  
}, [pickedDate]);
  return (
    <div className="App">
      <Header 
        date={pic.date}
      />
      <Apod 
        imgUrl={pic.url}
        title={pic.title} 
      />
      <TodaysPic 
        author={pic.copyright}
        title={pic.title}
        explanation={pic.explanation}
        visible={visible}
        settingVisible={settingVisible}
      />
      <Pickapic
        pickDate={pickDate}
        lucky={randomDate}
        startDate={startDate}
      />
    </div>
  );
}

export default App;
