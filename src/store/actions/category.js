import _ from 'lodash';
import {
    SET_CATEGORY,
    // SET_CATEGORY_ARTISTS,
    // SET_CATEGORY_ALBUMS,
    // SET_CATEGORY_TAGS,
} from '../actionTypes';

export function setCategory(category = '', value) {
    return {
        type: SET_CATEGORY,
        category,
        payload: value,
    }
}

export function initAllCategories(musicList) {
    return dispatch => {
        const [artists, albums, tags] = musicList.reduce((acc, curr) => {
            const { artist, album, tags } = curr;
            acc[0].push(artist);
            acc[1].push(album);
            tags.forEach(tag => {
                acc[2].push(tag);
            });
            return acc;
        }, [[], [], []]);
        dispatch(setCategory('artists', _.uniq(artists)));
        dispatch(setCategory('albums', _.uniq(albums)));
        dispatch(setCategory('tags', _.uniq(tags)));
    }
}