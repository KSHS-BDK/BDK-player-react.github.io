import { SET_MUSIC_LIST } from '../actionTypes';

import { initAllCategories } from './category';

import musiclist from '../../utils/data/musiclist.json';

export const setMusicList = () => {
    return {
        type: SET_MUSIC_LIST,
        payload: [...musiclist],
    }
}

export const initMusicList = () => {
    return dispatch => {
        dispatch(setMusicList());
        dispatch(initAllCategories(musiclist));
    }
}