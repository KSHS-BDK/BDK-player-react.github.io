import _ from 'lodash';
import {
    SET_CATEGORY,
    SET_CATEGORY_MUSIC_LIST,
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

export function setCategoryMusicList(category = '', value) {
    return {
        type: SET_CATEGORY_MUSIC_LIST,
        category,
        payload: value,
    }
}

export function initAllCategories(musicList) {
    return dispatch => {
        let [artists, albums, tags] = musicList.reduce((acc, curr) => {
            const { artist, album, tags } = curr;
            if (artist.length > 0) {
                acc[0].push(artist);
            }
            if (album.length > 0) {
                acc[1].push(album);
            }
            tags.forEach(tag => {
                if (tag.length > 0) {
                    acc[2].push(tag);
                }
            });
            return acc;
        }, [[], [], []]);
        artists = _.uniq(artists);
        albums = _.uniq(albums);
        tags = _.uniq(tags);
        dispatch(setCategory('artists', artists));
        dispatch(setCategory('albums', albums));
        dispatch(setCategory('tags', tags));
        const artistsMusicList = artists.map(artist => {
            return {
                title: artist,
                label: 'artist',
                list: musicList.filter(music => music.artist === artist),
            }
        });
        const albumsMusicList = albums.map(album => {
            return {
                title: album,
                label: 'album',
                list: musicList.filter(music => music.album === album),
            }
        });
        const tagsMusicList = tags.map(tag => {
            return {
                title: tag,
                label: 'tags',
                list: musicList.filter(music => music.tags.includes(tag)),
            }
        });
        dispatch(setCategoryMusicList('artists', artistsMusicList));
        dispatch(setCategoryMusicList('albums', albumsMusicList));
        dispatch(setCategoryMusicList('tags', tagsMusicList));
    }
}