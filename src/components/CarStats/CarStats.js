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

			</div>
		</div>
	)
}

export default CarStats;