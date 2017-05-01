import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Trunks from "./DBZ/trunks.jpg"


class TrunksPic extends Component {

  render() {
    return (
        <div className="goku">
          <img src={Trunks} alt="Images" height="800" width="800"/>
        </div>
    );
  }
}

export default TrunksPic;