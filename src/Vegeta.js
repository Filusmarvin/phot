import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Vegeta from "./DBZ/Vegeta.png"


class VegetaPic extends Component {

  render() {
    return (
        <div className="goku">
          <img src={Vegeta} alt="Images" height="800" width="800"/>
        </div>
    );
  }
}

export default VegetaPic;