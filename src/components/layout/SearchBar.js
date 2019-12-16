import React from 'react';

const SearchBar = () => {
  return (
    // goto materializecss.com then click on component then Navbar and copy the search bar
    // make user a closing tage is added to the input
    <nav style={{ marginBottom: '30px' }} className='blue'>
      <div className='nav-wrapper'>
        <form>
          <div className='input-field'>
            <input id='search' type='search' required />
            <label className='label-icon' htmlFor='search'>
              <i className='material-icons'>search</i>
            </label>
            <i className='material-icons'>close</i>
          </div>
        </form>
      </div>
    </nav>
  );
};
export default SearchBar;
