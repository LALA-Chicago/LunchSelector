import React from 'react'
import { HashRouter, Routes, Route, link} from 'react-router-dom'
// import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
// import { setContext } from '@apollo/client/link/context'
import Main from './components/Main'
import NavBar from './components/menu/NavBar'
import './App.css';

function App() {
  return (
    //the navbar and section on lines 13 and 14 should be removed
    //truing to get them on main to only have main here but i cant get it yet

  <HashRouter>
   
    
    <div className="App">
     
      <NavBar />
      <Main />
      
      <Routes>
      {/* <Main /> */}
      <Route path='' element={<Main />} />
      {/* <Route path='about' element={<About />} />
      <Route path='portfolio' element={<Projects />} /> */}
    </Routes>
    </div>
    
  </HashRouter>
  );
}

export default App;
