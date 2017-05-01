import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import SakuraPic from "./Naruto/Sakura_normal.png"


class Sakura extends Component {

  render() {
    return (
        <div className="goku">
          <img src={SakuraPic} alt="Images" height="800" width="800"/>
        </div>
    );
  }
}

export default Sakura;