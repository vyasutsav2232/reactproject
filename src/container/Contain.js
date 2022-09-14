import "./Contain.css";
import img from '../img/foodimg.webp';
import img2 from "../img/R.jpg"
import img3 from "../img/fries.png"
// import img from '../img/foodimg.webp';
import React from 'react'

const Contain = () => {
  return (
    <div className="contain">
      <div className="inner_container">
        <div className="box1"><img className="img1" src={img}></img></div>
        <div className="box1"><img className="img1" src={img2}></img></div>
        <div className="box1"><img className="img1" src={img3}></img></div>
        <div className="box1"><img className="img1" src={img2}></img></div>
      </div>
    </div>

  )
}

export default Contain