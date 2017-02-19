import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import HeadCab from '../header-cabinet/header-cabinet.jsx';
import Footer from '../../footer/footer.jsx';
import FileReaderInput from 'react-file-reader-input';
import './add-book.css';
import { Books } from '../../../../api/books.js';
import { HTTP } from 'meteor/http';


class SearchAddBook extends Component {
  constructor(props) {
    super(props);

    this.state = {
      file: '',
      imagePreviewUrl: ''
    }

    this.addBooks = this.addBooks.bind(this);
    this.searchedBook = this.searchedBook.bind(this);
    this.addSearchedBook = this.addSearchedBook.bind(this);
    this.changeUploadImg = this.changeUploadImg.bind(this);
  }

  changeUploadImg(e) {
   e.preventDefault();

   let reader = new FileReader();
   let file = e.target.files[0];

   reader.onloadend = () => {
     this.setState({
       file: file,
       imagePreviewUrl: reader.result
     });
   }

   reader.readAsDataURL(file)
 }

  addBooks(event) {
    event.preventDefault();

    const newBook = {
      authorBook: this.refs.authorBook.value,
      nameBook: this.refs.nameBook.value,
      ISBN: this.refs.ISBN.value,
      dataPublished: this.refs.dataPublished.value,
      photoBook: this.state.file,
      createdAt: new Date() // current time
    };

    Meteor.call('book.insert', newBook, (err, result) => {
      if(err) {
        this.refs.statusAdded.innerHTML = "Error!"
      }
      else {
        // Clear form
        this.refs.authorBook.value = "";
        this.refs.nameBook.value = "";
        this.refs.ISBN.value = "";
        this.refs.dataPublished.value = "";
        this.refs.imgBook.value = "";

        this.refs.statusAdded.innerHTML = "You successfully added book!";
      }
    });
  }

  addSearchedBook(e) {
    //console.log(e.target.parentElement.querySelector(".SauthorName").innerHTML);
    this.refs.authorBook.value = e.target.parentElement.querySelector(".SauthorName").innerHTML;
    this.refs.nameBook.value  = e.target.parentElement.querySelector(".SbookName").innerHTML;
    this.refs.ISBN.value  = e.target.parentElement.querySelector(".Sisdn").innerHTML;
    this.refs.dataPublished.value  = e.target.parentElement.querySelector(".Spublished").innerHTML;

  }

  searchedBook() {
    return this.props.searchedBooks.map( (book) => (
      <li className="li-searched-book">
        <div className="searchedData">
          <div ref="SauthorName" className="SauthorName">{book.author}</div>
          <div ref="Sisdn" className="Sisdn">{book.ISDN}</div>
          <div ref="SbookName" className="SbookName">{book.title}</div>
          <div ref="Spublished" className="Spublished">{book.published}</div>
        </div>
        <button className="btn btn-success add-btn-success bth-searched" onClick={this.addSearchedBook}>Add</button>
      </li>
      ));
  }

  render() {
    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} />);
    } else {
      $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
    }
    return (
      <div>
        {this.searchedBook()}
        <p className="helpText">or add manually</p>
        <form onSubmit = {this.addBooks}>
          <p>Author</p>
					<input type = "text" name = "author-book" ref="authorBook" />
					<p>Name book</p>
					<input type = "text" name = "name-book" ref="nameBook" />
					<p>ISBN</p>
					<input type = "text" name = "isbn-book" ref="ISBN"/>
					<p>Data published</p>
					<input type = "text" name = "published-book" ref="dataPublished" className="add-published-book" />
          <p>Book photo</p>
          <input type="file" onChange={this.changeUploadImg} ref="imgBook"/>
            <div className="imgPreview">
            {$imagePreview}
          </div>
          <p className="statusAdded" ref="statusAdded"></p>
					<button className = "btn btn-success add-btn-success">Add book</button>
        </form>
      </div>
    );
  }
}

SearchAddBook.propTypes = {
  searchedBooks: PropTypes.array.isRequired,
};

export default SearchAddBook;
