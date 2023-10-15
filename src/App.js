import React, { useState } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

import Home from './pages/Home/Home';
import Auction from './pages/Auction/Auction';
import Listings from './pages/Listings/Listings';
import Post from './pages/Post/Post';
import History from './pages/History/History';

import NavBar from './components/NavBar/NavBar';
import { useAccount } from 'wagmi';

import {
	BrowserRouter as Router,
	Routes,
	Route
} from 'react-router-dom';


// const addUserToDatabase = useCallback(() => {
// 	axios.post(`${API_URL}/users`, {
// 		email: user.primaryEmailAddress.emailAddress,
// 		username: user.username,
// 		userID: user.id,
// 		userProfileURL: user.profileImpageUrl,
// 	}).then(
// 		res => console.log(res)
// 	).catch(err => err)
// }, [user])


// function CreateUser() {
// 	const { address } = useAccount();
// 	console.log(address);
// }



function App() {
	const { address } = useAccount()
	// const addUserToDatabase = () => {
	// 	axios.post(`${API_URL}/users`, {
	// 		walletAddress: 'test'
	// 	})
	// }
	console.log(address)

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
						path='/auction'
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

				</Routes>
			</div>
		</Router>
	);
}

export default App;
