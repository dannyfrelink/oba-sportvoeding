import { ulSport, ulNutrition, ulSportsNutrition, ulDiet, ulExtraMaterials } from "./variables.js";

// Render sport data
export const renderSport = (data) => {
    ulSport.innerHTML = '';
    const results = data.results;
    results.forEach((item, i) => {
        const html = `
                <article>
                    <img src="${item.coverimages ? item.coverimages[1] : 'Geen samenvatting'}">
                    <div class="hidden">
                        <h2>${item.titles ? item.titles[0] : 'Geen titel'}</h2>
                        <p>${item.authors ? item.authors[0] : 'Geen auteur'}</p>
                        <p>${item.languages ? item.languages.join(', ') : 'Geen taal'}</p>
                        <p>${item.summaries ? item.summaries[0] : 'Geen samenvatting'}</p>
                    </div>
                </article>
            `;
        ulSport.insertAdjacentHTML('afterbegin', html);
    });
}

// Render nutrition data
export const renderNutrition = (data) => {
    ulNutrition.innerHTML = '';
    const results = data.results;

    results.forEach((item, i) => {
        const html = `
                <article>
                    <img src="${item.coverimages ? item.coverimages[1] : 'Geen samenvatting'}">
                    <div class="hidden">
                        <h2>${item.titles ? item.titles[0] : 'Geen titel'}</h2>
                        <p>${item.authors ? item.authors[0] : 'Geen auteur'}</p>
                        <p>${item.languages ? item.languages.join(', ') : 'Geen taal'}</p>
                        <p>${item.summaries ? item.summaries[0] : 'Geen samenvatting'}</p>
                    </div>
                </article>
            `;
        ulNutrition.insertAdjacentHTML('afterbegin', html);
    });
}

// Render sports nutrition data
export const renderSportsNutrition = (data) => {
    ulSportsNutrition.innerHTML = '';
    const results = data.results;
    results.forEach((item, i) => {
        const html = `
                <article>
                    <img src="${item.coverimages ? item.coverimages[1] : 'Geen samenvatting'}">
                    <div class="hidden">
                        <h2>${item.titles ? item.titles[0] : 'Geen titel'}</h2>
                        <p>${item.authors ? item.authors[0] : 'Geen auteur'}</p>
                        <p>${item.languages ? item.languages.join(', ') : 'Geen taal'}</p>
                        <p>${item.summaries ? item.summaries[0] : 'Geen samenvatting'}</p>
                    </div>
                </article>
            `;
        ulSportsNutrition.insertAdjacentHTML('afterbegin', html);
    });
}

// Render dieet data
export const renderDiet = (data) => {
    ulDiet.innerHTML = '';
    const results = data.results;
    results.forEach((item) => {
        const html = `
                <article>
                    <img src="${item.coverimages ? item.coverimages[1] : 'Geen samenvatting'}">
                    <div class="hidden">
                        <h2>${item.titles ? item.titles[0] : 'Geen titel'}</h2>
                        <p>${item.authors ? item.authors[0] : 'Geen auteur'}</p>
                        <p>${item.languages ? item.languages.join(', ') : 'Geen taal'}</p>
                        <p>${item.summaries ? item.summaries[0] : 'Geen samenvatting'}</p>
                    </div>
                </article>
            `;
        ulDiet.insertAdjacentHTML('afterbegin', html);
    });
}

// Render extra materials data
export const renderExtraMaterials = (data) => {
    ulExtraMaterials.innerHTML = '';
    const results = data.results;
    results.forEach((item) => {
        const html = `
                <article>
                    <img src="https://v112.nbc.bibliotheek.nl/thumbnail?uri=http://data.bibliotheek.nl/ggc/ppn/82309541X&token=c1322402" alt="placeholder"/>
                    <div class="hidden">
                        <h2>${item.titles ? item.titles[0] : 'Geen titel'}</h2>
                        <p>${item.authors ? item.authors[0] : 'Geen auteur'}</p>
                        <p>${item.languages ? item.languages.join(', ') : 'Geen taal'}</p>
                        <p>${item.summaries ? item.summaries[0] : 'Geen samenvatting'}</p>
                    </div>
                </article>
            `;
        ulExtraMaterials.insertAdjacentHTML('afterbegin', html);
    });
}

