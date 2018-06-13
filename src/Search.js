import React, { Component } from "react";
import { Link } from "react-router-dom";
import Book from "./Book";
import * as BooksAPI from "./BooksAPI";

class Search extends Component {
  state = {
    query: "",
    searchResults: []
  };

  updateQuery = query => {
    this.setState({ query: query.trim() });
  };

  //TODO: figure out why all books on search page default to "Currently Reading"

  assignShelf = (items, shelvedBooks) => {
    items.map(book => {
      const match = shelvedBooks.filter(b => book.id === b.id);
      if (match.length > 0) {
        book.shelfCode = match[0].shelfCode;
      } else {
        book.shelfCode = "none";
      }
      return match;
    });
    return items;
  };

  searchBook = query => {
    this.updateQuery(query);
    if (query) {
      BooksAPI.search(query).then(books => {
        if (!books.error) {
          this.setState({
            searchResults: this.assignShelf(books, this.props.assignedBooks)
          });
        } else {
          this.setState({ searchResults: [] });
        }
      });
    } else {
      this.setState({ searchResults: [] });
    }
  };

  render() {
    return (
      <div>
        <h1>Search Form</h1>
        <div className="search-books">
          <div className="search-books-bar">
            <Link to={{ pathname: "/" }} className="close-search">
              Close
            </Link>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title or author"
                onChange={event => this.searchBook(event.target.value)}
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
              {this.state.searchResults.map(book => (
                <Book
                  book={book}
                  key={book.id}
                  onChangeShelf={this.props.onChangeShelf}
                />
              ))}
            </ol>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
