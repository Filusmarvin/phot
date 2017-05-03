import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './hover.css';
import data from "./data.json"


class Home extends Component{
	constructor () {
    super();
    data.forEach( obj => {
    	let goodPath = require(obj.picture);
    	obj.goodPath = goodPath;
    })

    this.state = {
    	data
    }
  }
	
	render () {
		return (
			<div className="headerContainer">
				<div>
					<header className="title"> My Albums </ header>
				</div>
				<section>
					<div className="albumset set-one" >
					{this.state.data.map((data,index) =>{
						return(
							<div className="album album-{index}"  key={index}>
							<Link to={data.path}> <img src={data.goodPath} alt="Images" height="400" width="400" /> </Link>
							</div>
							)
						} 
					)}
					</div>
					<div className="albumset set-two" >
					{this.state.data.map((data,index) =>{
						return(
							<div className="album album-{index}"  key={index}>
							<Link to={data.path}> <img src={data.goodPath} alt="Images" height="400" width="400" /> </Link>
							</div>
							)
						} 
					)}
					</div>
				</section>
			</div>
		)
	}
}

export default Home
