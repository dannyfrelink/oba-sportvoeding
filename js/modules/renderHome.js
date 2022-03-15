import { ulSport, ulVoeding, ulSportvoeding, ulDieet } from "./variables.js";

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

// render voeding data
export const renderVoeding = (data) => {
    ulVoeding.innerHTML = '';
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
        ulVoeding.insertAdjacentHTML('afterbegin', html);
    });
}

// render sportvoeding data
export const renderSportvoeding = (data) => {
    ulSportvoeding.innerHTML = '';
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
        ulSportvoeding.insertAdjacentHTML('afterbegin', html);
    });
}

// render dieet data
export const renderDieet = (data) => {
    ulDieet.innerHTML = '';
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
        ulDieet.insertAdjacentHTML('afterbegin', html);
    });
}

