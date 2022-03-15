// import renderHash from "./renderHash.js";
import { renderSport, renderNutrition, renderSportsNutrition, renderDiet } from "./renderHome.js";
import { cors, endpoint, key, detail, pagesize, config } from './variables.js'

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