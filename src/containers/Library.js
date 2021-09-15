import React from 'react';
import { connect } from 'react-redux';

function Library(props) {
  return (
    <div className='Library' >
      Library
    </div>
  );
}

function mapStateToProps(reduxState) {
  return ({
    
  });
}

export default connect(mapStateToProps, {
  
})(Library);