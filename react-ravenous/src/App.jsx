import { useState } from 'react'
import styles from './App.module.css'

import BusinessList from './components/BusinessList/BusinessList';
import SearchBar from './components/SearchBar/SearchBar';
import Yelp from './utils/YelpAPI';

function App() {
  const [businesses, setBusinesses] = useState([]);

  const searchYelp = async (searchTerm, location, sortBy) => {
    const businesses = await Yelp.search(searchTerm, location, sortBy);
    setBusinesses(businesses);
  };

  return (
    <div className={styles.App}>
     <h1>ravenous</h1>
     <SearchBar searchYelp={searchYelp} />
     <BusinessList businesses={businesses} />
    </div>
  );
};

export default App;