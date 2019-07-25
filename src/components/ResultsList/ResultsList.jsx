import React from 'react';
import Book from './Book/Book';

const ResultList = ({ bookJson }) => {
	const allBooks = bookJson.items;

	if (allBooks !== undefined) {
		return allBooks.map(book => <Book book={book} key={book.id} />);
	} else {
		return <div />;
	}
};

export default ResultList;
