import React from 'react';

const Book = ({ book }) => {
	const title = book.volumeInfo.title;

	const description = book.volumeInfo.description;
	const imageLink = book.volumeInfo.imageLinks.thumbnail;
	const infoLink = book.volumeInfo.infoLink;
	const id = book.id;

	const authors =
		book.volumeInfo.authors === undefined
			? 'Unknown'
			: book.volumeInfo.authors;
	// const printAuth = authors.join(', ');
	return (
		<div className="Book" id={id}>
			<a href={infoLink}>
				<img src={imageLink} alt={title} />
			</a>
			<h1>Title: {title} </h1>
			<h4>Authors: {authors} </h4>
			<p>{description}</p>
		</div>
	);
};

export default Book;
