import React, { Component, PropTypes } from 'react';
import {Link, browserHistory } from 'react-router';

export default class ClassListBook extends Component {

  constructor(props) {
    super(props);

    this.deleteBook = this.deleteBook.bind(this);
    this.editPage = this.editPage.bind(this);
  }

  deleteBook() {
    Meteor.call('book.remove', this.props.book._id);
  }

  editPage() {
    browserHistory.push({ pathname: '/editbook', query: { book: this.props.book._id } });
  }

  render() {
    return (
      <li>
        <div className="book-data">
          <div className="author-book">Author: {this.props.book.authorBook}</div>
          <div className="name-book">Book:{this.props.book.nameBook}, published {this.props.book.dataPublished}. </div>
        </div>
        <div className="book-options">
          {/*<button className="btn btn-primary btn-edit-book" onClick={this.editPage}>Edit</button><br/>*/}
          <button className="btn btn-primary btn-edit-book" onClick = {this.editPage}>Edit</button><br/>
          <button className="btn btn-danger btn-del-book" onClick = {this.deleteBook}>Delete</button>
        </div>
      </li>
    );
  }
}

ClassListBook.propTypes = {
  // This component gets the task to display through a React prop.

  // We can use propTypes to indicate it is required
  book: PropTypes.object.isRequired,

};
