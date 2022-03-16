import handleRoutes from "./modules/router.js";
import { fetchSportData, fetchNutritionData, fetchSportsNutritionData, fetchDietData } from "./modules/fetch.js";

handleRoutes();
fetchSportData()
fetchNutritionData()
fetchSportsNutritionData()
fetchDietData()
