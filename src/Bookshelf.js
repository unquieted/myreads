import React, { Component } from "react";
import Book from "./Book";

class Bookshelf extends Component {
  render() {
    return (
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">{this.props.bookshelf.shelfName}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {this.props.books
                .filter(book => book.shelf === this.props.bookshelf.shelfCode)
                .map(book => (
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

export default Bookshelf;
