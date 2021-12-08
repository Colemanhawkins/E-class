import React from 'react';
import SearchInput from '../searchInput/SearchInput.jsx';
import './navbar.css';

const Navbar = () => {
    return (
    	<React.Fragment>
			<header class="container">
				<nav>
					<ul>
						<li>
							<a href="#" class="active">
								Home
							</a>
						</li>
						<li>
							<a href="#">History</a>
						</li>
					</ul>
					<SearchInput />
				</nav>
			</header>
		</React.Fragment>
    )
}

export default Navbar
