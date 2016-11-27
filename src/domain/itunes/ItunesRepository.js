import config from '../config';
import Repository from '../Repository';

class ItunesRepository extends Repository {

    static getSearchResults (searchTerm) {
        const url = `${config.get('api')}${searchTerm}`
        return window.fetch(url)
                .then(resp => resp.json())
        .catch(err => this._log('Error: %j', err))
    }
}

export default ItunesRepository;
