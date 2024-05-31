const filter = document.querySelector('.filter-sub');
const main = document.querySelector('main');
const clear = document.querySelector('.clear');
let closes = [];
let arr = [];

const header = document.querySelector('header');

(async function() {
    let res = await fetch("./data.json");
    let data = await res.json();

    for (let curr of data) {
        const container = document.createElement('div');
        container.classList.add('container');
        container.innerHTML = `<img src="${curr.logo}" alt="logo">
        <div class="head">
        <div class="wrapper">
            <div class="top">
                <h2>${curr.company}</h2>
    
                <div class="stat">
                </div>
            </div>
    
            <a href="#">${curr.position}</a>
    
            <ul class="availability">
                <li>${curr.postedAt}</li>
                <li>${curr.contract}</li>
                <li>${curr.location}</li>
            </ul>
        </div>
        <hr>
          
          <div class="tags">
          </div>`;