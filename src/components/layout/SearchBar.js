import React, {useRef} from 'react';   // useRef is used to get the value from our form
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {searchLogs} from '../../actions/logActions';

const SearchBar = ({ searchLogs }) => {
  const text = useRef('');

  const onChange = e => {
    searchLogs(text.current.value);
  };
    return (
    // goto materializecss.com then click on component then Navbar and copy the search bar
    // make user a closing tage is added to the input
    <nav style={{ marginBottom: '30px' }} className='blue'>
      <div className='nav-wrapper'>
        <form>
          <div className='input-field'>
            <input id='search' type='search' placeholder='Search Logs...' ref={text} onChange={onChange}/>
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
SearchBar.propTypes = {
  searchLogs: PropTypes.func.isRequired
};

export default connect(
  null,
  { searchLogs }
)(SearchBar);