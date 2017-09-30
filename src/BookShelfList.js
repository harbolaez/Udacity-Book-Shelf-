import React from 'react';


const BookShelfList = props => {
  const { book } = props;
  return (
    <li className="book">
      <div className="book-top">
        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url("'+book.imageLinks.thumbnail+'")' }}></div>
        <div className="book-shelf-changer">
          <select value={book.shelf} onChange={e => { props.onChangeShelf(book, e.target.value)}}>
            <option value="none" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{props.authors && props.authors[0]}</div>
    </li>
  );
}

export default BookShelfList;