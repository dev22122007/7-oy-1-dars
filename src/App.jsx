import React, { useState } from 'react';
import BookList from './components/BookList';
import BookForm from './components/BookAddForm';

function App() {
    const [books, setBooks] = useState([
        { id: 1, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
        { id: 2, title: '1984', author: 'George Orwell' },
        { id: 3, title: 'Pride and Prejudice', author: 'Jane Austen' }
    ]);

    const addBook = (book) => {
        setBooks([...books, { id: Date.now(), ...book }]);
    };

    const deleteBook = (id) => {
        setBooks(books.filter(book => book.id !== id));
    };

    return (
        <div>
            <h1>Books</h1>
            <BookForm addBook={addBook} />
            <BookList books={books} deleteBook={deleteBook} />
        </div>
    );
}

export default App;
