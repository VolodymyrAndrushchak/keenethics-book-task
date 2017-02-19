import ReactDOM from 'react-dom';
import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { browserHistory } from "react-router";
import './edit-book.css';

class ClassLiEditBook extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.bookForLi._id || "",
      authorBook: this.props.bookForLi.authorBook || "",
      nameBook: this.props.bookForLi.nameBook || "",
      isbn: this.props.bookForLi.ISBN || "",
      dataPublished: this.props.bookForLi.dataPublished || ""
    }

    this.deleteBook = this.deleteBook.bind(this);
    this.editBook = this.editBook.bind(this);
    this.changeName = this.changeName.bind(this);
    this.changeBookName = this.changeBookName.bind(this);
    this.changeISBN = this.changeISBN.bind(this);
    this.changeDataPublished = this.changeDataPublished.bind(this);

  }

  deleteBook() {
    Meteor.call('book.remove', this.props.bookForLi._id);
    browserHistory.push('/cabinet');
  }

  editBook() {
    const objBook = {
      authorBook: this.refs.authorBook.value,
      nameBook: this.refs.nameBook.value,
      ISBN: this.refs.isbnBook.value,
      dataPublished: this.refs.publishedBook.value,
      createdAt: new Date()
    }

    Meteor.call('book.edit', this.state.id, objBook);
    this.refs.statusEditBook.innerHTML = "You successfully edited book!"
  }

  changeName(event) {
    this.setState({authorBook: event.target.value});
  }
  changeBookName(event) {
    this.setState({nameBook: event.target.value});
  }

  changeISBN(event) {
    this.setState({isbn: event.target.value});
  }

  changeDataPublished(event) {
    this.setState({dataPublished: event.target.value});
  }


  render() {
    return (
         <li>
          <div className = "origin-field">
            <div className = "author-book">{this.props.bookForLi.authorBook}</div>
            <div className = "data-published">{this.props.bookForLi.dataPublished}</div>
            <div className = "name-book">{this.props.bookForLi.nameBookr}</div>
          </div>
          <div className = "edit-filed">
            <p>Author</p>
            <input type = "text" name = "author-book" ref="authorBook"  value={this.state.authorBook} onChange={this.changeName}  />
            <p>Name book</p>
            <input type = "text" name = "name-book" ref="nameBook" value={this.state.nameBook} onChange={this.changeBookName} />
            <p>ISBN</p>
            <input type = "text" name = "isbn-book" ref="isbnBook" value={this.state.isbn} onChange={this.changeISBN} />
            <p>Data published</p>
            <input type = "text" name = "published-book" ref="publishedBook" value={this.state.dataPublished} onChange={this.changeDataPublished} />
          </div>
          <p ref="statusEditBook" className = "statusAdded"></p>
          <button className = "btn btn-danger" onClick={this.deleteBook}>Delete</button>
          <button className = "btn btn-success success-button" onClick={this.editBook}>Confirm</button>
        </li>
    );
  }
}

ClassLiEditBook.propTypes = {
  bookForLi: PropTypes.object.isRequired
};

export default ClassLiEditBook;
