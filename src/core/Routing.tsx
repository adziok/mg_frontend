import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Core from './Core';

function Routing() {
	return (
		<Router>
			<Core />
		</Router>
	);
}

export default Routing;
