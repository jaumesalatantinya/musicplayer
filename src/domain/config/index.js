let base = {
    api: 'https://itunes.apple.com/search?term=',
    musicPlayerDomElement: 'Musicplayer',
    musicPlayerListDomElement: 'MusicPlayerList',
    playerDomElement: 'MusicPlayerPlayer'
};

class Config {
    constructor () {
        this._config = Object.assign({}, base)
    }

    get (key) {
        return this._config[key]
    }

    set (key, value) {
        this._config[key] = value
        return this
    }
}

const config = new Config()
export default config
