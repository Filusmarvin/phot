import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './hover.css';
import Home from './Home.js'
import Dragon from './DBZ/Dragon.jpg'
import Goku from "./DBZ/Goku.jpg"
import Vegeta from "./DBZ/Vegeta.png"
import Gohan from "./DBZ/SSJ2_Gohan.jpg"
import Trunks from "./DBZ/trunks.jpg"
import Goten from "./DBZ/Goten.jpeg"




class DBZ extends Component{
  constructor() {
    super()
    this.state = {
      photouno: [Goku, Vegeta, Gohan],
      photodos: [Trunks, Dragon , Goten],
      linkUno : "",
    }
  }

  photoSource( index ){
  	console.log(this)
  	if(this.state.photouno[index] === this.state.photouno[index]){
  		return this.setState({linkUno : this.state.photouno[index]});
  		console.log(this.state.linkUno)
  	} 
  	else {
  		return "sorry"
  	}
  }
	render () {
		return (
				<div>
					<header className="albumHeader"> Dragon Ball Z
					 </header>
					<div className="container">
						<aside className="navList"> 
							<nav>
								<Link to="/Home"><p className="photoAlbum"> Photo Album </p> </Link>
								<ul className="photoLink"> 
									<li className="eachAlbum hidden-one hvr-bob hvr-glow"><Link to="/DBZ" > Album 1 </Link> </li>
									<li className="eachAlbum hidden-two hvr-bob hvr-glow"><Link to="/Naruto"	> Album 2 </Link></li>
									<li className="eachAlbum hidden-three hvr-bob hvr-glow"><Link to="/OnePiece"	> Album 3 </Link></li>
									<li className="eachAlbum hidden-four hvr-bob hvr-glow"><Link to="/Home"	> Album 4 </Link></li>
									<li className="eachAlbum hidden-five hvr-bob hvr-glow"><Link to="/Home"	> Album 5 </Link></li>
									<li className="eachAlbum hidden-six hvr-bob hvr-glow"><Link to="#"	> Album 6 </Link></li>
								</ul>
							</nav>
						</aside>
						<div className="allAlbums">
							<div className="photo-set setOne">
							{this.state.photouno.map((photouno,index) => {
								return (
									<div  className="photo boxOne hvr-grow hvr-back-pulse hvr-round-corners" key={index}>
									<Link  to={photouno[index]} > <img src={photouno} alt="Images" height="300" width="300" /> </Link>
									</div>
								)
							})}
        					</div>
        					<div className="photo-set setTwo">
        					    {this.state.photodos.map((photodos,index) => {
								return (

									<div onClick={this.photoSource.bind(this,index)} className="photo boxOne hvr-grow hvr-back-pulse hvr-round-corners" key={index}>
									<Link to="/DBZ/GokuPic"> <img src={photodos} alt="Images" height="300" width="300" /> </Link>
									</div>
								)
							})}
							</div>
        				</div>
        				<aside className="something">
        					<nav className="photoSelector">
        						<p className="Photos"> Photos </p>
        						<ul className="photoSelector-ul">
        							<li className="photoLinks link-one hvr-buzz"> <Link to="/GokuPic" className="photo-selector photo-one"> Photo 1 </Link> </li>
        							<li className="photoLinks link-two hvr-buzz"> <Link to="/VegetaPic" className="photo-selector photo-two"> Photo 2 </Link> </li>
        							<li className="photoLinks link-three hvr-buzz"> <Link to="/GohanPic" className="photo-selector photo-three"> Photo 3 </Link> </li>
        							<li className="photoLinks link-four hvr-buzz"> <Link to="/TrunksPic" className="photo-selector photo-four"> Photo 4 </Link> </li>
        							<li className="photoLinks link-five hvr-buzz"> <Link to="/DragonPic" className="photo-selector photo-five"> Photo 5 </Link> </li>
        							<li className="photoLinks link-six hvr-buzz"> <Link to="/GotenPic" className="photo-selector photo-six"> Photo 6 </Link> </li>
        						</ul>
        					</nav>
        				</aside>
        			</div>
				</div>
		)
	}
}
export default DBZ