import React, { useState, useEffect } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

import Home from './pages/Home/Home';
import Auction from './pages/Auction/Auction';
import Listings from './pages/Listings/Listings';
import Post from './pages/Post/Post';
import History from './pages/History/History';
import AuctionSuccess from './pages/AuctionSucess/AuctionSucess';

import NavBar from './components/NavBar/NavBar';
import { useAccount } from 'wagmi';

import {
	BrowserRouter as Router,
	Routes,
	Route
} from 'react-router-dom';

const API_URL = process.env.REACT_APP_BACKEND_API


function App() {
	const { address } = useAccount()
	const currentDate = new Date();
	// Format the date to a string in ISO format (e.g., "2023-10-16T12:30:00.000Z")
	const formattedDate = currentDate.toISOString();

	const addUserToDatabase = () => {
		axios.post(`${API_URL}/users`, {
			walletAddress: address,
			createdAt: formattedDate,
			role: 'member'
		}).then(
			// res => console.log(res)
		).catch(err => err)
	}

	useEffect(() => {
		addUserToDatabase()
	}, [address])

	return (
		<Router>
			<div className="App">
				<NavBar />
				<Routes>
					<Route
						exact
						path='/'
						element=<Home />
					>
					</Route>

					<Route
						exact
						path='/home'
						element=<Home />
					>
					</Route>

					<Route
						exact
						path='/auction/:id'
						element=<Auction />
					>
					</Route>

					<Route
						exact
						path='/listings'
						element=<Listings />
					>
					</Route>

					<Route
						exact
						path='/post'
						element=<Post />
					>
					</Route>

					<Route
						exact
						path='/history'
						element=<History />
					>
					</Route>

					<Route
						exact
						path='/auction-added/:auctionId/:carId'
						element=<AuctionSuccess />
					>
					</Route>

				</Routes>
			</div>
		</Router>
	);
}

export default App;
