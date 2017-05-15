import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css';
import './Home.css';
import './DBZ.css';
import './Footer.css';
import './hover.css';



import DBZ from './DBZ.js';
import Home from './Home.js';
import Picture from './Picture.js'
import Footer from './Footer.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <nav className="top-nav">
           <Link to="/">Home</Link>
           <Link to="/album/0">DBZ</Link>
           <Link to="/album/1">Naruto</Link>
           <Link to="/album/2">One Piece</Link>
           <Link to="/album/3">FairyTail</Link>
           <Link to="/album/4">Simpsons</Link>
           <Link to="/album/5">FairyTail</Link>
          </nav>
          <Route exact path="/" component={Home} />
          <Route exact path="/album/:albumId" component={DBZ} />
          <Route exact path="/album/:albumId/picture/:index" component={Picture} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
