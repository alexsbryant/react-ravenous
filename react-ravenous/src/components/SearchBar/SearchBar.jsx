import React, {useState} from 'react';
import styles from './SearchBar.module.css';

const sortByOptions = {
  "Best Match": "best_match",
  "Highest Rated": "rating",
  "Most Reviewed": "review_count"
};

const SearchBar = ({ searchYelp }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [sortBy, setSortBy] = useState("best_match");

  const getSortByClass = (sortByOption) => {
    if (sortBy === sortByOption) {
      return styles.active;
    }
    return "";
  };

  const handleSortBy = (sortByOption) => {
    setSortBy(sortByOption);
  };  

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  
  const handleLocation = (event) => {
    setLocation(event.target.value);
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    searchYelp(searchTerm, location, sortBy);
  }


  const renderSortByOptions = () => {
    return Object.keys(sortByOptions).map((sortByOption) => {
      let sortByOptionValue = sortByOptions[sortByOption];
      return (
        <li
          className={getSortByClass(sortByOptionValue)} 
          key={sortByOptionValue}
          onClick={() => {
            handleSortBy(sortByOptionValue);
          }}
        >
          {sortByOption}
        </li>
      );
    });
  };


  return (
    <div className={styles.SearchBar}>
      <div className={styles.SearchBarSortOptions}>
        <ul>{renderSortByOptions()}</ul>
      </div>
      <form onSubmit={handleSubmit}>
        <div className={styles.SearchBarFields}>
          <input
            placeholder="Search Businesses"
            onChange={handleSearchChange}
          />
          <input 
            placeholder="Where?"
            onChange={handleLocation}
          />
        </div>
        <div className={styles.SearchBarSubmit}>
          <button type="submit">Let's Go!</button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
