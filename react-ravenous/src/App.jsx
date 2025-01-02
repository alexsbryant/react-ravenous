import { useState } from 'react'
import styles from './App.module.css'
import Business from './components/Business/Business';
import BusinessList from './components/BusinessList/BusinessList';
import SearchBar from './components/SearchBar/SearchBar';


function App() {

  return (
    <div className={styles.App}>
     <h1>Ravenous</h1>
     <SearchBar />
     <BusinessList />
    </div>
  );
};

export default App;