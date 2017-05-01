import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import KakashiPic from "./Naruto/Kakashi_normal.jpg"


class Kakashi extends Component {

  render() {
    return (
        <div className="goku">
          <img src={KakashiPic} alt="Images" height="800" width="800"/>
        </div>
    );
  }
}

export default Kakashi;