// import renderHash from "./renderHash.js";
import { renderSport, renderVoeding, renderSportvoeding, renderDieet } from "./renderHome.js";
import { cors, endpoint, key, detail, pagesize, config } from './variables.js'

// export default function fetchData(searchValue) {
//     // let query;
//     // searchValue ? query = searchValue : query = 'voeding';

//     const url = `${cors}${endpoint}${searchValue}&authorization=${key}&detaillevel=${detail}&pagesize=${pagesize}&output=json`;

//     fetch(url, config)
//         .then(response => response.json())
//         .then(data => renderHash(data))
//         .catch(() => {
//             fetch('../voeding.json')
//                 .then(response => response.json())
//                 .then(data => render(data))
//                 .catch(err => console.error(err));
//         })
// }

export const fetchSportData = () => {
    const url = `${cors}${endpoint}sport&authorization=${key}&detaillevel=${detail}&pagesize=${pagesize}&output=json`;

    fetch(url, config)
        .then(response => response.json())
        .then(data => renderSport(data))
        .catch(err => console.error(err));
}

export const fetchVoedingData = () => {
    const url = `${cors}${endpoint}voeding&authorization=${key}&detaillevel=${detail}&pagesize=${pagesize}&output=json`;

    fetch(url, config)
        .then(response => response.json())
        .then(data => renderVoeding(data))
        .catch(err => console.error(err));
}

export const fetchSportvoedingData = () => {
    const url = `${cors}${endpoint}sportvoeding&authorization=${key}&detaillevel=${detail}&pagesize=${pagesize}&output=json`;

    fetch(url, config)
        .then(response => response.json())
        .then(data => renderSportvoeding(data))
        .catch(err => console.error(err));
}

export const fetchDieetData = () => {
    const url = `${cors}${endpoint}dieet&authorization=${key}&detaillevel=${detail}&pagesize=${pagesize}&output=json`;

    fetch(url, config)
        .then(response => response.json())
        .then(data => renderDieet(data))
        .catch(err => console.error(err));
}