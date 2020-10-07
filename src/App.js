import React, {useState, useEffect} from "react";
import "./App.css";
import Header from "./components/header";
import TodaysPic from "./components/todayspic";
import axios from "axios";

function App() {
const [pic, setPic] = useState("assets/mathew-schwartz-7YiZKj9A3DM-unsplash.jpg");
const [visible, setVisible] = useState(false);

const settingVisible = (input) => {
  console.log(input)
  setVisible(input);
}

useEffect(() => {
  let date = new Date();
  const fetchData = () => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`)
      .then(res => setPic(res.data));
  }
  fetchData();
}, []);

  return (
    <div className="App">
      <Header />
      <TodaysPic 
        imgUrl={pic.url}
        explanation={pic.explanation}
        visible={visible}
        settingVisible={settingVisible}
      />
    </div>
  );
}

export default App;
