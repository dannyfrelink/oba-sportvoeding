/* Fetch */
const cors = 'https://cors-anywhere.herokuapp.com/';
const endpoint = 'https://zoeken.oba.nl/api/v1/search/?q=';
const key = '76f45dfa187d66be5fd6af05573eab04';
const secret = '6b02878111c06660300798cf4c40a685';
const detail = 'Default';
const pagesize = '15';
const config = {
    Authorization: `Bearer ${secret}`
};

/* Render */
const section = document.querySelector('section');

export { cors, endpoint, key, detail, pagesize, config, section }