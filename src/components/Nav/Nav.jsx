import React from 'react';

// You're likely missing some imports...
import {
	BrowserRouter as Router,
	Link,
	Route,
	Switch
} from 'react-router-dom';
import About from '../About/About';
import Home from '../Home/Home';

import Styles from './styles';

// Don't forget to import your components

const Nav = () => {
	return (
		<Router>
			<Styles.Nav>
				<ul>
					<li>
						{/* Your link to home here */}
						<Link to='/'>
							Home
            			</Link>

					</li>
					<li>
						<Link to='/about'>
							About
            			</Link>
						{/* Your link to about here */}
					</li>
				</ul>
			</Styles.Nav>

			<Switch>
				<Route exact path="/" >
					<Home />
				</Route>
				<Route exact path="/about">
					<About />
				</Route>
			</Switch>
		</Router>
	);
}

export default Nav;