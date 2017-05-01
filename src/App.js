import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css';
import './Home.css';
import './DBZ.css';
import './Footer.css';
import './hover.css';
import DBZ from './DBZ.js';
import Home from './Home.js';
import Footer from './Footer.js';
import GokuPic from './Goku.js';  import VegetaPic from './Vegeta.js';  import GohanPic from './Gohan.js';  import TrunksPic from './Trunks.js';  import DragonPic from './Dragon.js';  import GotenPic from './Goten.js';
import Narutos from "./Naruto.js"; import NarutoPic from './NarutoPic.js'; import Sasuke from "./Sasuke.js"; import Sakura from'./Sakura.js'; import Kakashi from './Kakashi.js'; import Minato from './Minato.js'; import Hokage from './Hokage.js';
import OnePiece from "./OnePiece.js"; import Luffy from './OnePiece/luffy.jpg';  import Zoro from './OnePiece/Zoro.jpg';  import Sanji from './OnePiece/Sanji.jpg'; import Usopp from './OnePiece/Usopp.png';  import Nico from './OnePiece/Nico.jpg'; 
 import Nami from './OnePiece/Nami.jpg';                

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <nav className="top-nav">
           <Link to="/Home">Home</Link> 
           <Link to="/DBZ">DBZ</Link>
           <Link to="/Naruto">Naruto</Link>
           <Link to="/OnePiece">OnePiece</Link>
          </nav>
          <Route exact path="/Home" component={Home} />
          <Route path="/DBZ" component={DBZ} />
          <Route path="/GokuPic" component={GokuPic} />
          <Route path="/VegetaPic" component={VegetaPic} />
          <Route path="/GohanPic" component={GohanPic} />
          <Route path="/TrunksPic" component={TrunksPic} />
          <Route path="/DragonPic" component={DragonPic} />
          <Route path="/GotenPic" component={GotenPic} />


          <Route path="/Naruto" component={Narutos} />
          <Route path="/NarutoPic" component={NarutoPic} />
          <Route path="/Sasuke" component={Sasuke} />
          <Route path="/Sakura" component={Sakura} />
          <Route path="/Minato" component={Minato} />
          <Route path="/Kakashi" component={Kakashi} />
          <Route path="/Hokage" component={Hokage} />

          <Route path="/OnePiece" component={OnePiece} />
          <Route path="/Luffy" component={Luffy} />
          <Route path="/Zoro" component={Zoro} />
          <Route path="/Sanji" component={Sanji} />
          <Route path="/Usopp" component={Usopp} />
          <Route path="/Nico" component={Nico} />
          <Route path="/Nami" component={Nami} /> 
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
