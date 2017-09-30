import React from 'react';
import BookShelfList from './BookShelfList'
import * as BooksAPI from './BooksAPI'

import {
  Link
} from 'react-router-dom';

export default class SearchBook extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: "",
      books: []
    }

  }

  updateQuery = (query) => {
    this.setState({
      query: query
    });
    if (query) {
      this.searchBookApi(query);
    } else {
      this.setState({
        books: []
      });
    }
  };

  updateBooks(books: any) {
    const verifiedBooks = books.map(book => {
      book.shelf = "none";
      this.props.booksOnShelf.forEach(bookOnShelf => {
        if (book.id === bookOnShelf.id) {
          book.shelf = bookOnShelf.shelf;
        }
      });
      return book;
    });
    this.setState({
      books: verifiedBooks
    });
  }

  searchBookApi(query) {
    BooksAPI.search(query, 25).then( response => {
      if (response.error) {
        this.setState({
          books: []
        });
      } else {
        this.updateBooks(response);
      }
    }, (error) => {
      console.error("error");
    });
  }

  render(){
    let { books } = this.state;
    let { onChangeShelf } = this.props;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" value={this.state.query} onChange={event => this.updateQuery(event.target.value)}
            />

          </div>
        </div>
        <div className="search-books-results">
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