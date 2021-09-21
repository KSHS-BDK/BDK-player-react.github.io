import React from 'react';
import { connect } from 'react-redux';

import Greeting from '../components/others/Greeting/Greeting';
import CategoryCard from '../components/cards/CategoryCard/CategoryCard';

function Home(props) {
  return (
    <div className='Home container-fluid' >
      <div className='row content-top-bar'>
      </div>

      <div className='row greeting' >
        <Greeting />
      </div>

      <div className='row category-row' >
        <div className='col-md-6 col-xl-4' >
          <CategoryCard cardImagePath='pic/NEXT COLOR PLANET.jpg' />
        </div>
      </div>
    </div>
  );
}

function mapStateToProps(reduxState) {
  return ({
    
  });
}

export default connect(mapStateToProps, {
  
})(Home);