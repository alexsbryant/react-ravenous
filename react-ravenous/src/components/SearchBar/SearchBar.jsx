import React, {useState} from 'react';

const sortByOptions= {
  "Best Match": "best_match",
  "Highest Rated": "rating",
  "Most Reviewed": "review_count"
}

function SearchBar() => {
  const renderSortByOptions = () => {
    return Object.keys(sortByOptions).map((sortByOption) => {
      let sortByOptionValue = sortByOptions[sortByOption];
      return <li key={sortByOptionValue}>{sortByOption}</li>;
    })
  }
  


  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
        />
        <input 
          type="text"
          placeHolder="Where?"
        />
      </form>
    </div>
  )
}

export default SearchBar

/*      
        Ideas for how this could work:
        - Current event onChange state
        - Compare state with results from BusinessList doc
        - Format the search bar from the 'form' jsx?

*/

  /*const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value); // call onSearch with updated value

  }*/