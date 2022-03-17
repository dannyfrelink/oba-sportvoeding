import { renderSport, renderNutrition, renderSportsNutrition, renderDiet } from "./renderHome.js";
import handleRoutes from "./router.js";
import { cors, endpoint, key, detail, config, pagesizeSelects, previousButtons, nextButtons } from './variables.js';

fetch(`${cors}http://obaliquid.staging.aquabrowser.nl/onderwijs/api/v1/search/?q=voeding+NOT+lom.lifecycle.contribute.publisher%3Dwikipedia&authorization=76f45dfa187d66be5fd6af05573eab04&output=json`)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(() => {
        fetch('../api2.json')
            .then(response => response.json())
            .then(data => {
                console.log(data.results)
            })
            .catch(err => console.error(err));
    });

let pagesize = '15';
pagesizeSelects.forEach(select => {
    select.addEventListener('change', () => {
        pagesize = select.value;
        fetches();
    });
});

let counter = '1';
previousButtons.forEach(button => {
    button.addEventListener('click', () => {
        counter--;
        fetches();
    });
});
nextButtons.forEach(button => {
    button.addEventListener('click', () => {
        counter++;
        fetches();
    });
});

// Fetch sports data
const fetchSportData = () => {
    const url = `${cors}${endpoint}sport&authorization=${key}&detaillevel=${detail}&pagesize=${pagesize}&page=${counter}&output=json`;

    fetch(url, config)
        .then(response => response.json())
        .then(data => {
            renderSport(data);
            handleRoutes();
        })
        .catch(() => {
            fetch('../nutrition.json')
                .then(response => response.json())
                .then(data => {
                    renderSport(data);
                    handleRoutes();
                })
                .catch(err => console.error(err));
        });
}

// Fetch nutrition data
const fetchNutritionData = () => {
    const url = `${cors}${endpoint}voeding&authorization=${key}&detaillevel=${detail}&pagesize=${pagesize}&page=${counter}&output=json`;

    fetch(url, config)
        .then(response => response.json())
        .then(data => {
            renderNutrition(data);
            handleRoutes();
        })
        .catch(() => {
            fetch('../nutrition.json')
                .then(response => response.json())
                .then(data => {
                    renderNutrition(data);
                    handleRoutes();
                })
                .catch(err => console.error(err));
        });
}

// Fetch sports nutrition data
const fetchSportsNutritionData = () => {
    const url = `${cors}${endpoint}sportvoeding&authorization=${key}&detaillevel=${detail}&pagesize=${pagesize}&page=${counter}&output=json`;

    fetch(url, config)
        .then(response => response.json())
        .then(data => {
            renderSportsNutrition(data);
            handleRoutes();
        })
        .catch(() => {
            fetch('../nutrition.json')
                .then(response => response.json())
                .then(data => {
                    renderSportsNutrition(data);
                    handleRoutes();
                })
                .catch(err => console.error(err));
        });
}

// Fetch diet data
const fetchDietData = () => {
    const url = `${cors}${endpoint}dieet&authorization=${key}&detaillevel=${detail}&pagesize=${pagesize}&page=${counter}&output=json`;

    fetch(url, config)
        .then(response => response.json())
        .then(data => {
            renderDiet(data);
            handleRoutes();
        })
        .catch(() => {
            fetch('../nutrition.json')
                .then(response => response.json())
                .then(data => {
                    renderDiet(data);
                    handleRoutes();
                })
                .catch(err => console.error(err));
        });
}

export const fetches = () => {
    fetchSportData();
    fetchNutritionData();
    fetchSportsNutritionData();
    fetchDietData();
}