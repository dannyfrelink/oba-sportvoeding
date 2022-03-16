import { renderSport, renderNutrition, renderSportsNutrition, renderDiet } from "./renderHome.js";
import { cors, endpoint, key, detail, config, pagesizeSelects } from './variables.js';

// fetch('https://obaliquid.staging.aquabrowser.nl/onderwijs/api/v1/search/?q=voeding+NOT+lom.lifecycle.contribute.publisher%3Dwikipedia&authorization=76f45dfa187d66be5fd6af05573eab04')
//     .then(res => res.json())
//     .then(data => console.log(data))

let pagesize = '15';
pagesizeSelects.forEach(select => {
    select.addEventListener('change', () => {
        pagesize = select.value;
        fetchSportData();
        fetchNutritionData();
        fetchSportsNutritionData();
        fetchDietData();
    })
})

// Fetch sports data
export const fetchSportData = () => {
    const url = `${cors}${endpoint}sport&authorization=${key}&detaillevel=${detail}&pagesize=${pagesize}&output=json`;

    fetch(url, config)
        .then(response => response.json())
        .then(data => renderSport(data))
        .catch(() => {
            fetch('../nutrition.json')
                .then(response => response.json())
                .then(data => renderSport(data))
                .catch(err => console.error(err));
        })
}

// Fetch nutrition data
export const fetchNutritionData = () => {

    const url = `${cors}${endpoint}voeding&authorization=${key}&detaillevel=${detail}&pagesize=${pagesize}&output=json`;

    fetch(url, config)
        .then(response => response.json())
        .then(data => renderNutrition(data))
        .catch(() => {
            fetch('../nutrition.json')
                .then(response => response.json())
                .then(data => renderNutrition(data))
                .catch(err => console.error(err));
        })
}

// Fetch sports nutrition data
export const fetchSportsNutritionData = () => {
    const url = `${cors}${endpoint}sportvoeding&authorization=${key}&detaillevel=${detail}&pagesize=${pagesize}&output=json`;

    fetch(url, config)
        .then(response => response.json())
        .then(data => renderSportsNutrition(data))
        .catch(() => {
            fetch('../nutrition.json')
                .then(response => response.json())
                .then(data => renderSportsNutrition(data))
                .catch(err => console.error(err));
        })
}

// Fetch diet data
export const fetchDietData = () => {
    const url = `${cors}${endpoint}dieet&authorization=${key}&detaillevel=${detail}&pagesize=${pagesize}&output=json`;

    fetch(url, config)
        .then(response => response.json())
        .then(data => renderDiet(data))
        .catch(() => {
            fetch('../nutrition.json')
                .then(response => response.json())
                .then(data => renderDiet(data))
                .catch(err => console.error(err));
        })
}