import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/login/Login.jsx';
import Home from './components/home/Home.jsx';
import History from './components/history/History.jsx';

//routeo mis componentes
const App = () => {
	return (
    <Router>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path='/home' element={< Home />} />
				<Route path='/history' element={< History />} />
			</Routes>
    </Router>
	);
};

export default App;
