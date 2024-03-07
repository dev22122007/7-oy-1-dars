import React from 'react';

const BookItem = ({ book, deleteBook }) => {
    return (
        <div>
            <p>{book.title} by {book.author}</p>
            <button onClick={() => deleteBook(book.id)}>O'chirish</button>
        </div>
    );
};

export default BookItem;
