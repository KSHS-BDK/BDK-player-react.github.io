import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import { configureStore } from '../store';

import SideNav from '../components/navs/SideNav/SideNav';
import AppContent from './AppContent';

import '../styles/App.css';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Router basename={ process.env.PUBLIC_URL }>
        <div className="App">
          <div className='side-nav'>
            <SideNav />
          </div>
          <div className='app-content'>
            <AppContent />
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
