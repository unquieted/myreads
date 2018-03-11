import React, { Component } from 'react'
import Book from './Book'

class Bookshelf extends Component {

  render() {

    return (

<div>
      <div className="bookshelf">
        <h2 className="bookshelf-title">Currently Reading</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            <li>
              <Book books={this.props.books.filter(book => book.shelf === 'currentlyReading')}/>
            </li>
          </ol>
        </div>
      </div>

      <div className="bookshelf">
        <h2 className="bookshelf-title">Want to Read</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            <li>
              <Book books={this.props.books.filter(book => book.shelf === 'wantToRead')}/>
            </li>
          </ol>
        </div>
      </div>

      <div className="bookshelf">
        <h2 className="bookshelf-title">Already Read</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            <li>
              <Book books={this.props.books.filter(book => book.shelf === 'read')}/>
            </li>
          </ol>
        </div>
      </div>

</div>

    )
  }
}

export default Bookshelf
