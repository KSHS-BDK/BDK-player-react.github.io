import React from 'react';
import { HashRouter as Router} from 'react-router-dom';
import { Provider } from 'react-redux';

import { configureStore } from 'store';

import Main from './Main';

import '../styles/App.css';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Router basename='/spotikai'>
        <div className="App">
          <Main />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
