import React, { useState, useEffect } from 'react';
import axios from 'axios';
import style from './Post.module.css';
import Input from '../../components/Input/Input';
import Dropdown from '../../components/MainDropdown/Dropdown';
import SecondaryButton from '../../components/SecondaryButton/SecondaryButton';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';
import FileUpload from '../../components/FileUpload/FileUpload';
import carCategories from '../../data/carCategories';
import { useAccount } from 'wagmi';


const API_URL = 'http://localhost:8080'


const Post = props => {
	const { address, isDisconnected } = useAccount()
	const currentDate = new Date();
	// Format the date to a string in ISO format (e.g., "2023-10-16T12:30:00.000Z")
	const formattedDate = currentDate.toISOString();


	const [auctionData, setAuctionData] = useState({
		car: '',
		creatorWalletAddress: address,
		status: 'approved',
		NFTMinted: false,
		NFT: '',
		bids: [],
		initialPrice: '',
		reservePrice: '',
		auctionDuration: '',
		auctionStartTime: formattedDate,
		auctionEndTime: '',
		winBid: ''
	})

	const [carData, setCarData] = useState({
		make: '',
		imageURL: '',
		model: '',
		year: '',
		VIN: '',
		mileage: '',
		bodyType: carCategories[0].categoryName,
		transmission: '',
		fuelType: '',
		engine: '',
		description: '',
		drivetrain: 'AWD',
		interiorColor: '',
		exteriorColor: '',
		horsepower: '',
		sellerType: 'Owner',
		ownerWalletAddress: address
	})

	const [userData, setUserData] = useState({
		email: '',
		fullname: '',
		location: '',
		createdAuctions: []
		// push the created auction id when created
	})


	const handleSubmit = () => {
		// send the car data to the post route first.
		const addCarToDatabase = () => {
			axios.post(`${API_URL}/cars`, carData)
				.then(res => {
					console.log(res)
					// get the id from the response.
					const carId = res.data._id;
					// Set the car key in the auctionData object
					setAuctionData({ ...auctionData, car: carId });
				})
				.catch(err => err)
		}

		const addAuctionToDatabase = () => {
			axios.post(`${API_URL}/auctions`, auctionData)
				.then(res => {
					addCarToDatabase()
					console.log(res);
					const auctionId = res.data._id;
					// Update the user data in the state by spreading the existing values in createdAuctions and adding the new auctionId
					setUserData(prevUserData => ({
						...prevUserData,
						createdAuctions: [...prevUserData.createdAuctions, auctionId]
					}));
				})
				.catch(err => console.error(err));
		}


		const updateUserInfo = () => {
			axios.patch(`${API_URL}/users/${address}`, userData)
				.then(res => console.log(res))
				.catch(err => err)
		}


		addAuctionToDatabase()
		updateUserInfo()

		// send the data to the auction post route.
		// get the id from the response

		// finally send the user info to the user post route, push the created auction id to the createdAuctions array.
	}



	const handleCarChange = (field, value) => {
		setCarData({ ...carData, [field]: value });
	}

	const handleCarDropdownChange = (field, selectedValue) => {
		setCarData({ ...carData, [field]: selectedValue });
	}


	const handleUserChange = (field, value) => {
		setUserData({ ...userData, [field]: value });
	}


	const handleAuctionChange = (field, value) => {
		setAuctionData({ ...auctionData, [field]: value });
	}

	const handleAuctionDropdownChange = (field, selectedValue) => {
		setAuctionData({ ...auctionData, [field]: selectedValue });
	}

	const handleImageUpload = (imageURL) => {
		setCarData({ ...carData, imageURL: imageURL });
	}



	return (
		<section className={style.PostPageWrapper}>
			{isDisconnected ?
				<span>Connect your wallet</span>
				:
				<div>
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
									change={(e) => handleCarChange('VIN', e.target.value)}
									value={carData.VIN}
								/>

								<Input
									width={360}
									label='ex: Toyota, BMW, Porsche, Tesla etc'
									placeholder='Car make/manufacturer'
									change={(e) => handleCarChange('make', e.target.value)}
									value={carData.make}
								/>

								<Input
									width={360}
									label='Car model'
									placeholder='ex: Supra, M3, 911, Model 3 etc'
									change={(e) => handleCarChange('model', e.target.value)}
									value={carData.model}
								/>

								<Input
									width={360}
									label='Car model year'
									placeholder='ex: 2012'
									change={(e) => handleCarChange('year', e.target.value)}
									value={carData.year}
								/>

								<Input
									width={360}
									label='Car mileage in kilometers'
									placeholder='ex: 12000, 35000'
									change={(e) => handleCarChange('mileage', e.target.value)}
									value={carData.mileage}
								/>

								<Dropdown
									DropdownTitle='Car Category'
									dataArray={['Sedans', 'SUVs', 'Coupes', 'Hatchbacks', 'Convertibles', 'Wagons', 'Trucks', 'Vans/Minivans', 'Classics']}
									change={selectedValue => handleCarDropdownChange('bodyType', selectedValue)}
									defaultValue={'Sedans'}
								/>

								<Dropdown
									DropdownTitle='Bid time in hrs. The bid closes and highest bidder gets the auction in:'
									dataArray={[24, 48, 72, 96]}
									change={selectedValue => handleAuctionDropdownChange('auctionDuration', selectedValue)}
									defaultValue={24}
								/>

								<Input
									width={360}
									label='Email address'
									placeholder='ex: you@example.com'
									change={(e) => handleUserChange('email', e.target.value)}
									value={carData.email}
								/>

								<Input
									width={360}
									label='Full name'
									placeholder='ex: John Doe'
									change={(e) => handleUserChange('fullname', e.target.value)}
									value={userData.fullname}
								/>
							</div>

							<div className={style.InputFields}>
								<Input
									width={360}
									label='Engine Type'
									placeholder='ex: Twin Turbo V6, Bi-Turbo V8, Supercharged V12'
									change={(e) => handleCarChange('engine', e.target.value)}
									value={carData.engine}
								/>

								<Dropdown
									DropdownTitle='Drivetrain'
									dataArray={["AWD", "RWD", "FWD", "4x4", "4WD"]}
									defaultValue={'AWD'}
									change={selectedValue => handleCarDropdownChange('drivetrain', selectedValue)}
								/>

								<Input
									width={360}
									label='Transmission'
									placeholder='ex: 5-Speed Manual'
									change={(e) => handleCarChange('transmission', e.target.value)}
									value={carData.transmission}
								/>

								<Input
									width={360}
									label='Exterior colour'
									placeholder='ex: Blue'
									change={(e) => handleCarChange('exteriorColor', e.target.value)}
									value={carData.exteriorColor}
								/>

								<Input
									width={360}
									label='Interior Colour'
									placeholder='ex: White on Black'
									change={(e) => handleCarChange('interiorColor', e.target.value)}
									value={carData.interiorColor}
								/>

								<Input
									width={360}
									label='Horsepower'
									placeholder='ex: 750hp'
									change={(e) => handleCarChange('horsepower', e.target.value)}
									value={carData.horsepower}
								/>

								<Input
									width={360}
									label='Fuel Type'
									placeholder='ex: diesel, petrol'
									change={(e) => handleCarChange('fuelType', e.target.value)}
									value={carData.fuelType}
								/>

								<Dropdown
									DropdownTitle='Are you the owner or a dealer for this car?'
									dataArray={["Owner", "Dealer"]}
									defaultValue='Owner'
									change={selectedValue => handleCarDropdownChange('sellerType', selectedValue)}

								/>

								<Input
									width={360}
									label='Location'
									placeholder='ex:Lagos, Nigeria. Redmond, WA.'
									change={(e) => handleUserChange('location', e.target.value)}
									value={carData.location}
								/>
							</div>
						</div>



						<div className={style.CarDetailFields}>
							<div className={style.CarDetailInputsWrapper}>

								<FileUpload
									onImageUpload={handleImageUpload}
								/>

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
										onChange={e => handleCarChange('description', e.target.value)}
										value={carData.description}
									>
									</textarea>
								</div>

								<div className={style.CarDetailInputsWrapper}>
									<div>
										<Input
											width={620}
											label='Reserve price in $ (auction is cancelled if this price is not met)'
											placeholder='ex: 35000'
											change={(e) => handleAuctionChange('reservePrice', e.target.value)}
											value={carData.reservePrice}
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
											label='Initial price in $ (lowest bid price)'
											placeholder='ex: 35000'
											change={(e) => handleAuctionChange('initialPrice', e.target.value)}
											value={carData.initialPrice}
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
							click={handleSubmit}
						/>
					</div>
				</div>
			}
		</section>
	)
}

export default Post;