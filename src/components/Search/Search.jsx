import React, { useState } from 'react';
import SearchBox from './SearchBox/SearchBox';
import SearchFilter from './SearchFilter/SearchFilter';
import SearchPrintType from './SearchPrintType/SearchPrintType';

const Search = ({ hanldeSetBookJson }) => {
	const [query, setQuery] = useState('');
	const [filter, setFilter] = useState('');
	const [printType, setPrintType] = useState('all');
	const searchUrl = `https://www.googleapis.com/books/v1/volumes?q=${query}${filter}&printType=${printType}&key=AIzaSyBvNNIfuL3_ngPCC08-prGmF6GNCDuqFUY`;

	const searchApi = () => {
		fetch(searchUrl)
			.then(res => res.json())
			.then(bookJson => hanldeSetBookJson(bookJson))
			.catch(e => console.log(e));
	};

	return (
		<div>
			<SearchBox
				handleSetQuery={setQuery}
				query={query}
				handleSubmitForm={searchApi}
			/>
			<SearchFilter handleSetFilter={setFilter} filter={filter} />
			<SearchPrintType
				handleSetPrintType={setPrintType}
				printType={printType}
			/>
		</div>
	);
};

export default Search;
