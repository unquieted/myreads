import React from "react";
import * as BooksAPI from "./BooksAPI";
import Bookshelf from "./Bookshelf";
import "./App.css";
import { Route } from "react-router-dom";
import Search from "./Search";
import { Link } from "react-router-dom";

class BooksApp extends React.Component {
  componentDidMount() {
    // console.log("App.js componentDidMount called.");
    BooksAPI.getAll().then(books => {
      this.setState({ books });
      // console.log({ books });
    });
  }

  state = {
    bookshelves: [
      {
        shelfCode: "currentlyReading",
        shelfName: "Currently Reading"
      },
      {
        shelfCode: "wantToRead",
        shelfName: "Want to Read"
      },
      {
        shelfCode: "read",
        shelfName: "Read"
      }
    ],

    books: []
  };

  changeShelf = (book, newShelf) => {
    //TODO: update state to reflect book being moved to new shelf
    // Need to send book and newShelf from selected book to this function

    // console.log("App.js changeShelf called");
    // console.log("book = " + book.title);
    // console.log("newShelf = " + newShelf);

    BooksAPI.update(book, newShelf).then(() => {
      BooksAPI.getAll().then(books => {
        this.setState({ books });
      });
    });
  };

  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                {/* Send books and bookshelf arrays to Bookshelf component as props */}
                <Bookshelf
                  books={this.state.books}
                  bookshelf={this.state.bookshelves[0]}
                  onChangeShelf={this.changeShelf}
                />
                <Bookshelf
                  books={this.state.books}
                  bookshelf={this.state.bookshelves[1]}
                  onChangeShelf={this.changeShelf}
                />
                <Bookshelf
                  books={this.state.books}
                  bookshelf={this.state.bookshelves[2]}
                  onChangeShelf={this.changeShelf}
                />
              </div>
              <div className="open-search">
                <Link to={{ pathname: "/search" }}>Add a book</Link>
              </div>
            </div>
          )}
        />

        <Route
          path="/search"
          render={() => (
            <Search
              assignedBooks={this.state.books}
              assignShelf={this.onChangeShelf}
              onChangeShelf={this.changeShelf}
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
