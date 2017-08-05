import React from 'react';

import BookShelfList from './BookShelfList'

export default class BookShelf extends React.Component {
  render(){
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">Currently Reading</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            <BookShelfList />
          </ol>
        </div>
      </div>
    )
  }
}