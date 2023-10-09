import logo from './logo.svg';
import './App.css';

import Home from './pages/Home/Home';
import NavBar from './components/NavBar/NavBar';
import {
	BrowserRouter as Router,
	Routes,
	Route
} from 'react-router-dom';

function App() {
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

				</Routes>
			</div>
		</Router>
	);
}

export default App;
