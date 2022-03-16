import { fetchSportData, fetchNutritionData, fetchSportsNutritionData, fetchDietData } from "./modules/fetch.js";

const fetches = () => {
    fetchSportData();
    fetchNutritionData();
    fetchSportsNutritionData();
    fetchDietData();
}

fetches();