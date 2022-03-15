import { buttons } from './variables.js';

export default function showMore(e) {
    window.location.hash = e.target.ariaLabel;
}

buttons.forEach(button => {
    button.addEventListener('click', showMore)
})