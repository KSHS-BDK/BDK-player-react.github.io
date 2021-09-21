import { 
    INIT_APLAYER,
} from '../actionTypes';

const DEFAULT_STATE = {
    aplayer: null,
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
        default: return state;
    }
}

export default player;