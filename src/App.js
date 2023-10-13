import logo from './logo.svg';
import './App.css';

import Home from './pages/Home/Home';
import Auction from './pages/Auction/Auction';
import Listings from './pages/Listings/Listings';
import Post from './pages/Post/Post';
import History from './pages/History/History';

import NavBar from './components/NavBar/NavBar';

import {
	BrowserRouter as Router,
	Routes,
	Route
} from 'react-router-dom';

import '@rainbow-me/rainbowkit/styles.css';
import {
	getDefaultWallets,
	RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import {
	goerli,
	mantleTestnet,
	polygonMumbai,
	polygonZkEvmTestnet,
	scrollTestnet
} from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

const { chains, publicClient } = configureChains(
	[
		goerli,
		mantleTestnet,
		polygonMumbai,
		polygonZkEvmTestnet,
		scrollTestnet],
	[
		alchemyProvider({ apiKey: process.env.ALCHEMY_ID }),
		publicProvider()
	]
);

const { connectors } = getDefaultWallets({
	appName: 'My RainbowKit App',
	projectId: 'YOUR_PROJECT_ID',
	chains
});

const wagmiConfig = createConfig({
	autoConnect: true,
	connectors,
	publicClient
})




function App() {
	return (
		<WagmiConfig config={wagmiConfig}>
			<RainbowKitProvider chains={chains}>
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
