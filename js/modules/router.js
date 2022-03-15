import '../vendor/routie.min.js';
import showMore from './showMore.js';
// import fetchData from './fetch.js';

export default function handleRoutes() {
    routie({
        ':search': (search) => {
            showMore(search);
        }
    })
}

// const fetchWithHash = (search) => {

//     fetchData()
// }