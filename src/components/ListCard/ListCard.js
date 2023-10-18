import React from 'react';
import style from './ListCard.module.css';
import engineIcon from '../../assets/engineIcon.svg';
import gearIcon from '../../assets/gearIcon.svg';
import timerIcon from '../../assets/timerIcon.svg';
import mapIcon from '../../assets/mapIcon.svg'
import testPorsche from '../../assets/testPorsche.svg';

const ListCard = props => {
	return (
		<div className={style.ListCardWrapper}>
			<img src={props.image} alt="" />

			<div className={style.ListCardContentWrapper}>
				<div className={style.ListCardContent}>
					<div>
						<span
							className={style.ListCardCarName}>
							{`${props.make} ${props.model}`} 
						</span>

						<div className={style.CarAttributes}>
							<div className={style.AttributeContainer}>
								<img
									src={engineIcon}
									alt=""
									className={style.CarAttributeIcon}
								/>

								<span
									className={style.CarAttribute}
								>
									{props.engine}
								</span>
							</div>

							<div className={style.AttributeContainer}>
								<img
									src={gearIcon}
									alt=""
									className={style.CarAttributeIcon}
								/>

								<span className={style.CarAttribute}>
									{props.transmission}
								</span>
							</div>
						</div>
					</div>

					<div className={style.CarCurrentBidWrapper}>
						<span className={style.CarCurrentBidTitle}>
							Initial Bid:
						</span>

						<span className={style.CarCurrentBidPrice}>
							${props.price}
						</span>
					</div>
				</div>

				<div className={style.ListCardAdditionalContent}>
					<div className={style.CarDataWrapper}>
						<img
							src={timerIcon}
							alt=""
							className={style.Icon}
						/>

						<span className={style.CarData}>
							{props.time}
						</span>
					</div>

					<div className={style.CarDataWrapper}>
						<img
							src={mapIcon}
							alt=""
							className={style.Icon}
						/>
						<span className={style.CarData}>
							location
						</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ListCard;