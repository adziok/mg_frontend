import React from 'react';

import './Header.scss';

function Header({ children }: any) {
	return (
		<div className="header">
			<h1 className="title">Music Guesser</h1>
			{children}
		</div>
	);
}

export default Header;
