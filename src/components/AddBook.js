import React, { Component } from 'react'
import { getAuthorsQuery, addBookMutation, getBooksQuery } from '../queries/queries'
import { graphql } from 'react-apollo';
// new apollo version use this way of compose
import { flowRight as compose } from 'lodash';

class AddBook extends Component {
 constructor(props) {
  super(props);
  this.state = {
   name: '',
   genre: '',
   authorId: ''
  };
 }


 displayAuthors() {
  let data = this.props.getAuthorsQuery;
  if (data.loading) {
   return (<option>Loading authors...</option>)
  } else {
   return data.authors.map(author => (
    <option key={author.id} value={author.id}>{author.name}</option>
   ))
  }

 }

 submitForm = (e) => {
  e.preventDefault()
  this.props.addBookMutation({
   variables: {
    name: this.state.name,
    genre: this.state.genre,
    authorId: this.state.authorId
   },
   refetchQueries: [{ query: getBooksQuery }]
  });

 }
 render() {
  return (
   <>
    <form id="add-book" onSubmit={this.submitForm}>
     <div className="field">
      <label htmlFor="">Book name</label>
      <input type="text" onChange={(e) => this.setState({ name: e.target.value })} />
     </div>
     <div className="field">
      <label htmlFor="">Genre</label>
      <input type="text" onChange={(e) => this.setState({ genre: e.target.value })} />
     </div>
     <div className="field">
      <label htmlFor="">Author</label>
      <select onChange={(e) => this.setState({ authorId: e.target.value })}>
       <option>Select author</option>
       {this.displayAuthors()}
      </select>
     </div>
     <button >Add Book</button>
    </form>
   </>
  )
 }
}


export default compose(
 graphql(getAuthorsQuery, { name: "getAuthorsQuery" }),
 graphql(addBookMutation, { name: "addBookMutation" })
)(AddBook);