import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import ReactAplayer from 'react-aplayer';

import Main from './Main';

import { initAplayer } from '../store/actions/player';
import { initMusicList } from '../store/actions/music';

const APlayerOptions = {
  audio: [],
  listMaxHeight: "80vh",
  fixed: true,
  listFolded: true,
}

function AppContent(props) {

  const {
    initMusicList,
  } = props

  useEffect(() => {
    initMusicList();
  }, [initMusicList]);

  const onInit = async ap => {
    props.initAplayer(ap);
  }

  return (
    <div className='AppContent' >
      <Main />
      <ReactAplayer 
        {...APlayerOptions}
        onInit={onInit}
      />
    </div>
  );
}

function mapStateToProps(reduxState) {
  return ({
    player: reduxState.player,
  });
}

export default connect(mapStateToProps, {
  initAplayer,
  initMusicList,
})(AppContent);