import React from 'react';

const SearchPrintType = ({ handleSetPrintType, printType }) => {
	return (
		<>
			<p>Print Type</p>
			<select
				value={printType}
				onChange={e => handleSetPrintType(e.target.value)}
			>
				<option value="all">all</option>
				<option value="books">books</option>
				<option value="magazines">magazines</option>
			</select>
		</>
	);
};

export default SearchPrintType;
