import config from '../../domain/config';
import UiDomElementsFactory from '../../domain/factories/UiDomElementsFactory';
import ErrorDispatcher from '../../domain/ErrorDispacher';
import  './MusicPlayerList.scss';

class MusicPlayerList {

    constructor(MusicPlayer, playListSongs) {
        this._musicPlayer = MusicPlayer;
        this._songs = playListSongs;
        this._musicPlayerDomElement = document.querySelector('#'+config.get('musicPlayerListDomElement'));
    }

    render () {
        this._musicPlayerDomElement.innerHTML = '';
        let ul, li, img, songTitle;
        if (this._songs.length > 0) {
            ul = UiDomElementsFactory.createDomElement('ul', {className: 'MusicPlayerList'});
            this._songs.forEach( song => {
                li = UiDomElementsFactory.createDomElement('li', {});
                img = UiDomElementsFactory.createDomElement('img', {src: song.artWorkUrl});
                songTitle = UiDomElementsFactory.createText(song.trackName + ' - ' + song.artistName);
                this.addClickEventToPlayListItem(li, song);
                li.appendChild(img);
                li.appendChild(songTitle);
                ul.appendChild(li);
            });
        }
        this._musicPlayerDomElement.appendChild(ul);
    }

    addClickEventToPlayListItem(li, song) {
        li.addEventListener('click', (e) => {
            e.preventDefault();
            this._musicPlayer.state.page = 'playerPage';
            this._musicPlayer._currentPlayingSong = song;
            this._musicPlayer._render();
        });
    }

}

export default MusicPlayerList;
