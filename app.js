import { renderDust } from './render-utils.js';

const cleanedNumberEl = document.getElementById('cleaned-number');
const playerPower = document.getElementById('player-power');
const playerImage = document.getElementById('player-image');
const button = document.getElementById('button');
const dustListEl = document.getElementById('dust-list');
const nameInput = document.getElementById('name-input');


let cleanedDustsCount = 0;
let playerPowerCount = 10;
let dustCount = [
    { name: 'kiki', power: 7 },
    { name: 'si', power: 7 },
];

button.addEventListener('click', () => {
    const dustName = nameInput.value;
    const newDust = {
        name: dustName,
        power: 7,
    };
    newDust.textContent = dustName;
    dustCount.push(newDust);
    nameInput.value = '';
    displayDust();
});

function displayDust() {
    dustListEl.textContent = '';

    for (let dust of dustCount) {
        const dustEl = renderDust(dust);
        if (dust.power > 0) {
            dustEl.addEventListener('click', () => {
                if (Math.random() < .5) {
                    dust.power--;
                    alert('You hit ' + dust.name);
                } else if (Math.random() > .5) {
                    alert('you tried to hit ' + dust.name + ' and missed!');
                }

                if (Math.random() < .75) {
                    playerPowerCount--;
                    alert(dust.name + ' hit you!');
                } else if (Math.random() > .75) {
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