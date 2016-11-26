class ItunesApiService {

    static getSearchResults (searchTerm) {
        //const url = `${this._config.get('api')}/favs?token=${token}&secret=${secret}`
        const url = `https://itunes.apple.com/search?term=${searchTerm}`
        //this._log(`Getting favorites from ${url}`)
        return window.fetch(url)
                .then(resp => resp.json())
        .catch(err => this._log('Error: %j', err))
    }
}

export default ItunesApiService;
