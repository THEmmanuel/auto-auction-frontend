import React from 'react';
import style from './History.module.css';
import TransactionCard from '../../components/TransactionCard/TransactionCard';


const History = props => {
	return (
		<section>
				<div className={style.TransactionCardWrapper}>
					<TransactionCard />
					<TransactionCard />
					<TransactionCard />
					<TransactionCard />
					<TransactionCard />
				</div>
		</section>
	)
}

export default History;