import React from 'react';
import style from './CarStats.module.css';

const CarStats = props => {
	return (
		<div className={style.CarStatsWrapper}>
			<div className={style.CarStatInfoWrapper}>
				<div className={style.CarStatInfo}>
					<span className={style.CarStatText}>Make</span>
					<span className={style.CarStat}>Ferrari</span>
				</div>

				<div className={style.CarStatInfo}>
					<span className={style.CarStatText}>Model</span>
					<span className={style.CarStat}>488 Pista</span>
				</div>

				<div className={style.CarStatInfo}>
					<span className={style.CarStatText}>Mileage</span>
					<span className={style.CarStat}>12,000km</span>
				</div>

				<div className={style.CarStatInfo}>
					<span className={style.CarStatText}>VIN</span>
					<span className={style.CarStat}>JN1CZ24A9LX004371</span>
				</div>

				<div className={style.CarStatInfo}>
					<span className={style.CarStatText}>Engine</span>
					<span className={style.CarStat}>
						3.9L Turbocharged V8
					</span>
				</div>

				<div className={style.CarStatInfo}>
					<span className={style.CarStatText}>Transmission</span>
					<span className={style.CarStat}>Automatic (7-Speed)</span>
				</div>

				<div className={style.CarStatInfo}>
					<span className={style.CarStatText}>Body Style</span>
					<span className={style.CarStat}>Coupe</span>
				</div>

				<div className={style.CarStatInfo}>
					<span className={style.CarStatText}>Drivetrain</span>
					<span className={style.CarStat}>Rear-wheel Drive</span>
				</div>
			</div>

			<div>
				<div className={style.CarStatInfoWrapper}>
					<div className={style.CarStatInfo}>
						<span className={style.CarStatText}>
							Seller Wallet Address
						</span>
						<span className={style.CarStat}>
							0xdB055877e6c13b6A6B25aBcAA29B393777dD0a73
						</span>
					</div>

					<div className={style.CarStatInfo}>
						<span className={style.CarStatText}>NFT contract address</span>
						<span className={style.CarStat}>0xdB055877e6c13b6A6B25aBcAA29B393777dD0a73</span>
					</div>

					<div className={style.CarStatInfo}>
						<span className={style.CarStatText}>Seller Location</span>
						<span className={style.CarStat}>Redmond, WA. 22356</span>
					</div>

					<div className={style.CarStatInfo}>
						<span className={style.CarStatText}>Exterior Colour</span>
						<span className={style.CarStat}>
							Nero DS/Rosso Corsa
						</span>
					</div>

					<div className={style.CarStatInfo}>
						<span className={style.CarStatText}>
							Interior Colour
						</span>
						<span className={style.CarStat}>
							Nero
						</span>
					</div>

					<div className={style.CarStatInfo}>
						<span className={style.CarStatText}>
							Horsepower
						</span>
						<span className={style.CarStat}>
							750hp
						</span>
					</div>

					<div className={style.CarStatInfo}>
						<span className={style.CarStatText}>
							Seller Type
						</span>
						<span className={style.CarStat}>
							Owner
						</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CarStats;