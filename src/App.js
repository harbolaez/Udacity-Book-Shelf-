import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import BookLists from './BookLists'
import SearchBooks from './SearchBooks'


class BooksApp extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      books: []
    }

    this.handleChangeOnShelf = this.handleChangeOnShelf.bind(this);
    this.getBooksFromShelf = this.getBooksFromShelf.bind(this);
  }

  componentDidMount() {
    BooksAPI.getAll().then(data => {
      this.setState({
        books: data
      });
    });
  }

  handleChangeOnShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(response => {
      this.getBooksFromShelf();
    });
  };

  getBooksFromShelf() {
    BooksAPI.getAll().then(data => this.setState({ books: data}) );
  }

  render() {
    const { books } = this.state;
    return (
      <Router>
        <div className="app">
          <Route exact path="/" render={() => <BookLists booksOnShelf={books} />} />
          <Route
            path="/search"
            render={() =>
              <SearchBooks onChangeShelf={this.handleChangeOnShelf} booksOnShelf={books} />}
          />
        </div>
      </Router>
    )
  }
}

export default BooksApp
