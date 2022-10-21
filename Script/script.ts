import {getRepo} from './service.js'

function submit(e){
    e.preventDefault();
    let input = <HTMLSelectElement>document.querySelector("#search").value;
    getRepo(input);
}

<HTMLSelectElement>document.getElementById('search-form')?.addEventListener('submit', submit);