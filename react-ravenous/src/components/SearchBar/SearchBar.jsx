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
  const [sorting, setSorting] = useState("best_match");

  const getSortByClass = (sortByOption) => {
    if (sorting === sortByOption) {
      return styles.active;
    }
    return "";
  };

  const handleSorting = (sortByOption) => {
    setSorting(sortByOption);
  };  

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  
  const handleLocation = (event) => {
    setLocation(event.target.value);
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    searchYelp(searchTerm, location, sorting);
  }


  const renderSortByOptions = () => {
    return Object.keys(sortByOptions).map((sortByOption) => {
      let sortByOptionValue = sortByOptions[sortByOption];
      return (
        <li
          className={getSortByClass(sortByOptionValue)} 
          key={sortByOptionValue}
          onClick={() => {
            handleSorting(sortByOptionValue);
          }}
        >
          {sortByOption}
        </li>
      );
    });
  }


  return (
    <div className={styles.SearchBar}>
      <div className={styles.SearchBarSortOptions}>
        <ul>{renderSortByOptions()}</ul>
      </div>
      <form onSubmit={handleSubmit}>
        <div className={styles.SearchBarFields}>
          <input
            type="text"
            placeholder="Search Businesses"
            //value={searchTerm}
            onChange={handleSearchChange}
          />
          <input 
            type="text"
            placeholder="Where?"
            //value={location}
            onChange={handleLocation}
          />
        </div>
        <div className={styles.SearchBarSubmit}>
          <button type="submit">Let's go!</button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;


// sort_by on Yelp API