import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/login/Login.jsx';
import Dashboard from './components/dashboard/Dashboard.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';


//routeo mis componentes
const App = () => {
	return (
    <Router>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path='/dashboard' element={< Dashboard />} />
			</Routes>
    </Router>
	);
};

export default App;
