import React, { useState, useEffect } from 'react';
import './App.css';
import Branding from './components/Branding/Branding';
import Search from './components/Search/Search';
import ResultList from './components/ResultsList/ResultsList';

const App = () => {
	const [bookJson, setBookJson] = useState({});

	useEffect(() => {
		console.log(bookJson);
	});

	return (
		<div className="App">
			<Branding />
			<Search hanldeSetBookJson={setBookJson} />
			<ResultList bookJson={bookJson} />
		</div>
	);
};

export default App;
