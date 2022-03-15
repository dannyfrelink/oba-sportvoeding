import { sections, buttons } from './variables.js';

export default function showMore(e, search) {
    if (e) {
        window.location.hash = e.target.ariaLabel;
    }

    // Remove not selected sections
    sections.forEach(section => {
        section.classList.remove('hidden');
        if (e ? section.id !== e.target.ariaLabel : section.id !== search) {
            section.classList.add('hidden');
        }
    });

    buttons.forEach(button => {
        button.classList.add('hidden');
    })

}

buttons.forEach(button => {
    button.addEventListener('click', showMore);
})