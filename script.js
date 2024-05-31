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
          if (curr.new) {
            const span = document.createElement('span');
            span.classList.add('new');
            span.textContent = 'New!'
            container.querySelector('.stat').append(span);
        }
        if (curr.featured) {
        container.classList.add('featured');
        const span = document.createElement('span');
        span.classList.add('feature');
        span.textContent = 'Featured'
        container.querySelector('.stat').append(span);
        }
        let types = curr.position.split(' ');

        const btn1 = document.createElement('button');
        btn1.dataset.type = curr.role;
        btn1.textContent = curr.role;
        container.querySelector('.tags').appendChild(btn1);

        const btn2 = document.createElement('button');
        btn2.dataset.type = curr.level;
        btn2.textContent = curr.level;
        container.querySelector('.tags').appendChild(btn2);

        for (l of curr.languages) {
            const btn = document.createElement('button');
            btn.dataset.type = l;
            btn.textContent = l;
            container.querySelector('.tags').appendChild(btn);
        }
        for (t of curr.tools) {
            const btn = document.createElement('button');
            btn.dataset.type = t;
            btn.textContent = t;
            container.querySelector('.tags').appendChild(btn);
        }