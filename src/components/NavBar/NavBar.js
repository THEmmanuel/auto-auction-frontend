import React from "react";
import style from './NavBar.module.css';
import logo from '../../assets/carIcon.svg';
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import SecondaryButton from "../SecondaryButton/SecondaryButton";

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
				<PrimaryButton
					text='Sell a car'
					click={() => null}
					width={75}
				/>

				<SecondaryButton
					text='Connect Wallet'
					click={() => null}
					width={120}
				/>
			</div>
		</nav>
	)
}

export default NavBar;