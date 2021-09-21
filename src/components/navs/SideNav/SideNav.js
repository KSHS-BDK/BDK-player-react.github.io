import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom'

import Spotify from '../../../assets/spotify.svg';

import './SideNav.css';

import * as ROUTES from '../../../utils/routes';

function SideNav(props) {
  return (
    <div className='SideNav container-fluid' >
      <div className="nav-header">
        <h2 className="fs-4 py-4 px-2">
          <img src={Spotify} alt='logo' width={40} height={40} />
          <span className='ps-2'>{props.navTitle}</span>
        </h2>
      </div>
      <div className="nav-nav">
        <ul className="nav flex-column">
          <li className="nav-item">
            <NavLink className="nav-link text-secondary" id="nav-home" to={ROUTES.HOME}>
              <i className="bi-house-door"></i>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-secondary" id="nav-search" to={ROUTES.SEARCH}>
              <i className="bi-search"></i>
              Search
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-secondary" id="nav-library" to={ROUTES.LIBRARY}>
              <i className="bi-archive"></i>
              Library
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-secondary" id="nav-playlist" to={ROUTES.PLAYLIST}>
              <i className="bi bi-collection-play"></i>
              Playlist
            </NavLink>
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