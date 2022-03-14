import '../vendor/routie.min.js';
import fetchData from './fetch.js';

export default function handleRoutes() {
    routie({
        ':search': (search) => {
            fetchData(search);
        }
    })
}