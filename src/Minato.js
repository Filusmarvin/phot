import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import MinatoPic from "./Naruto/Minato_normal.jpeg"


class Minato extends Component {

  render() {
    return (
        <div className="goku">
          <img src={MinatoPic} alt="Images" height="800" width="800"/>
        </div>
    );
  }
}

export default Minato;