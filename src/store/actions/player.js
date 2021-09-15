import { 
    INIT_APLAYER,
    INIT_MUSIC_LIST,
} from '../actionTypes';

export function initAplayer(aplayer) {
    return {
        type: INIT_APLAYER,
        payload: {
            aplayer,
        }
    };
}

export function initMusicList(musicList) {
    return {
        type: INIT_MUSIC_LIST,
        payload: {
            musicList,
        }
    }
}