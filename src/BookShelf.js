import React from 'react';
import PropTypes from 'prop-types';

import BookShelfList from './BookShelfList'

export default class BookShelf extends React.Component {

  constructor(props) {
    super(props);
  }

  render(){
    let { books, title, onChangeShelf } = this.props;
    console.log(title)
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            { books.map( (book) => {
              return (
                <BookShelfList
                  key={book.id}
                  book={book}
                  onChangeShelf={onChangeShelf}
                />
              )
            })}
          </ol>
        </div>
      </div>
    )
  }
}

BookShelf.proptypes = {
  title: PropTypes.string.isRequired
}