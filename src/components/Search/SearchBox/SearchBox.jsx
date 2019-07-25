import React from 'react';

const SearchBox = ({ handleSetQuery, query, handleSubmitForm }) => {
	const submitForm = e => {
		e.preventDefault();
		handleSubmitForm();
	};
	return (
		<div className="SearchBox">
			<form onSubmit={e => submitForm(e)}>
				<p>Search</p>
				<input
					type="text"
					placeholder="Search for a book."
					value={query}
					onChange={e => handleSetQuery(e.target.value)}
				/>
				<button type="submit">Submit</button>
			</form>
		</div>
	);
};

export default SearchBox;
