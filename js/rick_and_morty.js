let url = 'https://rickandmortyapi.com/api/character';
let comp;
let div = document.querySelector('#wrapper');
let counter1 = document.getElementById('counter1');
let counter2 = document.getElementById('counter2');
let counter3 = document.getElementById('counter3');
let counter4 = document.getElementById('counter4');
let button = document.getElementById('button');
let land = document.getElementById('land');
let tapa = document.getElementById('tapa');

function req(url) {
  fetch(url)
      .then((response) => {
        if (!response.ok){
            throw new Error(`HTTP error: ${response.status}`)
        }
        return response.json()})
      .then(json => start(json));
}

function start(obj){
    const characters = obj['results'];
    comp = url;
    for (const char in characters){
        let container = document.createElement('div');
        let text = document.createElement('div');
        let name = document.createElement('h3');
        let status = document.createElement('p');
        let species = document.createElement('p');
        let gender = document.createElement('p');
        let img = document.createElement('img');

        name.textContent = 'Name: ' + characters[char]['name'];
        status.textContent = 'Status: ' + characters[char]['status'];
        species.textContent = 'Species: ' + characters[char]['species'];
        gender.textContent = 'Name: ' + characters[char]['gender'];
        img.setAttribute('src', characters[char]['image']);
        img.setAttribute('id', 'img');

        container.setAttribute('id', 'container');
        text.setAttribute('id', 'text');

        container.appendChild(img);
        text.appendChild(name);
        text.appendChild(status);
        text.appendChild(species);
        text.appendChild(gender);
        container.appendChild(text);
        

        div.appendChild(container);
    }

    if(obj['info']['next'] !== null) {
      url = obj['info']['next'];
    }

}

function landing (el) {
  land.style.display = 'none';
}

function test(){
  /*
  counter1.textContent = (`Div Client Height: ${div.clientHeight} Container Height: ${document.getElementById('container').clientHeight * 2}`);
  counter2.innerText = (`Window Inner Height: ${window.innerHeight}`);
  counter3.innerText = "Scroll Y:" + (window.scrollY || window.pageYOffset);
  counter4.innerText = "¿Da a cero?: " + ((div.clientHeight)  - (window.innerHeight + (window.scrollY || window.pageYOffset)));
  */

  if(comp !== url){
      console.log(url);
      req(url);
  }
}

button.addEventListener('click', test);

setInterval(landing, 1100);


req(url);

/* document.body.clientHeight
window.innerHeight
window.scrollY
window.pageYOffset */