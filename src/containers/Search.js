import React from 'react';
import { connect } from 'react-redux';

function Search(props) {
  return (
    <div className='Search' >
      Search
    </div>
  );
}

function mapStateToProps(reduxState) {
  return ({
    
  });
}

export default connect(mapStateToProps, {
  
})(Search);