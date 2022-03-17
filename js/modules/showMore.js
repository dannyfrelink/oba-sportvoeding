import { sections, pagesizeDiv, uls, buttons, navigationDivs } from './variables.js';

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

    // Show extra content of detail page
    pagesizeDiv.forEach(div => {
        div.classList.remove('hidden');
    });

    uls.forEach(ul => {
        ul.classList.add('detail');
    });

    const extraArticles = document.querySelectorAll('section article:nth-of-type(n+6)');
    extraArticles.forEach(article => {
        article.classList.add('show');
    });

    const infoText = document.querySelectorAll('article div');
    infoText.forEach(text => {
        text.classList.remove('hidden');
    });

    buttons.forEach(button => {
        button.classList.add('hidden');
    });

    navigationDivs.forEach(div => {
        div.classList.remove('hidden');
    });
}

buttons.forEach(button => {
    button.addEventListener('click', showMore);
});