import { useState } from 'react'
import styles from './App.module.css'
import BusinessList from './components/BusinessList/BusinessList';
import SearchBar from './components/SearchBar/SearchBar';

const business = {
  imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
  name: 'Pizzaria Luigi',
  address: '2727 Wadsworth Blvd',
  city: 'Denver',
  state: 'CO',
  zip: '80223',
  category: 'Italian',
  rating: 4.6,
  reviewCount: 90
};

const businessTwo = {
  imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
  name: 'Pizzaria Leopoldio',
  address: '1394 Federal Blvd',
  city: 'Denver',
  state: 'CO',
  zip: '80211',
  category: 'Italian',
  rating: 4.3,
  reviewCount: 130
}

 const businesses = [business, businessTwo, business, businessTwo, business, businessTwo];


function App() {
  const searchYelp = (searchTerm, location, sorting) => {
    console.log(`Searching Yelp with ${searchTerm}, ${location}, ${sorting}.`);
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