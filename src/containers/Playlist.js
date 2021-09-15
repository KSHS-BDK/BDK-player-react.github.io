import React from 'react';
import { connect } from 'react-redux';

function Playlist(props) {
  return (
    <div className='Playlist' >
      Playlist
    </div>
  );
}

function mapStateToProps(reduxState) {
  return ({
    
  });
}

export default connect(mapStateToProps, {
  
})(Playlist);