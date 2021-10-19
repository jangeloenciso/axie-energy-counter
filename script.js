var energy = 3;

function reduceEnergy() {
    if (energy > 0) {
        energy -= 1;
    }
    document.getElementById('energy').innerHTML = energy;
}

function addEnergy() {
    if (energy < 10) {
        energy += 1;
    }
    document.getElementById('energy').innerHTML = energy;
}

function endTurn() {
    if (energy == 9) {
        energy += 1;
    } else if (energy < 10) {
        energy += 2;
    }
    document.getElementById('energy').innerHTML = energy;
}

function reset() {
    energy = 3;
    document.getElementById('energy').innerHTML = energy;
}
