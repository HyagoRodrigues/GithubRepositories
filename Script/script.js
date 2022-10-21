var _a;
import { getRepo } from './service.js';
function submit(e) {
    e.preventDefault();
    let input = document.querySelector("#search").value;
    getRepo(input);
}
(_a = document.getElementById('search-form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', submit);
