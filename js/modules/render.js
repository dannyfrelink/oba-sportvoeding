import { section } from "./variables.js";

// render data
export default function render(data) {
    section.innerHTML = '';
    const results = data.results;
    console.dir(results);
    results.forEach((item, i) => {
        const html = `
                <article>
                    <img src="${item.coverimages ? item.coverimages[1] : 'Geen samenvatting'}">
                    <div>
                        <h2>${item.titles[0]}</h2>
                        <p>${item.summaries ? item.summaries[0] : 'Geen samenvatting'}</p>
                    </div>
                </article>
            `;
        section.insertAdjacentHTML('afterbegin', html);
    });
    const button = '<button>Alles weergeven</button>';
    section.insertAdjacentHTML('beforeend', button);
}