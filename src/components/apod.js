import React from "react";
import "./apod.css";

const Apod = (props) => {
  const {imgUrl, title} = props;
  if (imgUrl) {
    if (imgUrl.includes("youtube")) {
    return <iframe src='https://www.youtube.com/embed/E7wJTI-1dvQ'
      frameborder='0'
      allow='autoplay; encrypted-media'
      allowfullscreen
      title='video'
    />
    }
  }
  return <img src={imgUrl} alt={title}/>
}

export default Apod;