import { SET_MUSIC_LIST } from '../actionTypes';

const DEFAULT_STATE = {
    list: [],
}

const music = (state = DEFAULT_STATE, action) => {
    const { type, payload } = action;
    switch(type) {
        case SET_MUSIC_LIST: {
            return {
                ...state,
                list: [...payload],
            }
        }
        default: return state;
    }
}

export default music;