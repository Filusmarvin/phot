import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Goku from "./DBZ/Goku.jpg"


class GokuPic extends Component {

  render() {
    return (
        <div className="goku">
          <img src={Goku} alt="Images" height="800" width="800"/>
        </div>
    );
  }
}

export default GokuPic;