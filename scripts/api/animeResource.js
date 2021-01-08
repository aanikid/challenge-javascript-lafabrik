class AnimeResource extends LibraryResource {

    /**
     * @param {int} id
     * @todo Utiliser l'api de la classe parente pour appeler la méthode fetch
     * @returns {Promise} Promesse qui retourne les données JSON en cas de succès
     */

    constructor(api) {
        super(api, 'anime');
    }

    // get detail with id
    getDetail(id) {
        return this.fetch(`${this.api}/${this.resource}/${id}`);
    }
}