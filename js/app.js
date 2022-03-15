import handleRoutes from "./modules/router.js";
import { fetchSportData, fetchVoedingData, fetchSportvoedingData, fetchDieetData } from "./modules/fetch.js";

handleRoutes();
// fetchData('sport');
fetchSportData()
fetchVoedingData()
fetchSportvoedingData()
fetchDieetData()