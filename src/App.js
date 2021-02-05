import React, { Component } from 'react'
import BookList from './components/BookList'
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from "react-apollo";
import AddBook from './components/AddBook';



//apollo client setup, connect to backend url
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',

});

export class App extends Component {
  render() {
    return (
      <>
        <ApolloProvider client={client}>
          <div className="main">
            <h1>Brenda's Reading List</h1>
            <BookList />
            <AddBook />
          </div>
        </ApolloProvider>
      </>
    )
  }
}

export default App
