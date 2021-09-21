import {
    SET_CATEGORY,
    SET_CATEGORY_ARTISTS,
    SET_CATEGORY_ALBUMS,
    SET_CATEGORY_TAGS,
} from '../actionTypes';

const DEFAULT_STATE = {
    albums: [],
    artists: [],
    tags: [],
}

const category = (state = DEFAULT_STATE, action) => {
    const { type, payload } = action;
    switch(type) {
        case SET_CATEGORY: {
            const { category } = action;
            return {
                ...state,
                [category]: [...payload]
            }
        }
        case SET_CATEGORY_ARTISTS: {
            return {
                ...state,
                artists: [...payload.artists],
            }
        }
        case SET_CATEGORY_ALBUMS: {
            return {
                ...state,
                albums: [...payload.albums],
            }
        }
        case SET_CATEGORY_TAGS: {
            return {
                ...state,
                tags: [...payload.tags],
            }
        }
        default: return state;
    }
}

export default category;