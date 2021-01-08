/**
 * @todo Point d'entrée pour faire vos exercices...
 */
window.onload = init

function init() {
    const resources = new SearchResource('https://api.jikan.moe/v3', 'anime?q=Fate/Zero&page=1');

    const movie = resources.byName("search")
        .then(res => {
            if (res.ok) {
                res.json().then(data => {
                    let results = data.results;
                    results.forEach((result, i) => {
                        let card = `
                        <div class="col-sm-6 col-md-4 col-xl-3">
                        <div class="card mb-4 box-shadow">
                            <div class="card-body">
                                <a href="${result.url}" alt="redirected">
                                <img class="card-img"  alt="Fate Zero" src="${result.image_url}">
                                </a>
                                <p class="h6">
                                    ${result.title}
                                    <span class="badge badge-info">${result.score}</span>
                                </p>

                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="btn-group">
                                        <button type="button" class="btn btn-sm btn-outline-secondary" data-toggle="modal" data-target="#modal-detail-anime">
                                            Info
                                        </button>
                                    </div>

                                    <small class="text-muted">${result.episodes} Ep.</small>
                                </div>
                            </div>
                        </div>
                    </div>`;
                        $("#animList").append(card);
                    });

                })
            } else {
                console.log("ERREUR");
            }
        });
}