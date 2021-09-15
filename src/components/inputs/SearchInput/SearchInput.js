import React from 'react';
import PropTypes from 'prop-types';

import './SearchInput.css';

function SearchInput(props) {
  return (
    <div className="SearchInput input-group my-3">
      <span className="input-group-text">
        <i className={props.iconClass}></i>
      </span>
      <input 
        type="text"
        className="form-control"
        placeholder={props.placeholder}
        onChange={props.onSearchInputChange}
      />
    </div>
  );
}

SearchInput.propTypes = {
  onSearchInputChange: PropTypes.func,
  iconClass: PropTypes.string,
  placeholder: PropTypes.string,
}

SearchInput.defaultProps = {
  onSearchInputChange: (e) => { console.log(e.target.value) },
  iconClass: 'bi bi-search',
  placeholder: 'Artist, album or tags',
}

export default SearchInput