import React, { useState, createContext } from 'react';

export const GoogleBooksContext = createContext();

export const GoogleBooksParams = props => {
	const [query, setQuery] = useState('');
	const [filter, setFilter] = useState('');
	const [printType, setPrintType] = useState('all');

	return (
		<GoogleBooksParams.Provider>
			{props.children}
		</GoogleBooksParams.Provider>
	);
};
