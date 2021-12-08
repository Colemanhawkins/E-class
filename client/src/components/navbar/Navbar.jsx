import React from 'react';
import SearchInput from '../searchInput/SearchInput.jsx';
import './navbar.css';

//una simple barra de navegacion sin logica por detras
const Navbar = () => {
    return (
    	<React.Fragment>
			<header className="container">
				<nav>
					<ul>
						<li>
							<a href="/home" className="Home active">
								Home
							</a>
						</li>
						<li>
							<a href="/history" className="History">History</a>
						</li>
					</ul>
					<SearchInput />
				</nav>
			</header>
		</React.Fragment>
    )
}

export default Navbar
