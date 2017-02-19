import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

export const Books = new Mongo.Collection('books');

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('books', function booksPublication(limitBook) {
    return Books.find({owner: this.userId }, {limit: limitBook});
  });

  Meteor.methods({

    'book.insert'(book) {
      check(book, Object);

      if (!this.userId) {
        throw new Meteor.Error('not-authorized');
      }

      Books.insert({
        owner: Meteor.user()._id,
        authorBook: book.authorBook,
        nameBook: book.nameBook,
        ISBN: book.ISBN,
        imgBook: book.photoBook,
        dataPublished: book.dataPublished,
        createdAt: book.createdAt, // current time
      });
    },

    'book.remove'(bookId) {
      check(bookId, String);

      if (!this.userId) {
        throw new Meteor.Error('not-authorized');
      }

      Books.remove(bookId);
    },

    'book.edit'(bookId, book) {

      if (!this.userId) {
        throw new Meteor.Error('not-authorized');
      }

      Books.update(
        bookId,
        {
          '$set': {
            authorBook: book.authorBook,
            nameBook: book.nameBook,
            ISBN: book.ISBN,
            dataPublished: book.dataPublished,
            createdAt: book.createdAt
          }
        }
      );
    },

    'getIsdnApi'(nameBook) {
    return  Meteor.http.get(`http://isbndb.com/api/v2/json/RA9X0WRS/books?q=${nameBook}&p=1&i=publisher_name`, {headers: {'Content-Type': 'application/json'}});
    }
  });

}
