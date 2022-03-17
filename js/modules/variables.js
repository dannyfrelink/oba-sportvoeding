/* Fetch */
const cors = 'https://cors-anywhere.herokuapp.com/';
const endpoint = 'https://zoeken.oba.nl/api/v1/search/?q=';
const key = '76f45dfa187d66be5fd6af05573eab04';
const secret = '6b02878111c06660300798cf4c40a685';
const detail = 'Default';
const config = {
    Authorization: `Bearer ${secret}`
};

/* Render */
const sections = document.querySelectorAll('section');
const pagesizeDiv = document.querySelectorAll('section>div div');
const pagesizeSelects = document.querySelectorAll('select');
const uls = document.querySelectorAll('section ul');
const ulSport = document.querySelector('#sport ul');
const ulNutrition = document.querySelector('#voeding ul');
const ulSportsNutrition = document.querySelector('#sportvoeding ul');
const ulDiet = document.querySelector('#dieet ul');
const buttons = document.querySelectorAll('section>button');
const navigationDivs = document.querySelectorAll('section>div:last-of-type');
const previousButtons = document.querySelectorAll('#previous');
const nextButtons = document.querySelectorAll('#next');

export { cors, endpoint, key, detail, config, sections, pagesizeDiv, pagesizeSelects, uls, ulSport, ulNutrition, ulSportsNutrition, ulDiet, buttons, navigationDivs, previousButtons, nextButtons }