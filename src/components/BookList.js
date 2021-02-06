import React, { Component } from 'react'
import { getBooksQuery } from '../queries/queries'
import { graphql } from 'react-apollo';
import BookDetails from './BookDetails'



class BookList extends Component {

 state = {
  selected: null
 }


 displayBooks() {
  let data = this.props.data;
  if (data.loading) {
   return (<div>loading books....</div>)
  } else {
   return data.books.map(book => (<li key={book.id} onClick={(e) => this.setState({ selected: book.id })}>{book.name}</li>))
  }
 }
 render() {

  return (
   <div className="books">
    <ul className="book-list">
     {this.displayBooks()}
    </ul>
    <BookDetails bookId={this.state.selected} />
   </div>
  )
 }
}

export default graphql(getBooksQuery)(BookList)
