import React, {useState} from 'react';
import styles from './SearchBar.module.css';

const sortByOptions = {
  "Best Match": "best_match",
  "Highest Rated": "rating",
  "Most Reviewed": "review_count"
};

// sort_by on Yelp API

const SearchBar = () => {
  const renderSortByOptions = () => {
    return Object.keys(sortByOptions).map((sortByOption) => {
      let sortByOptionValue = sortByOptions[sortByOption];
      return <li key={sortByOptionValue}>{sortByOption}</li>;
    });
  };
  


  return (
    <div className={styles.SearchBar}>
      <div className={styles.SearchBarSortOptions}>
        <ul>{renderSortByOptions()}</ul>
      </div>
      <div className={styles.SearchBarFields}>
        <input
          type="text"
          placeholder="Search Businesses"
          //value={searchTerm}
          //onChange={handleSearch}
        />
        <input 
          type="text"
          placeholder="Where?"
        />
      </div>
      <div className={styles.SearchBarSubmit}>
        <a>Let's Go!</a>
      </div>
    </div>
  );
};

export default SearchBar;
