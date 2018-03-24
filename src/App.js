import React from "react";
// import * as BooksAPI from './BooksAPI'
import Bookshelf from "./Bookshelf";
import "./App.css";

class BooksApp extends React.Component {
  state = {

    bookshelves : [
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
      }],

      books : [
        {
          title: "The Linux Command Line",
          authors: ["William E. Shotts, Jr."],
          imageLinks: {
            thumbnail:
              "http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
          },
          id: "nggnmAEACAAJ",
          shelf: "currentlyReading"
        },

        {
          title: "Learning Web Development with React and Bootstrap",
          authors: ["Harmeet Singh", "Mehul Bhatt"],
          imageLinks: {
            thumbnail:
              "http://books.google.com/books/content?id=sJf1vQAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
          },
          id: "sJf1vQAACAAJ",
          shelf: "currentlyReading"
        },

        {
          title: "Lords of Finance",
          authors: ["Liaquat Ahamed"],
          imageLinks: {
            thumbnail:
              "http://books.google.com/books/content?id=74XNzF_al3MC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
          },
          id: "74XNzF_al3MC",
          shelf: "wantToRead"
        },
        {
          title: "Satire TV",
          authors: ["Jonathan Gray", "Jeffrey P. Jones", "Ethan Thompson"],
          imageLinks: {
            thumbnail:
              "http://books.google.com/books/content?id=1wy49i-gQjIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
          },
          id: "1wy49i-gQjIC",
          shelf: "read"
        }
      ],

    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
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
              <Bookshelf books={this.state.books} bookshelf={this.state.bookshelves[0]} />
              <Bookshelf books={this.state.books} bookshelf={this.state.bookshelves[1]} />
              <Bookshelf books={this.state.books} bookshelf={this.state.bookshelves[2]} />
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
