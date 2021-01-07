/**
 * @todo Point d'entrée pour faire vos exercices...
 */
window.onload = init

function init() {
    const resources = new AnimeResource('https://api.jikan.moe/v3', 'anime');
    const movie = resources.getDetail(1).then(response => response.json()).then(data => console.log(data));
}