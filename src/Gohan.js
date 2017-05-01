import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Gohan from "./DBZ/SSJ2_Gohan.jpg"


class GohanPic extends Component {

  render() {
    return (
        <div className="goku">
          <img src={Gohan} alt="Images" height="800" width="800"/>
        </div>
    );
  }
}

export default GohanPic;