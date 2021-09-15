import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import ReactAplayer from 'react-aplayer';

import Main from './Main';

import { initAplayer, initMusicList } from '../store/actions/player';

import musiclist from '../utils/data/musiclist.json';

const APlayerOptions = {
  audio: [],
  listMaxHeight: "80vh",
  fixed: true,
  listFolded: true,
}

function AppContent(props) {

  const { initMusicList } = props

  useEffect(() => {
    initMusicList(musiclist);
  }, [initMusicList]);

  const onInit = async ap => {
    props.initAplayer(ap);
  }

  return (
    <div className='AppContent' >
      <div className='container-fluid' >
        <Main />
      </div>
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