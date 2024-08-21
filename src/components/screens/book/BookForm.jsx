import React, { useState } from 'react'
import useBookStore from '../../../stores/zustand/bookStore';

function BookForm() {
    const addBook = useBookStore((state) => state.addBook);
    const [bookDetails, setBookDetails] = useState({
      id: Date.now(),
      name:'',
      author:''
    });
  
    const handleOnChange = (event) => {
      const { name, value } = event.target;
      setBookDetails({ ...bookDetails, [name]: value });
    };
  
    const handleAddBook = () => {
      if (!Object.keys(bookDetails).length)
        return alert("Please enter book details!");
      addBook(bookDetails);
      setBookDetails({name:'',
        author:''});
    };
  
    return (
      <div className="input-div">
        <div className="input-grp">
          <label>Book ID</label>
          <input type="text" name="id" size={50} onChange={handleOnChange} value={bookDetails.id} />
        </div>
        <div className="input-grp">
          <label>Book Name</label>
          <input type="text" name="name" size={50} onChange={handleOnChange} value={bookDetails.name}/>
        </div>
        <div className="input-grp">
          <label>Author</label>
          <input type="text" name="author" size={50} onChange={handleOnChange} value={bookDetails.author}/>
        </div>
        <button onClick={handleAddBook} className="add-btn">
          {" "}
          Add{" "}
        </button>
      </div>
    );
}

export default BookForm
