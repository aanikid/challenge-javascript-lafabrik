class SearchResource extends LibraryResource {

    /**
     * @param {string} name
     * @todo Utiliser l'api de la classe parente pour appeler la méthode fetch
     * @returns {Promise} Promesse qui retourne les données JSON en cas de succès
     */
    constructor(api, resource) {
            super(api, resource);
        }
        // search ressource by name
    byName(name) {
        return this.fetch(`${this.api}/${name}/${this.resource}`);
    }

}