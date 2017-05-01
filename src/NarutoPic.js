import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import NarutoPics from "./Naruto/Naruto.png"


class NarutoPic extends Component {

  render() {
    return (
        <div className="goku">
          <img src={NarutoPics} alt="Images" height="800" width="800"/>
        </div>
    );
  }
}

export default NarutoPic;