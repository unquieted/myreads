import React, { Component } from "react";

class Book extends Component {
  constructor(props) {
    super(props);
    this.state = { value: this.props.book.shelf };
  }

  render() {
    const book = this.props.book;

    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage: `url(${
                  this.props.book.imageLinks
                    ? this.props.book.imageLinks.thumbnail
                    : "https://books.google.com/googlebooks/images/no_cover_thumb.gif"
                })`
              }}
            />

            <div className="book-shelf-changer">
              <select
                value={book.shelf}
                onChange={event => {
                  console.log(
                    "Book.js event.target.value is : " + event.target.value
                  );
                  console.log(
                    "Book.js selected book title is : " +
                      book.title +
                      " on the " +
                      book.shelf +
                      "shelf"
                  );
                  this.props.onChangeShelf(book, event.target.value);
                }}
              >
                <option value="none" disabled>
                  Move to...
                </option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{this.props.book.title}</div>
          <div className="book-authors">
            {this.props.book.authors ? (
              <span>
                {this.props.book.authors.map(author => (
                  <div key={author}>{author}</div>
                ))}
              </span>
            ) : (
              <span> Author not found </span>
            )}
          </div>
        </div>
      </li>
    );
  }
}

export default Book;
