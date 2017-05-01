import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './hover.css';

class Footer extends Component{
	render () {
		return (
			<Route>
				<div className="body">
					<section>
						<nav className="bottom-footer">
							 <Link className="about header" to="#">  </Link> 
							 <Link className="about main" to="#">  </Link> 
							 <Link className="about footer" to="#"> </Link> 
						</nav>
					</section>
				</div>
			</Route>
		)
	}
}

export default Footer