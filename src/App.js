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
const [pickedDate, setDate] = useState(`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`) //yyyy-mm-dd format for API url
const [startDate, setStartDate] = useState(new Date()); //for datepicker

const settingVisible = (input) => {
  setVisible(input);
}

const pickDate = (date) =>{
  setDate(`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`);
  setStartDate(date);
}

const randomDate = () => {
  let msRandom = Math.random()* (Date.now() - 803270449000) + 803270449000; //gets random number in ms interval between now and june 1995 when apod photos start
  let randomDate = new Date(msRandom); //saves ms time as readable time

  setDate(`${randomDate.getFullYear()}-${randomDate.getMonth()}-${randomDate.getDate()}`); // converts to yyyy-mm-dd for api url
}

useEffect(() => {
  const fetchData = () => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=l2DCf4qG8bTbWjrmfyqXz4FpyFkiREfaZbkmzZj5&date=${pickedDate}`)
      .then(res => {
        if (!res.data.url) { //if no url provided, load no image, try again photo
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
