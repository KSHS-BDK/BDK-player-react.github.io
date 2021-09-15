import { 
    INIT_APLAYER,
    INIT_MUSIC_LIST,
} from '../actionTypes';

const DEFAULT_STATE = {
    aplayer: null,
    musicList: [],
}

const player = (state = DEFAULT_STATE, action) => {
    const { type, payload } = action;
    switch(type) {
        case INIT_APLAYER: {
            console.log(state);
            return {
                ...state,
                aplayer: payload.aplayer,
            };
        }
        case INIT_MUSIC_LIST: {
            console.log(state);
            return {
                ...state,
                musicList: [...payload.musicList],
            }
        }
        default: return state;
    }
}

export default player;