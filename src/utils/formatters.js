import _ from 'lodash'

export function CapFirstLetter(text = '') {
    if (!text) return;
    return _.capitalize(text);
}