import HeadCab from '../header-cabinet/header-cabinet.jsx';
import Footer from '../../footer/footer.jsx';
import ListBook from './list-book.jsx';
import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { browserHistory } from "react-router";
import './list-book.css';

class WrapperListBook extends Component {
  constructor(props){
    super(props);

    this.state = {
      limitBook: 10,
      stepLimitBook: 10,
      user: Meteor.user()
    };

    this.nextTenBooks = this.nextTenBooks.bind(this);
    this.addBook = this.addBook.bind(this);
  }

  addBook() {
    browserHistory.push('/addbook');
  }

  nextTenBooks() {
    this.setState({ limitBook: this.state.limitBook + this.state.stepLimitBook});
  }

  render() {
    return (

        <div className = "wrapper">
          < HeadCab />
          <div className="main-content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-1 col-md-1 col-sm-0"></div>
                <div className="main-content-padding col-lg-10 col-md-10 col-sm-12" >
                    <button className = "btn btn-primary add-book" onClick={this.addBook}>Add book</button>
                    <ListBook limitBook={this.state.limitBook} userAccount={this.state.user} />
                    <button className = "btn btn-primary next-book" onClick={this.nextTenBooks}>Next 10 books</button>
                </div>
                <div className="col-lg-1 col-md-1 col-sm-0"></div>
              </div>
            </div>
          </div>
          < Footer />
      </div>
    );
  }
}

WrapperListBook.propTypes = {
};

export default createContainer(() => {
  return {
  };
}, WrapperListBook);
