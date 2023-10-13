import logo from './logo.svg';
import './App.css';

import Home from './pages/Home/Home';
import Auction from './pages/Auction/Auction';
import Listings from './pages/Listings/Listings';
import Post from './pages/Post/Post';
import History from './pages/History/History';
import { WagmiConfig } from 'wagmi';

import NavBar from './components/NavBar/NavBar';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';

import {
	BrowserRouter as Router,
	Routes,
	Route
} from 'react-router-dom';


function App() {
	return (
		<WagmiConfig>
			<RainbowKitProvider>
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
			</RainbowKitProvider>
		</WagmiConfig>
	);
}

export default App;
