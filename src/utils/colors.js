import _ from "lodash";

export const generalColors = [
    '#4a9bd0', // main
    '#00afb9',
    '#fdfcdc',
    '#fed9b7',
    '#f07167',
    '#7db8a8',
    '#c8e5d8',
    '#faf9f9',
    '#ffd6ba',
    '#cf995f',
    '#b3ffcc',
    '#006450',
];

export function getRandomColors(count) {
    // const indicies = _.shuffle([...Array(generalColors).keys()]);
    let returnCount = count || generalColors.length;
    if (count <= generalColors.length) {
        return _.shuffle(generalColors).slice(0, returnCount);
    } else {
        let colors = [];
        while (returnCount > generalColors.length) {
            colors = [...colors, ..._.shuffle(generalColors)];
            returnCount -= generalColors.length;
        }
        colors = [...colors, ..._.shuffle(generalColors).slice(0, returnCount)];
        return colors;
    }
    
}
