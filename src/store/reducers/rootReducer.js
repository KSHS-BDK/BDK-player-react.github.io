import { combineReducers } from 'redux';

import music from './music';
import player from './player';
import category from './category';

const rootReducer = combineReducers({
    music,
    player,
    category,
});

export default rootReducer;