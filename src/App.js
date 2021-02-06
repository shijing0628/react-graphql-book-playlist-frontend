import React, { Component } from 'react'
import BookList from './components/BookList'
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from "react-apollo";
import AddBook from './components/AddBook';
import Footer from './components/Footer';



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
            <p className="desc">Get data from mongodb through graphql</p>
            <BookList />
            <AddBook />
            <Footer />
          </div>
        </ApolloProvider>

      </>
    )
  }
}

export default App
