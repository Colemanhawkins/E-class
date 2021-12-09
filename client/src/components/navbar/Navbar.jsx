import React from 'react';
import SearchInput from '../searchInput/SearchInput.jsx';
import './navbar.css';

//una simple barra de navegacion sin logica por detras
const Navbar = () => {
//juego con la url 
const Url = window.location.href;

    return (
    	<React.Fragment>
			<header className="container">
				<nav>
					<ul>
						<li>
							<a href="/home" className={Url.toString() === 'http://localhost:3000/home' ? "Home active" : 'Home'}>
								Home
							</a>
						</li>
						<li>
							<a href="/history" className={ Url.toString() === 'http://localhost:3000/history' ? "History active" : 'History'}>History</a>
						</li>
					</ul>
					{ Url.toString() === 'http://localhost:3000/history' ? null : (
					<SearchInput />
					)}
				</nav>
			</header>
		</React.Fragment>
    )
}

export default Navbar
