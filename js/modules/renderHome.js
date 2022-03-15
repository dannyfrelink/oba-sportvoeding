import { ulSport, ulNutrition, ulSportsNutrition, ulDiet } from "./variables.js";

// render sport data
export const renderSport = (data) => {
    ulSport.innerHTML = '';
    const results = data.results;
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
        ulSport.insertAdjacentHTML('afterbegin', html);
    });
}

// render nutrition data
export const renderNutrition = (data) => {
    ulNutrition.innerHTML = '';
    const results = data.results;
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
        ulNutrition.insertAdjacentHTML('afterbegin', html);
    });
}

// render sports nutrition data
export const renderSportsNutrition = (data) => {
    ulSportsNutrition.innerHTML = '';
    const results = data.results;
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
        ulSportsNutrition.insertAdjacentHTML('afterbegin', html);
    });
}

// render dieet data
export const renderDiet = (data) => {
    ulDiet.innerHTML = '';
    const results = data.results;
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
        ulDiet.insertAdjacentHTML('afterbegin', html);
    });
}

