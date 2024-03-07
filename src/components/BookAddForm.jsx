import React, { useState } from 'react';

const BookForm = ({ addBook }) => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addBook({ title, author });
        setTitle('');
        setAuthor('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Kitob nomi" value={title} onChange={(e) => setTitle(e.target.value)} />
            <input type="text" placeholder="Muallif" value={author} onChange={(e) => setAuthor(e.target.value)} />
            <button>Qo'shish</button>
        </form>
    );
};

export default BookForm;
