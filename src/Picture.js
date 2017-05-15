import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './hover.css';
import data from './data.json'


class Picture extends Component {

  constructor() {
  	data.forEach( obj => {
  		obj.album.forEach( pic =>{
  			let goodPath = require(pic.picture)
  			pic.goodPath = goodPath;
  			})
    })

    super()
    this.state = {data}
  }

  render() {
    const albumId = this.props.match.params.albumId
    const picId = this.props.match.params.index
    const dataSet = data[albumId].album[picId].goodPath
    return (
      <div>
        <Link to={`/album/${albumId}`} className="back"> Back to Album </Link>
        <img src={dataSet} width="1000px"alt="Something" />
      </div>

    );
  }
}

export default Picture;
