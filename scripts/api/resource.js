class LibraryResource {

    /**
     * @todo Mettre api et resource dans une propriété
     * @param {LibraryApi} api
     * @param {string} resource Comme 'anime', 'manga', 'person', 'search', etc...
     * @see https://jikan.docs.apiary.io/#reference/
     */
    constructor(api, resource) {
        this.api = api;
        this.resource = resource;
    }

    /**
     * @todo Utiliser la méthode fetch de l'api. Construire resource_url avec les propriétés resource & query
     * @param {string} query => peut être par exemple '/10087', '/anime?q=FateZero'
     * @returns {Promise} Promesse qui retourne les données JSON en cas de succès
     */
    fetch(query) {
        return fetch(`${query}`);
    }
}