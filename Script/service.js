var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let container_principal = document.querySelector('#card-profile');
export function getRepo(input) {
    fetch(`https://api.github.com/search/repositories?q=${input}`)
        .then((resposta) => __awaiter(this, void 0, void 0, function* () {
        if (!resposta.ok) {
            throw new Error(resposta.status);
        }
        let data = yield resposta.json();
        console.log(data);
        data.items.map(item => {
            let div = document.createElement('div');
            div.innerHTML = `                     
                    <div class="card mb-3" style="max-width: 540px;">
    <div class="row g-0">
        <div class="col-md-4">
            <img src="${item.owner.avatar_url}" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
            <div class="card-body">
            <h5 class="card-title">${item.full_name}</h5>
            <p class="card-text"><a class="text-muted" href="${item.html_url}">${item.html_url}</a></p>
            </div>
        </div>
    </div>
</div>
                `;
            container_principal.appendChild(div);
        });
    }));
}
