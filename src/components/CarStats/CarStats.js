import React from 'react';
import style from './CarStats.module.css';

const CarStats = props => {
	return (
		<div className={style.CarStatsWrapper}>
			<div className={style.CarStatInfoWrapper}>
				<div className={style.CarStatInfo}>
					<span className={style.CarStatText}>Make</span>
					<span className={style.CarStat}>{props.make}</span>
				</div>

				<div className={style.CarStatInfo}>
					<span className={style.CarStatText}>Model</span>
					<span className={style.CarStat}>{props.model}</span>
				</div>

				<div className={style.CarStatInfo}>
					<span className={style.CarStatText}>Mileage</span>
					<span className={style.CarStat}>{props.mileage}</span>
				</div>

				<div className={style.CarStatInfo}>
					<span className={style.CarStatText}>VIN</span>
					<span className={style.CarStat}>{props.VIN}</span>
				</div>

				<div className={style.CarStatInfo}>
					<span className={style.CarStatText}>Engine</span>
					<span className={style.CarStat}>
						{props.engine}
					</span>
				</div>

				<div className={style.CarStatInfo}>
					<span className={style.CarStatText}>Transmission</span>
					<span className={style.CarStat}>{props.transmission}</span>
				</div>

				<div className={style.CarStatInfo}>
					<span className={style.CarStatText}>Body Style</span>
					<span className={style.CarStat}>{props.bodyType}</span>
				</div>

				<div className={style.CarStatInfo}>
					<span className={style.CarStatText}>Drivetrain</span>
					<span className={style.CarStat}>{props.drivetrain}</span>
				</div>
			</div>

			<div>
				<div className={style.CarStatInfoWrapper}>
					<div className={style.CarStatInfo}>
						<span className={style.CarStatText}>
							Seller Wallet Address
						</span>
						<span className={style.CarStat}>
						{props.ownerWallet}
						</span>
					</div>

					<div className={style.CarStatInfo}>
						<span className={style.CarStatText}>NFT contract address</span>
						<span className={style.CarStat}>{props.nftHash || 'No NFT Minted'} </span>
					</div>

					<div className={style.CarStatInfo}>
						<span className={style.CarStatText}>Seller Location</span>
						<span className={style.CarStat}>Redmond, WA. 22356</span>
					</div>

					<div className={style.CarStatInfo}>
						<span className={style.CarStatText}>Exterior Colour</span>
						<span className={style.CarStat}>
						{props.exteriorColor}
						</span>
					</div>

					<div className={style.CarStatInfo}>
						<span className={style.CarStatText}>
							Interior Colour
						</span>
						<span className={style.CarStat}>
						{props.interiorColor}
						</span>
					</div>

					<div className={style.CarStatInfo}>
						<span className={style.CarStatText}>
							Horsepower
						</span>
						<span className={style.CarStat}>
						{props.horsepower} hp
						</span>
					</div>

					<div className={style.CarStatInfo}>
						<span className={style.CarStatText}>
							Seller Type
						</span>
						<span className={style.CarStat}>
							{props.sellerType}
						</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CarStats;