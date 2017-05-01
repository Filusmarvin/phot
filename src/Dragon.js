import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import DragonPic from "./DBZ/Dragon.jpg"


class Dragon extends Component {

  render() {
    return (
        <div className="goku">
          <img src={DragonPic} alt="Images" height="800" width="800"/>
        </div>
    );
  }
}

export default Dragon;