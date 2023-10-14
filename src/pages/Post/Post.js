import React from 'react';
import style from './Post.module.css';
import Input from '../../components/Input/Input';

const Post = props => {
	return (
		<section>
			Create an auction

			<div className={style.AttributesWrapper}>
				<div className={style.InputFields}>
					<Input
						width={360}
						label='VIN: Vehicle Identification number'
						placeholder='ex: 4Y1SL65848Z411439'
					/>

					<Input
						width={360}
						label='ex: Toyota, BMW, Porsche, Tesla etc'
						placeholder='Car make/manufacturer'
					/>

					<Input
						width={360}
						label='Car model'
						placeholder='ex: Supra, M3, 911, Model 3 etc'
					/>

					<Input
						width={360}
						label='Car model year'
						placeholder='ex: 2012'
					/>

					<Input
						width={360}
						label='Car mileage in kilometers'
						placeholder='ex: 12000, 35000'
					/>
				</div>


				<div className={style.InputFields}>
					<Input
						width={360}
						label='Engine Type'
						placeholder='ex: Twin Turbo V6, Bi-Turbo V8, Supercharged V12'
					/>

					<Input
						width={360}
						label='ex: Toyota, BMW, Porsche, Tesla etc'
						placeholder='Car make/manufacturer'
					/>

					<Input
						width={360}
						label='Transmission'
						placeholder='ex: Supra, M3, 911, Model 3 etc'
					/>

					<Input
						width={360}
						label='Car model year'
						placeholder='ex: 2012'
					/>

					<Input
						width={360}
						label='Car mileage in kilometers'
						placeholder='ex: 12000, 35000'
					/>
				</div>
			</div>


			<div>
				<Input/>
			</div>
		</section>
	)
}

export default Post;