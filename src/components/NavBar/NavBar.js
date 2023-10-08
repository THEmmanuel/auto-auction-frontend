import React from "react";
import style from './NavBar.module.css';
import logo from '../../assets/carIcon.svg';

const NavBar = () => {
	return (
		<nav>
			<img src={logo} alt="" />

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