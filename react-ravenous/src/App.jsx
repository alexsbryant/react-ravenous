import { useState } from 'react'
import './App.css'
import Business from './components/Business/Business';
import BusinessList from './components/BusinessList/BusinessList';
import SearchBar from './components/SearchBar/SearchBar';


function App() {

  return (
    <>
     <h1>Ravenoius Test Page</h1>
     <p>This is just a tasty test.</p>
     <SearchBar />
     <BusinessList />
    </>
  )
}

export default App