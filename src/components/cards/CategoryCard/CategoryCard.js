import React from 'react';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';

import './CategoryCard.css';

function CategoryCard(props) {

  return (
    <div className='CategoryCard rounded-2' >
      <div className='card-cover rounded-start' style={{backgroundImage: `url('${props.cardImagePath}')`}} >

      </div>
    </div>
  );
}

CategoryCard.propTypes = {
  cardImagePath: PropTypes.string,
}

CategoryCard.defaultProps = {
  
}

export default CategoryCard