import handleRoutes from "./modules/router.js";
import { fetchSportData, fetchVoedingData, fetchSportvoedingData, fetchDieetData } from "./modules/fetch.js";
import { buttons } from "./modules/variables.js";

// handleRoutes();
// fetchData('sport');
fetchSportData()
fetchVoedingData()
fetchSportvoedingData()
fetchDieetData()