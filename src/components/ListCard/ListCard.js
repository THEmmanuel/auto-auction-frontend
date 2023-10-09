import React from 'react';
import style from './ListCard.module.css';
import engineIcon from '../../assets/engineIcon.svg';
import gearIcon from '../../assets/gearIcon.svg';
import timerIcon from '../../assets/timerIcon.svg';
import testPorsche from '../../assets/testPorsche.svg';

const ListCard = () => {
	return (
		<div className={style.ListCardWrapper}>
			<img src={testPorsche} alt="" />

			<div className={style.ListCardContentWrapper}>
				<div className={style.ListCardContent}>
					<div>
						<span
							className={style.ListCardCarName}>
							Car name
						</span>

						<div className={style.CarAttributes}>
							<div>
								<img
									src={engineIcon}
									alt=""
									className={style.CarAttributeIcon}
								/>

								<span
									className={style.CarAttribute}
								>
									engine type
								</span>
							</div>

							<div>
								<img
									src={gearIcon}
									alt=""
									className={style.CarAttributeIcon}
								/>

								<span className={style.CarAttribute}>
									gear type
								</span>
							</div>
						</div>
					</div>

					<div>
						<span className={style.CarCurrentBidTitle}>
							Current Bid:
						</span>

						<span className={style.CarCurrentBidPrice}>
							$35,000
						</span>
					</div>
				</div>

				<div className={style.ListCardAdditionalContent}>
					<div>
						<img
							src={timerIcon}
							alt=""
							className={style.timerIcon}
						/>

						<span className={style.BidTime}>
							time
						</span>
					</div>

					<div>
						<span>img</span>
						<span>location</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ListCard;