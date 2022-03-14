import render from "./render.js";
import { cors, endpoint, key, detail, pagesize, config } from './variables.js'

export default function fetchData(searchValue) {
    let query;
    searchValue ? query = searchValue : query = 'voeding';
    const url = `${cors}${endpoint}${query}&authorization=${key}&detaillevel=${detail}&pagesize=${pagesize}&output=json`;

    fetch(url, config)
        .then(response => response.json())
        .then(data => render(data))
        .catch(() => {
            fetch('../voeding.json')
                .then(response => response.json())
                .then(data => render(data))
                .catch(err => console.error(err));
        })
}