import React from 'react'
import { HashRouter} from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context'
import Main from './components/Main'
import NavBar from './components/NavBar'
import Form from './components/Form'
import Nav from './components/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// const httpLink = createHttpLink({
//   uri: '/graphql',
// });

const url = process.env.NODE_ENV === 'development'
    ? '/graphql' : 'https://boiling-badlands-98104.herokuapp.com/';
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
  return (
    //the navbar and section on lines 13 and 14 should be removed
    //truing to get them on main to only have main here but i cant get it yet
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

      <br></br>

          {/* <nav>
            <Link to='login'>Login</Link>
            <Link to='signup'>Sign Up</Link>
          </nav>
          <Routes>
            <Route path='login' element={<Login />} />
            <Route path='signup' element={<SignUp />} />
          </Routes> */}
        

      
    </div>
    
  </HashRouter>
  </ApolloProvider>
  );
}

export default App;
