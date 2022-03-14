import handleRoutes from "./modules/router.js";
import fetchData from "./modules/fetch.js";

/*** Fetching data -> refactor into module later ***/
handleRoutes();
fetchData('tolkien');