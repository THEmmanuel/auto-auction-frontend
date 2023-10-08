import React from "react";
import style from './NavBar.module.css';

const NavBar = () => {
	return (
		<nav>
			logo

			<div>
				<span>home</span>
				<span>listings</span>
				<span>history</span>
			</div>

			<div>
				<button>sell a car</button>
				<button>connect wallet</button>
			</div>
		</nav>
	)
}

export default NavBar;