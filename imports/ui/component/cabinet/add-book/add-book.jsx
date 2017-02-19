import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import HeadCab from '../header-cabinet/header-cabinet.jsx';
import Footer from '../../footer/footer.jsx';
import SearchAddBook from './search-add-book.jsx';
import './add-book.css';
import { Books } from '../../../../api/books.js';
import { HTTP } from 'meteor/http';


class AddBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrBooks: [],
      limitBook: 4
    };

    this.searchBook = this.searchBook.bind(this);

  }

  searchBook() {
    //console.log(this.refs.searchBook.value.split(/[ ]+/).join('+'));
    Meteor.call('getIsdnApi', this.refs.searchBook.value.split(/[ ]+/).join("+"), (error, result) => {
      if (!error) {
        if (JSON.parse(result.content).result_count > 0) {
          this.setState({
            limitBook: JSON.parse(result.content).data.length >= this.state.limitBook ? this.state.limitBook : JSON.parse(result.content).data.length
          });
          this.setState({
            arrBooks: JSON.parse(result.content).data.slice(0, this.state.limitBook).map( (book) => {
                      return {
                        author: book.author_data[0].name,
                        title: book.title,
                        ISDN: book.isbn13,
                        published: book.publisher_text
                      };
                  })
          });
          this.refs.statusSearchBook.innerHTML = "";
        }
        else {
          this.refs.statusSearchBook.innerHTML = "Book is ansent!";
        }
      }
      else {
        this.refs.statusSearchBook.innerHTML = "Book is ansent!";
      }

    });
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
    						<div className = "add-field">
    							<h3 className = "title-add">Add book</h3>
                    <div className="searchISDN">
                      <p className="helpText">Add and search by name book with using ISBN</p>
                      <a href="http://isbndb.com/">http://isbndb.com/</a>
                      <p>Name book</p>
                      <input type="text" ref="searchBook"></input>
                      <p className="helpText" ref="statusSearchBook"></p>
                      <button className="btn btn-success add-btn-success" onClick={this.searchBook}>Search</button>
                    </div>
                    <SearchAddBook searchedBooks={this.state.arrBooks} />
    						</div>
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

export default AddBook;
