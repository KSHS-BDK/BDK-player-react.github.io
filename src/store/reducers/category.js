import {
    SET_CATEGORY,
    SET_CATEGORY_MUSIC_LIST,
    SET_CATEGORY_ARTISTS,
    SET_CATEGORY_ALBUMS,
    SET_CATEGORY_TAGS,
} from '../actionTypes';

const DEFAULT_STATE = {
    categories: {
        albums: [],
        artists: [],
        tags: [],
    },
    categoryMusicList: {
        albums: [],
        artists: [],
        tags: [],
    }
}

const category = (state = DEFAULT_STATE, action) => {
    const { type, payload } = action;
    switch(type) {
        case SET_CATEGORY: {
            const { category } = action;
            return {
                ...state,
                categories: {
                    ...state.categories,
                    [category]: payload,
                }
            }
        }
        case SET_CATEGORY_MUSIC_LIST: {
            const { category } = action;
            return {
                ...state,
                categoryMusicList: {
                    ...state.categoryMusicList,
                    [category]: payload,
                }
            }
        }
        case SET_CATEGORY_ARTISTS: {
            return {
                ...state,
                categories: {
                    ...state.categories,
                    artists: [...payload.artists],
                }
            }
        }
        case SET_CATEGORY_ALBUMS: {
            return {
                ...state,
                categories: {
                    ...state.categories,
                    albums: [...payload.albums],
                }
            }
        }
        case SET_CATEGORY_TAGS: {
            return {
                ...state,
                categories: {
                    ...state.categories,
                    tags: [...payload.tags],
                }
            }
        }
        default: return state;
    }
}

export default category;