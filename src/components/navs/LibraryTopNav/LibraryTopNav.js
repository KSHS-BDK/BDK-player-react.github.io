import React from 'react';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';

import './LibraryTopNav.css';

function LibraryTopNav(props) {

  const onNavItemClick = (e) => {
    e.preventDefault();
    props.onNavClick(e.target.name);
  }

  const navItems = props.navs.map((nav, index) => {
    return (
      <li className="nav-item" key={`${index}-${nav.title}`}>
        <button 
          className={`nav-link ${nav.value === props.currentNavigation? 'active': ''}`}
          name={nav.value}
          onClick={onNavItemClick}
          value={nav.value}
        >
          {nav.title}
        </button>
      </li>
    );
  })

  return (
    <div className='LibraryTopNav' >
      <ul className="nav nav-pills">
        {navItems}
      </ul>
    </div>
  );
}

LibraryTopNav.propTypes = {
  navs: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    value: PropTypes.string,
  })),
  currentNavigation: PropTypes.string,
  onNavClick: PropTypes.func,
}

LibraryTopNav.defaultProps = {
  navs: [],
  currentNavigation: 'all',
  onNavClick: (e) => {console.log(e)},
}

export default LibraryTopNav