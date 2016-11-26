import ItunesApiService from '../../domain/ItunesApiService';
import ErrorDispatcher from '../../domain/ErrorDispacher';
import MusicPlayerList from '../MusicPlayerList/MusicPlayerList';

class MusicPlayer {

    constructor() {
        this._searchTerm = '';
        this._playListItems = [];
        this.playListComponent = new MusicPlayerList (this);
        this._musicPlayerDomElement;
    }

    render (){

        this._musicPlayerDomElement = document.querySelector('#Musicplayer');
        this._musicPlayerDomElement.appendChild(this.renderSearchForm());
    }

    renderSearchForm () {
        let form, input, submit;
        form = document.createElement('form');
        form.className = 'MusicPlayer-SearchForm';
        input = document.createElement('input');
        input.type = 'text';
        input.id = 'MusicPlayer-SearchForm-SearchTerm';
        submit = document.createElement('input');
        submit.type = 'submit';
        submit.value = 'Search';
        form.appendChild(input);
        form.appendChild(submit);
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            this._searchTerm = document.querySelector('#MusicPlayer-SearchForm-SearchTerm').value;
            this.getPlayListItems();
        });
        return form;
    }

    getPlayListItems () {
        if (this.isValidSearchTerm()) {
            ItunesApiService.getSearchResults(this._searchTerm).then ((resp) => {
                this._playList = resp.results;
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
        this.playListComponent.setPlayList(this._playList);
        this.playListComponent.setMusicPlayDomElement(this._musicPlayerDomElement);
        this.playListComponent.render();
    }

    renderPlayer () {
        console.log('renderPlayer pretty awesome');
    }
}

export default MusicPlayer;
