let url = 'https://rickandmortyapi.com/api/character';
let comp;
let div = document.querySelector('#wrapper');

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

function test(){
  if(comp !== url){
    if (div.clientHeight === (window.innerHeight + window.scrollY)){
      console.log(url);
      req(url);
    }
  }
}

document.addEventListener('scroll', test);

req(url);