import React from "react";
import style from './NavBar.module.css';
import logo from '../../assets/carIcon.svg';
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import SecondaryButton from "../SecondaryButton/SecondaryButton";

const NavBar = () => {
	return (
		<nav className={style.NavBar}>
			<img
				src={logo}
				alt=""
				className={style.Logo}
			/>

			<div className={style.LinksWrapper}>
				<div className={style.LinksContainer}>
					<span>Home</span>
					<span>Listings</span>
					<span>History</span>
				</div>
			</div>

			<div className={style.ButtonsContainer}>
				<PrimaryButton
					text='Sell a car'
					click={() => null}
					width={100}
				/>

				<SecondaryButton
					text='Connect Wallet'
					click={() => null}
					width={150}
				/>
			</div>
		</nav>
	)
}

export default NavBar;