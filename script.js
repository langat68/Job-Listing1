const filter = document.querySelector('.filter-sub');
const main = document.querySelector('main');
const clear = document.querySelector('.clear');
let closes = [];
let arr = [];

const header = document.querySelector('header');

(async function() {
    let res = await fetch("./data.json");
    let data = await res.json();