import React from 'react';
import style from './Post.module.css';
import Input from '../../components/Input/Input';
import Dropdown from '../../components/MainDropdown/Dropdown';
import SecondaryButton from '../../components/SecondaryButton/SecondaryButton';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';
import porsche from '../../assets/testPorsche.svg'

const Post = props => {
	return (
		<section className={style.PostPageWrapper}>
			<span className={style.SectionTitle}>
				Create an auction
			</span>

			<div className={style.AttributesWrapper}>
				<div className={style.CarAttributesWrapper}>
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

						<Dropdown
							DropdownTitle='Car Category'
							dataArray={['Sedans', 'SUVs', 'Coupes', 'Hatchbacks', 'Convertibles', 'Wagons', 'Trucks', 'Vans/Minivans', 'Classics']}
							// change={handleRoleChange}
							defaultValue={'test'}
						/>

						<Dropdown
							DropdownTitle='Bid time in hrs. The bid closes and highest bidder gets the auction in:'
							dataArray={[24, 48, 72, 96]}
							// change={handleRoleChange}
							defaultValue={'test'}
						/>

						<Input
							width={360}
							label='Email address'
							placeholder='ex: you@example.com'
						/>

						<Input
							width={360}
							label='Full name'
							placeholder='ex: John Doe'
						/>
					</div>

					<div className={style.InputFields}>
						<Input
							width={360}
							label='Engine Type'
							placeholder='ex: Twin Turbo V6, Bi-Turbo V8, Supercharged V12'
						/>

						<Dropdown
							DropdownTitle='Drivetrain'
							dataArray={["AWD", "RWD", "FWD", "4x4", "4WD"]}
							// change={handleRoleChange}
							defaultValue={'test'}
						/>

						<Input
							width={360}
							label='Transmission'
							placeholder='ex: 5-Speed Manual'
						/>

						<Input
							width={360}
							label='Exterior colour'
							placeholder='ex: Blue'
						/>

						<Input
							width={360}
							label='Interior Colour'
							placeholder='ex: White on Black'
						/>

						<Input
							width={360}
							label='Horsepower'
							placeholder='ex: 750hp'
						/>

						<Dropdown
							DropdownTitle='Are you the owner or a dealer for this car?'
							dataArray={["Owner", "Buyer"]}
							// change={handleRoleChange}
							defaultValue={'test'}
						/>

						<Input
							width={360}
							label='Location'
							placeholder='ex:Lagos, Nigeria. Redmond, WA.'
						/>
					</div>
				</div>



				<div className={style.CarDetailFields}>
					<div className={style.CarDetailInputsWrapper}>
						<div>
							<span
								className={style.CarTextField}>
								Add Image
							</span>

							<div
								className={style.CarImageWrapper}
							>
								<img
									src={porsche}
									alt=""
									className={style.CarImage}
								/>

								<PrimaryButton
									text='choose image'
									width={120}
								/>
							</div>
						</div>

						<div>
							<span
								className={style.CarTextField}
							>
								Car Description
							</span>
							<textarea
								name=""
								className={style.CarDescriptionContainer}
								placeholder="Brief overview of the car's condition and features) include  additional features or options (e.g., sunroof, leather seats, navigation system)"
							>
							</textarea>
						</div>

						<div className={style.CarDetailInputsWrapper}>
							<div>
								<Input
									width={620}
									label='Reserve price in $ (auction is cancelled if this price is not met)'
									placeholder='ex: 35000'
								/>
								<span
									className={style.CarTextField}
								>
									Price in ETH: 10.7 ETH
								</span>
							</div>

							<div>
								<Input
									width={620}
									label='Reserve price in $ (auction is cancelled if this price is not met)'
									placeholder='ex: 35000'
								/>
								<span
									className={style.CarTextField}
								>
									Price in ETH: 10.7 ETH
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>


			<div className={style.ButtonWrapper}>
				<SecondaryButton
					text='Submit'
					width={150}
				/>
			</div>
		</section>
	)
}

export default Post;