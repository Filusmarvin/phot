import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import data from './data.json';
import './App.css';
import './Home.css';
import './DBZ.css';
import './Footer.css';
import './hover.css';



import DBZ from './DBZ.js';
import Home from './Home.js';
import Footer from './Footer.js';
// import GokuPic from './Goku.js';  import VegetaPic from './Vegeta.js';  import GohanPic from './Gohan.js';  import TrunksPic from './Trunks.js';  import DragonPic from './Dragon.js';  import GotenPic from './Goten.js';
// import Narutos from "./Naruto.js"; import NarutoPic from './NarutoPic.js'; import Sasuke from "./Sasuke.js"; import Sakura from'./Sakura.js'; import Kakashi from './Kakashi.js'; import Minato from './Minato.js'; import Hokage from './Hokage.js';
// import OnePiece from "./OnePiece.js"; import Luffy from './OnePiece/luffy.jpg';  import Zoro from './OnePiece/Zoro.jpg';  import Sanji from './OnePiece/Sanji.jpg'; import Usopp from './OnePiece/Usopp.png';  import Nico from './OnePiece/Nico.jpg'; 
//  import Nami from './OnePiece/Nami.jpg';                

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <nav className="top-nav">
           <Link to="/home">Home</Link> 
           <Link to="/album/0">DBZ</Link>
           <Link to="/album/1">Naruto</Link>
           <Link to="/album/2">One Piece</Link>
          </nav>
          <Route exact path="/home" component={Home} />
          <Route path="/album/:albumId" component={DBZ} /> 
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
