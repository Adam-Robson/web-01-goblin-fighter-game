
const nameInput = document.getElementById('name-input');
const gameContainer = document.getElementById('game-container');
const playerSection = document.getElementById('player-section');
const dustContainer = document.getElementById('dust-container');
const dustSection = document.getElementById('dust-section');
const activeDust = document.getElementById('active-dust');
const otherDusts = document.getElementById('other-dusts');
const button = document.getElementById('button');
const playerStats = document.createElement('player-stats');
const playerStatus = document.createElement('player-status');

let playerPower = 10;
let cleanedDusts = 0; 
let dustsArray = [
    { name: 'si', power: 7 },
    { name: 'kiki', power: 7 },
];

button.addEventListener('click', () => {
 
    const newName = nameInput.value;
    activeDust.textContent = newName;
    const newDust = {
        name: newName,
        power: Math.ceil(Math.random() * 7),
    };
    dustsArray.push(newDust);
    nameInput.value = '';
    displayAll();
});

function displayAll() {
    otherDusts.textContent = '';
    for (let dust of dustsArray) {
        const dustEl = document.createElement('div');
        dustEl.textContent = `${dust.name} ${dust.power}`;
        dustEl.classList.add('dust');

        dustEl.addEventListener('click', () => {
            if (dust.power > 0 && playerPower > 0) {
                if (Math.random() > .5) {
                    dust.power--;
                    dustSection.textContent = dust.name + 'has been cleaned on!';
                    dustContainer.textContent = dust.power;
                }
                if (Math.random() > .7) {
                    playerPower--;
                    playerSection.textContent = 'You are getting dusted!';
                    playerStats.textContent = `Power: ${playerPower}`;
                }
                if (dust.power === 0) {
                    cleanedDusts++;
                    gameContainer.textContent = `${dust.name} has been cleaned up! you have cleaned up ${cleanedDusts} dusts!`;
                }
                if (playerPower <= 0) {
                    playerStatus.textContent = `You were completely dusted! You are now the dust!`;
                    playerStats.textContent = `Power: ${playerPower}`;
                }
                playerStats.textContent = playerPower;
                if (dustsArray.length === cleanedDusts) {
                    playerStatus.textContent = `You cleaned up all of the dust!`;
                }
                displayAll(); 
            }
        });
        activeDust.append(dustEl);
    } 
}
