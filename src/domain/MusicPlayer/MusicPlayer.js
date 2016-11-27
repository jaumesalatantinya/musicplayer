import ItunesRepository from '../itunes/ItunesRepository';
import ErrorDispatcher from '../ErrorDispacher';
import MusicPlayerList from '../../components/MusicPlayerList/MusicPlayerList';
import UiDomElementsFactory from '../factories/UiDomElementsFactory';
import SongFactory from '../factories/SongFactory';
import config from '../config';


class MusicPlayer {

    constructor() {
        this.state = { page: 'playlist' };
        this._searchTerm = '';
        this._playListSongs = [];
        this._musicPlayerDomElement = document.querySelector(config.get('musicPlayerDomElement'));
        this._currentPlayingSong;
        this.playListComponent;
    }

    render (){
        if (this.state.page === 'playlistPage') {
            this.renderPlaylistPage();
        }
        if (this.state === 'playerPage') {
            this.renderPlayerPage();
        }
    }

    renderPlaylistPage () {
        let form, input, submit;
        form = UiDomElementsFactory.createDomElement('form', {className: 'MusicPlayer-SearchForm'});
        input = UiDomElementsFactory.createDomElement('input', {type: 'text', id: 'MusicPlayer-SearchForm-SearchTerm'});
        submit = UiDomElementsFactory.createDomElement('input', {type: 'submit', value: 'Search'});

        form.appendChild(input);
        form.appendChild(submit);
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            this._searchTerm = document.querySelector('#MusicPlayer-SearchForm-SearchTerm').value;
            this.getPlayListItems();
        });
        this._musicPlayerDomElement.appendChild(form);
    }

    getPlayListItems () {
        if (this.isValidSearchTerm()) {
            ItunesRepository.getSearchResults(this._searchTerm).then ((resp) => {
                resp.results.forEach( songData =>
                    this._playListSongs.push(SongFactory.createSongEntity(songData))
                )
                this.renderPlayList();
            }).catch((error) => {
                    ErrorDispatcher.dispatchError('App--getSectionsFromApi: ' + error.message);
            });
        }
    }

    isValidSearchTerm(){
        let isValid = false;
        if (this._searchTerm !== '' ) {
            isValid = true;
            this._searchTerm.split(' ').join('+');
        }
        return isValid;
    }

    renderPlayList () {
        this._playListComponent = new MusicPlayerList(this, this._playListSongs);
        this._playListComponent.render();
    }

    renderPlayerPage () {
        console.log('renderPlayer pretty awesome');
    }
}

export default MusicPlayer;
