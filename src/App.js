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
  state = {}

  render() {
    return (
      <Router>
        <div className="app">
          <Route exact path="/" component={BookLists}/>
          <Route path="/search" component={SearchBooks}/>
        </div>
      </Router>
    )
  }
}

export default BooksApp
