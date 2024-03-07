import React from 'react';
import BookItem from './BookItem';

const BookList = ({ books, deleteBook }) => {
    return (
        <div>
            <h2>Kitoblar</h2>
            {books.map(book => (
                <BookItem key={book.id} book={book} deleteBook={deleteBook} />
            ))}
        </div>
    );
};

export default BookList;
