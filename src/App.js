import React from "react";
import * as BooksAPI from "./BooksAPI";
import Bookshelf from "./Bookshelf";
import "./App.css";

class BooksApp extends React.Component {
  componentDidMount() {
    console.log("App.js componentDidMount called.");
    BooksAPI.getAll().then(books => {
      this.setState({ books });
      console.log({ books });
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
        shelfName: "Already Read"
      }
    ],

    books: [],

    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  };

  changeShelf = () => {
    //TODO: update state to reflect book being moved to new shelf

    console.log("App.js changeShelf called");

    (book, newShelf) => {
      BooksAPI.update(book, newShelf).then(() => {
        book.shelf = newShelf;
        BooksAPI.getAll().then(books => {
          this.setState({
            books: books
          });
        });
      });
    };
  };

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <div className="search-books">
            <div className="search-books-bar">
              <a
                className="close-search"
                onClick={() => this.setState({ showSearchPage: false })}
              >
                Close
              </a>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author" />
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid" />
            </div>
          </div>
        ) : (
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
              <a onClick={() => this.setState({ showSearchPage: true })}>
                Add a book
              </a>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default BooksApp;
