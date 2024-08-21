import React from 'react'
import Table from '../../Table'
import useBookStore from '../../../stores/zustand/bookStore'
import BookList from './BookList';
import BookForm from './BookForm';

function Book() {
    const reset = useBookStore((state) => state.reset);
  return (
    <div className='books-container'>
        <h2>My Library Store</h2>
        <BookList />
        <BookForm />

      
    </div>
  )
}

export default Book
