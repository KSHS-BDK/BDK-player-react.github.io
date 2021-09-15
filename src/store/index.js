import { createStore, compose } from 'redux';

import rootReducer from './reducers/rootReducer';

export function configureStore() {
    let store = createStore(
        rootReducer,
        compose(
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )
    );
    return store
}
