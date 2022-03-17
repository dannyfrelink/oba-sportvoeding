import { renderSport, renderNutrition, renderSportsNutrition, renderDiet, renderExtraMaterials } from "./renderHome.js";
import handleRoutes from "./router.js";
import { cors, endpoint, key, detail, config, pagesizeSelects, previousButtons, nextButtons, navigationDivs } from './variables.js';

// Change pagesize depending on selected value
let pagesize = '15';
pagesizeSelects.forEach(select => {
    select.addEventListener('change', () => {
        pagesize = select.value;
        fetches();
    });
});

// Create counter for previous and next buttons
let counter = 1;
previousButtons.forEach(button => {
    button.addEventListener('click', () => {
        counter--;
        fetches();
        if (counter == 1) {
            // Remove previous button on first page
            button.classList.add('hidden');

            // Change justify content to flex-end
            navigationDivs.forEach(div => {
                div.classList.add('flexend');
            });
        }
    });
});
nextButtons.forEach(button => {
    button.addEventListener('click', () => {
        counter++;
        fetches();
        if (counter > 1) {
            // Show previous button from second page and onwards
            previousButtons.forEach(button => {
                button.classList.remove('hidden');
            });

            // Change justify content to space-between
            navigationDivs.forEach(div => {
                div.classList.remove('flexend');
            });
        }
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
        .catch((err) => {
            console.log(err)
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

// Fetch extra materials data
const fetchExtraMaterials = () => {
    const url = `${cors}http://obaliquid.staging.aquabrowser.nl/onderwijs/api/v1/search/?q=voeding+NOT+lom.lifecycle.contribute.publisher%3Dwikipedia&authorization=76f45dfa187d66be5fd6af05573eab04&output=json`
    fetch(url, config)
        .then(res => res.json())
        .then(data => renderExtraMaterials(data))
        .catch(() => {
            fetch('../extraMaterials.json')
                .then(response => response.json())
                .then(data => renderExtraMaterials(data))
                .catch(err => console.error(err));
        });
}

export const fetches = () => {
    fetchSportData();
    fetchNutritionData();
    fetchSportsNutritionData();
    fetchDietData();
    fetchExtraMaterials();
}