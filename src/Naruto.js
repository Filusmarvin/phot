import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './hover.css';
import Sasuke from './Naruto/Sasuke_normal.png'
import Kakashi from './Naruto/Kakashi_normal.jpg'
import Naruto from './Naruto/Naruto_normal.jpeg'
import Hokage from './Naruto/Hokage_sage.png'
import Minato from './Naruto/Minato_normal.jpeg'
import Sakura from './Naruto/Sakura_normal.png'
class Narutos extends Component {

	constructor() {
    super()
    this.state = {
      Narutouno: [Naruto, Sasuke, Sakura ],
      Narutodos: [Minato, Kakashi , Hokage],
      linkUno:'',
    }
  }

  photoSource( index ){
  	if(this.state.Narutouno[index] === this.state.Narutouno[index]){
  		this.setState({linkUno : this.state.Narutouno[index]});
  		
  	} 
  	else {
  		return "sorry"
  	}
  }

  render() {
    return (
        <div className="App">
          <div>
					<header className="albumHeader"> Naruto </header>
					<div className="container">
						<aside className="navList"> 
							<nav>
								<p className="photoAlbum"> Photo Album </p>
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
							{this.state.Narutouno.map((Narutouno,index) => {
								return (
									<div onClick={this.photoSource.bind(this,index)} className="photo boxOne hvr-grow hvr-back-pulse hvr-round-corners" key={index}>
									<Link to="/Naruto" > <img src={Narutouno} alt="Images" height="300" width="300" /> </Link>
									</div>
								)
							})}
        					</div>
        					<div className="photo-set setTwo">
        					    {this.state.Narutodos.map((Narutodos,index) => {
								return (

									<div  onClick={this.photoSource.bind(this,index)} className="photo boxOne hvr-grow hvr-back-pulse hvr-round-corners" key={index}>
									<Link to="/GokuPic"> <img src={Narutodos} alt="Images" height="300" width="300" /> </Link>
									</div>
								)
							})}
							</div>
        				</div>
        				<aside className="something">
        					<nav className="photoSelector">
        						<p className="Photos"> Photos </p>
        						<ul className="photoSelector-ul">
        							<li className="photoLinks link-one hvr-buzz"> <Link to="/NarutoPic" className="photo-selector photo-one"> Photo 1 </Link> </li>
        							<li className="photoLinks link-two hvr-buzz"> <Link to="/Sasuke" className="photo-selector photo-two"> Photo 2 </Link> </li>
        							<li className="photoLinks link-three hvr-buzz"> <Link to="/Sakura" className="photo-selector photo-three"> Photo 3 </Link> </li>
        							<li className="photoLinks link-four hvr-buzz"> <Link to="/Minato" className="photo-selector photo-four"> Photo 4 </Link> </li>
        							<li className="photoLinks link-five hvr-buzz"> <Link to="Kakashi" className="photo-selector photo-five"> Photo 5 </Link> </li>
        							<li className="photoLinks link-six hvr-buzz"> <Link to="/Hokage" className="photo-selector photo-six"> Photo 6 </Link> </li>
        						</ul>
        					</nav>
        				</aside>
        			</div>
				</div>

        </div>
    );
  }
}

export default Narutos;