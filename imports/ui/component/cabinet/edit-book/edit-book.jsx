import HeadCab from '../header-cabinet/header-cabinet.jsx';
import Footer from '../../footer/footer.jsx';
import ClassLiEditBook from './class-li-edit-book';
import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import './edit-book.css';
import { Books } from '../../../../api/books.js';


class EditBook extends Component {
  constructor(props) {
    super(props);
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
                  <ul className = "list-book-edit">
                  <h3>Edit books</h3>
                     <ClassLiEditBook bookForLi={this.props.bookDetail} />
                  </ul>
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

EditBook.propTypes = {
  bookDetail: PropTypes.object.isRequired
};

export default createContainer((props) => {
  console.log(props.location.query.book);
  return {
    bookDetail: Books.findOne({"_id": props.location.query.book}) || {},
  };
}, EditBook);
