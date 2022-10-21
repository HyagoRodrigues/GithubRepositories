let container_principal = document.querySelector('#card-profile');

export function getRepo(input) {
    fetch(`https://api.github.com/search/repositories?q=${input}`)
        .then(async resposta => {
            if (!resposta.ok) {
                throw new Error(resposta.status);
            }
            let data = await resposta.json();
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
                `
                container_principal.appendChild(div);
            });
        });
}
