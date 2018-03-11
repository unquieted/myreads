import React, { Component } from "react";
import Book from "./Book";

class Bookshelf extends Component {
  render() {
    return (
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Currently Reading</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {this.props.books
                .filter(book => book.shelf === "currentlyReading")
                .map(book => <Book book={book} />)}
            </ol>
          </div>
        </div>

        <div className="bookshelf">
          <h2 className="bookshelf-title">Want To Read</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {this.props.books
                .filter(book => book.shelf === "wantToRead")
                .map(book => <Book book={book} />)}
            </ol>
          </div>
        </div>

        <div className="bookshelf">
          <h2 className="bookshelf-title">Already Read</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {this.props.books
                .filter(book => book.shelf === "read")
                .map(book => <Book book={book} />)}
            </ol>
          </div>
        </div>
      </div>
    );
  }
}

export default Bookshelf;
