let chickenBoilStartMinutes = 18;
let chickenCoolDownMinutes = 10;
let riceHighCookMinutes = 5;
let riceMediumCookMinutes = 15;
let riceCooldownMinutes = 10;

let chickenBoil = chickenBoilStartMinutes * 60;
let chickenCool = chickenCoolDownMinutes * 60;
let riceHigh = riceHighCookMinutes * 60;
let riceMedium = riceMediumCookMinutes * 60;
let riceCool = riceCooldownMinutes * 60;

let chickenBoilElem = document.getElementById('chickenBoilTimer');
let chickenCooldownElem = document.getElementById('chickenCooldownTimer');
let riceHighCookElem = document.getElementById('riceHighTimer');
let riceMediumCookElem = document.getElementById('riceMediumTimer');
let riceCooldownElem = document.getElementById('riceCooldownTimer');


const boilChicken = () => {
    chickenBoil--;
    let minutes = Math.floor(chickenBoil / 60);
    let seconds = chickenBoil % 60;

    seconds = seconds < 10 ? 0 + seconds : seconds;
    chickenBoilElem.innerText = `${minutes}:${seconds}`

    chickenCookTimer();
}

const chickenCooldown = () => {
    chickenCool--;
    let minutes = Math.floor(chickenCool / 60);
    let seconds = chickenCool % 60;

    seconds = seconds < 10 ? 0 + seconds : seconds;
    chickenCooldownElem.innerText = `${minutes}:${seconds}`

    chickenCoolTimer();
}

const riceHighCook = () => {
    riceHigh--;
    let minutes = Math.floor(riceHigh / 60);
    let seconds = riceHigh % 60;

    seconds = seconds < 10 ? 0 + seconds : seconds;
    riceHighCookElem.innerText = `${minutes}:${seconds}`

    riceHighTimer();
}

const riceMediumCook = () => {
    riceMedium--
    let minutes = Math.floor(riceMedium / 60);
    let seconds = riceMedium % 60;

    seconds = seconds < 10 ? 0 + seconds : seconds;
    riceMediumCookElem.innerText = `${minutes}:${seconds}`

    riceMediumTimer();
}

const riceCooldown = () => {
    riceCool--
    let minutes = Math.floor(riceCool / 60);
    let seconds = riceCool % 60;

    seconds = seconds < 10 ? 0 + seconds : seconds;
    riceCooldownElem.innerText = `${minutes}:${seconds}`

    riceCooldownTimer();
}


const chickenCookTimer = () => {
    setTimeout(boilChicken, 1000)
    if (chickenBoil < 0) {
        document.getElementById('chickenBoilTimer').innerText = "Chicken is done!";
    }
}

const chickenCoolTimer = () => {
    setTimeout(chickenCooldown, 1000)
    if (chickenCool < 0) {
        document.getElementById('chickenCooldownTimer').innerText = "Chicken is cooled!";
    }
}

const riceHighTimer = () => {
    setTimeout(riceHighCook, 1000)
    if (chickenCool < 0) {
        document.getElementById('riceHighTimer').innerText = "Switch Rice to Medium Heat!";
    }
}

const riceMediumTimer = () => {
    setTimeout(riceMediumCook, 1000)
    if (chickenCool < 0) {
        document.getElementById('riceMediumTimer').innerText = "Rice Cooked at Medium Heat!";
    }
}

const riceCooldownTimer = () => {
    setTimeout(riceCooldown, 1000)
    if (riceCool < 0) {
        document.getElementById('riceCooldownTimer').innerText = "Rice is cooled!";
    }
}