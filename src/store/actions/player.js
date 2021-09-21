import { 
    INIT_APLAYER,
} from '../actionTypes';

export function initAplayer(aplayer) {
    return {
        type: INIT_APLAYER,
        payload: {
            aplayer,
        }
    };
}