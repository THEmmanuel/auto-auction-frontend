import React from 'react';
import style from './ListCard.module.css';
import engineIcon from '../../assets/engineIcon.svg';


const ListCard = () => {
	return (
		<div className={style.ListCardWrapper}>
			<img src="" alt="" />

			<div className={style.ListCardContentWrapper}>
				<div className={style.ListCardContent}>
					<div>
						<span
							className={style.ListCardCarName}>
							Car name
						</span>
						<div>
							<div>
								<img src={engineIcon} alt="" />
								<span>engine type</span>
							</div>

							<div>
								<span>gear</span>
								<span>gear type</span>
							</div>
						</div>
					</div>

					<div>
						<span>current bid</span>
						<span>$35,000</span>
					</div>
				</div>

				<div className={style.ListCardAdditionalContent}>
					<div>
						<span>clock</span>
						<span>time</span>
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