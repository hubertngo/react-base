import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
} from 'react-router-dom';

import MainLayout from 'src/layout/MainLayout';
import TestAuth from 'src/layout/TestAuth';
import Home from 'src/pages/Home';
import About from 'src/pages/About';
import Users from 'src/pages/Users';

export default function App() {
	return (
		<Router>
			<MainLayout>
				<Switch>
					<Route path="/about">
						<TestAuth>
							<About />
						</TestAuth>
					</Route>
					<Route path="/users">
						<TestAuth>
							<Users />
						</TestAuth>
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</MainLayout>
		</Router>
	);
}
