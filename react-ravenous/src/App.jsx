import { useState } from 'react'
import styles from './App.module.css'
import Business from './components/Business/Business';
import BusinessList from './components/BusinessList/BusinessList';
import SearchBar from './components/SearchBar/SearchBar';


function App() {

  return (
    <div className={styles.App}>
     <h1>Ravenoius Test Page</h1>
     <p>This is just a tasty test.</p>
     <SearchBar />
     <BusinessList />
    </div>
  )
}

export default App