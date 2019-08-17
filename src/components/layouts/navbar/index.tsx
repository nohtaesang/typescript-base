import * as React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';

type OwnProps = {};

const Navbar = (props: OwnProps) => {
	return (
		<div>
			<Link to="/main">Main</Link>
			<Link to="/sub">Page</Link>
		</div>
	);
};

export default Navbar;
