import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import ReactAplayer from 'react-aplayer';

import { configureStore } from '../store';

import SideNav from '../components/navs/SideNav/SideNav';
import Main from './Main';

import '../styles/App.css';
import tempSongList from '../utils/tempSongList';

const store = configureStore();

const APlayerOptions = {
  music: [...tempSongList],
  listMaxHeight: "80vh",
  fixed: true,
  listFolded: true,
}

function App() {
  return (
    <Provider store={store}>
      <Router basename='/spotikai'>
        <div className="App">
          <div className='side-nav'>
            <SideNav />
          </div>
          <div className='app-content'>
            <div className='container-fluid' >
              <Main />
            </div>
          </div>
          <ReactAplayer {...APlayerOptions} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
