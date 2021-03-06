import React from 'react';
import "./NavBar.css"
import Toggle from './Toggle';

function NavBar(props) {
	return (
		<div>
			<nav className="navbar navbar-expand-lg">
				<div className="container-fluid">

					<div className="d-flex ms-auto">
						<Toggle />
					</div>
				</div>
			</nav>
		</div>
	);
}

export default NavBar;