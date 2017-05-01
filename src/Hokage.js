import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import HokagePic from "./Naruto/Hokage_sage.png"


class Hokage extends Component {

  render() {
    return (
        <div className="goku">
          <img src={HokagePic} alt="Images" height="800" width="800"/>
        </div>
    );
  }
}

export default Hokage;