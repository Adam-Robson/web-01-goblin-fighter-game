import { renderDust } from 'render-utils.js';

const cleanedNumberEl = document.getElementById('cleaned-number');
const playerPower = document.getElementById('player-power');
const playerImage = document.getElementById('player-image');
const createForm = document.getElementById('create-form');
const dustListEl = document.getElementById('dust-list');

let cleanedDustsCount = 0;
let playerPowerCount = 10;
let dustCount = [
    { name: 'kiki', power: 7 },
    { name: 'si', power: 10 },
];

createForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(createForm);

    const dustName = data.get('name-input');

    const newDust = {
        name: dustName,
        power: Math.ceil(Math.random() * 5),
    };
    dustCount.push(newDust);

    displayDust();
});

function displayDust() {
    dustListEl.textContent = '';

    for (let dust of dustCount) {
        const dustEl = renderDust(dust);
        if (dust.power > 0) {
            dust.addEventListener('click', () => {
                if (Math.random() < .33) {
                    dust.power--;
                    alert('You hit ' + dust.name);
                } else {
                    alert('you ried to hit ' + dust.name + ' and missed!');
                }
                if (Math.random() < .5) {
                    playerPowerCount--;
                    alert(dust.name + ' hit you!');
                } else {
                    alert(dust.name + ' tried to hit you and missed!');
                }
                if (dust.power === 0) {
                    cleanedDustsCount++;
                }
                if (playerPowerCount === 0) {
                    playerImage.classList.add('game-over');
                    alert('GAME-OVER');
                }
                playerPower.textContent = playerPowerCount;
                cleanedNumberEl.textContent = cleanedDustsCount;

                displayDust();
            });

        }
        dustListEl.append(dustEl);
    } 
}

displayDust();