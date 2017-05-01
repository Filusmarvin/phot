import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './hover.css';
import Goku from "./DBZ/Goku.jpg"
import Naruto from "./Naruto/Naruto.png"
import OnePiece from "./OnePiece/Mainpic.jpg"


class Home extends Component{
	constructor () {
    super();
    this.state = {
      picture: [Goku, Naruto , OnePiece, ]
    }
  }
  // 	addTodo (words){
  //   let newPic = {picture:words, complete: false }
  //   let newPicArray = this.state.picure.concat(newPic)
  //   this.setState({
  //     picture:newPicArray
  //   })
  // }

	album(index) {
		console.log(index)
	
	}
	render () {
		return (
			<div className="headerContainer">
				<div>
					<header className="title"> My Album </ header>
				</div>
				<section>
					<div className="albumset set-one" >
					{this.state.picture.map((picture,index) =>{
						return(
							<div className="album album-{index}" onClick={this.album.bind(this,index)} key={index}>
							<Link to="/DBZ"> <img src={picture} alt="Images" height="400" width="400" /> </Link>
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
