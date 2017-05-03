import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import data from "./data.json"

class GokuPic extends Component {
	constructor() {
  	data.forEach( obj => {
  		obj.album.forEach( photo =>{
  			let goodPath = require(photo.picture)
  			photo.goodPath = goodPath;
  			})
    })

    super()
    this.state = {data}
  }

  render(index) {
  	const albumId = this.props.match.params.albumId
  		const picture = data[albumId]
  		console.log(picture)
    return (
        <div className="goku">
          <Link to={`/album/${albumId}/pic/${index}`} ><img src="" alt="Images" height="800" width="800"/></Link>
        </div>
    );
  }
}

export default GokuPic;