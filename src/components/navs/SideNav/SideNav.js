import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

import './SideNav.css';

import * as ROUTES from '../../../utils/routes';

function SideNav(props) {
  return (
    <div className='SideNav container-fluid' >
      <div className="nav-header">
        <h2 className="fs-3 py-4 px-2">
          <i className="bi bi-youtube"></i>
          <span>{props.navTitle}</span>
        </h2>
      </div>
      <div className="nav-nav pt-2">
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link className="nav-link text-secondary active" id="nav-home" to={ROUTES.HOME}>
              <i className="bi-house-door"></i>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-secondary" id="nav-search" to={ROUTES.SEARCH}>
              <i className="bi-search"></i>
              Search
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-secondary" id="nav-library" to={ROUTES.LIBRARY}>
              <i className="bi-archive"></i>
              Library
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-secondary" id="nav-playlist" to={ROUTES.PLAYLIST}>
              <i className="bi bi-collection-play"></i>
              Playlist
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

SideNav.propTypes = {
  navTitle: PropTypes.string,
}

SideNav.defaultProps = {
  navTitle: 'Spotikai',
}

export default SideNav