import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI'

import {
  Link
} from 'react-router-dom'


import BookShelf from './BookShelf';

class BookLists extends Component {

  constructor(props){
    super(props);
    this.handleChangeShelf = this.handleChangeShelf.bind(this);
  }

  handleChangeShelf = (bookId, eValue) => {
    let bookTemp = this.props.booksOnShelf;
    const book = bookTemp.filter(book => book.id === bookId.id)[0];
    book.shelf = eValue;
    BooksAPI.update(book, eValue).then(response => {
      this.setState({
        books: bookTemp
      });
    });
  };

  render(){
    const { booksOnShelf } = this.props;
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          { (booksOnShelf.length == 0 )
            ? <h1>Loading...</h1>
            : (
              <div>
                <BookShelf
                  key="currently"
                  books={booksOnShelf.filter(book => book.shelf === "currentlyReading")}
                  onChangeShelf={this.handleChangeShelf}
                  title="Currently Reading"
                />
                <BookShelf
                  key="wantToRead"
                  books={booksOnShelf.filter(book => book.shelf === "wantToRead")}
                  onChangeShelf={this.handleChangeShelf}
                  title="Want to Read"
                />
                <BookShelf
                  key="read"
                  books={booksOnShelf.filter(book => book.shelf === "read")}
                  onChangeShelf={this.handleChangeShelf}
                  title="Read"
                />
              </div>
            )
          }
        </div>
        <div className="open-search">
          <Link to='/search'>Add a book</Link>
        </div>
      </div>
    )
  }
}

export default BookLists;