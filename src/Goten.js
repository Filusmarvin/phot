import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Goten from "./DBZ/Goten.jpeg"


class GotenPic extends Component {

  render() {
    return (
        <div className="goku">
          <img src={Goten} alt="Images" height="800" width="800"/>
        </div>
    );
  }
}

export default GotenPic;