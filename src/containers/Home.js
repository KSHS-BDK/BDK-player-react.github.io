import React from 'react';
import { connect } from 'react-redux';

function Home(props) {
  return (
    <div className='Home' >
      Home
    </div>
  );
}

function mapStateToProps(reduxState) {
  return ({
    
  });
}

export default connect(mapStateToProps, {
  
})(Home);