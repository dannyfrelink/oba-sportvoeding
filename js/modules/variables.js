/* Fetch */
const cors = 'https://cors-anywhere.herokuapp.com/';
const endpoint = 'https://zoeken.oba.nl/api/v1/search/?q=';
const key = 'dc0e2f073c03758140452044906bc818';
const secret = '6b02878111c06660300798cf4c40a685';
const detail = 'Default';
const pagesize = '15';
const config = {
    Authorization: `Bearer ${secret}`
};

/* Render */
const section = document.querySelector('section');

export { cors, endpoint, key, detail, pagesize, config, section }