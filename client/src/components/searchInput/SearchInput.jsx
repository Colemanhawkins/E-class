import React from 'react';
import './searchInput.css';

const SearchInput = () => {
	return (
		<div class="search-box">
			<input type="text" class="search-input" placeholder="Search" />
			<a href="#" class="search-btn">
				<i class="fas fa-search"></i>
			</a>
		</div>
	);
};

export default SearchInput;