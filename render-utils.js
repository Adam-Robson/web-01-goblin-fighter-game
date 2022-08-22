export function renderDust(dust) {
    const dustEl = document.createElement('div');
    const faceEl = document.createElement('p');
    const nameEl = document.createElement('p');
    const powerEl = document.createElement('p');

    dustEl.classList.add('dust');

    nameEl.textContent = dust.name;
    powerEl.textContent = dust.power < 0 ? 0 : dust.power;

    faceEl.textContent = dust.power > 0 ? '👾' : '🧚';

    if (dust.power < 0) {
        dustEl.classList.add('dead');
    }

    dustEl.append(nameEl, faceEl, powerEl);

    return dustEl;
}