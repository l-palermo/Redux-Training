import React, { useState, useEffect } from 'react';

const List = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => setBooks(json))
  })
  
  return (
    <div>
      <h2> Books: </h2>
      { books.map(book => {
        return <div key={book.id}> 
        <h3>{book.title}</h3>
        <p>{book.body}</p>
        </div>
      })}
    </div>
  );
}
 
export default List;