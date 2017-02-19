import ClassListBook from './class-list-book.jsx';
import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { browserHistory } from "react-router";
import './list-book.css';
import { Books } from '../../../../api/books.js';

class ListBook extends Component {
  constructor(props){
    super(props);
  }

  renderBooks(){
    return this.props.books.map((book) => (
        <ClassListBook key={book._id} book={book} />
    ));
  }

  render() {
    return (
        <ul className = "list-book">
          {this.renderBooks()}
        </ul>
    );
  }
}

ListBook.propTypes = {
  books: PropTypes.array.isRequired,
  limitBook: PropTypes.number.isRequired,
  userAccount: PropTypes.object.isRequired,
};

export default createContainer((props) => {
  Meteor.subscribe('books', props.limitBook);
  return {
    books: Books.find({}).fetch(),
  };
}, ListBook);
