import React from "react";
import { Link } from 'react-router-dom'

import style from './NavBar.module.css';
import logo from '../../assets/carIcon.svg';
import PrimaryButton from "../PrimaryButton/PrimaryButton";
// import SecondaryButton from "../SecondaryButton/SecondaryButton";
import { ConnectButton } from '@rainbow-me/rainbowkit';

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
					<Link to='/home'>
						<span>Home</span>
					</Link>

					<Link to='/listings'>
						<span>Listings</span>
					</Link>

					<Link to='/history'>
						<span>History</span>
					</Link>
				</div>
			</div>

			<div className={style.ButtonsContainer}>
				<Link to='/post'>
					<PrimaryButton
						text='Sell a car'
						click={() => null}
						width={100}
					/>
				</Link>

				{/* <SecondaryButton
					text='Connect Wallet'
					click={() => null}
					width={150}
				/> */}
				<ConnectButton />
			</div>
		</nav>
	)
}

export default NavBar;