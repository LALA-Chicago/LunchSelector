import React, { useState } from 'react'
import { HashRouter, Router, Route,Routes} from 'react-router-dom'
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context'
import { Modal } from 'react-bootstrap';

import Main from './components/Main'
import NavBar from './components/NavBar'
import Saved from './components/Saved'
import Form from './components/Form'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


const url = process.env.NODE_ENV === 'development'
    ? '/graphql' : 'https://boiling-badlands-98104.herokuapp.com/graphql';
const httpLink = createHttpLink({
  uri: url
})

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});



const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {

  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);

  const handleShow = () => setShowModal(true);

  return (
    
  <ApolloProvider client={client}>
    <HashRouter>      
      <div className="App">
        {/* <Nav /> */}
        <NavBar />
        <br></br>
        <br></br>
        <Main />
        <br></br>
        <br></br>
        <Form />

        <Modal show={showModal} onHide={handleClose} centered>
        <Routes>
          {/* <Route path="/" element={<Form />} /> */}
          <Route path="/saved" element={<Saved />} />
        </Routes>
        </Modal>
      

        <br></br>     
      </div>
      
    </HashRouter>

  </ApolloProvider>
  );
}

export default App;
