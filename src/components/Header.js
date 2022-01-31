import React from "react";

const Header = ({ handleToggleDarkMode}) => {
	return (
		<div className="header">
			<h1>My Notes</h1>
			<button onClick={() => handleToggleDarkMode((previousDarkMode) => !previousDarkMode)} className="seve">Toggle Mode</button>
		</div>
	)
}

export default Header;