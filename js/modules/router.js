import '../vendor/routie.min.js';
import showMore from './showMore.js';
// import fetchData from './fetch.js';

export default function handleRoutes() {
    routie({
        ':search': (search) => {
            showMore(false, search);
        }
    })
}

// const fetchWithHash = (search) => {

//     fetchData()
// }