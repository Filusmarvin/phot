import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import SaskuePic from "./Naruto/Sasuke_normal.png"


class Saskue extends Component {

  render() {
    return (
        <div className="goku">
          <img src={SaskuePic} alt="Images" height="800" width="800"/>
        </div>
    );
  }
}

export default Saskue;