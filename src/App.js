import logo from './logo.svg';
import './App.css';

import Home from './pages/Home/Home';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
		<NavBar/>
		<Home/>
    </div>
  );
}

export default App;
