import React from 'react';

const SearchFilter = ({ handleSetFilter, filter }) => {
	return (
		<>
			<p>Book: </p>
			<select
				value={filter}
				onChange={e => handleSetFilter(e.target.value)}
			>
				<option value="">no filter</option>
				<option value="&#38;filter=ebooks">ebooks</option>
				<option value="&#38;filter=free-ebooks">
					free ebooks
				</option>
				<option value="&#38;filter=paid-ebooks">
					paid ebooks
				</option>
				<option value="&#38;filter=full">full</option>
				<option value="&#38;filter=partial">partial</option>
			</select>
		</>
	);
};

export default SearchFilter;
