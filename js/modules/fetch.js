import render from "./render.js";

const cors = 'https://cors-anywhere.herokuapp.com/';
const endpoint = 'https://zoeken.oba.nl/api/v1/search/?q=';
const key = '1e19898c87464e239192c8bfe422f280';
const secret = '4289fec4e962a33118340c888699438d';
const detail = 'Default';
const pagesize = '15';

const config = {
    Authorization: `Bearer ${secret}`
};

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