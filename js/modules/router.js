import '../vendor/routie.min.js';
import showMore from './showMore.js';

export default function handleRoutes() {
    routie({
        ':search': (search) => {
            showMore(false, search);
        }
    })
}