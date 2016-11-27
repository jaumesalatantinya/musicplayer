import config from '../../domain/config';
import UiDomElementsFactory from '../../domain/factories/UiDomElementsFactory';
import ErrorDispatcher from '../../domain/ErrorDispacher';
import  './Player.scss';

class Player {

    constructor(MusicPlayer, playListSongs) {
        this._musicPlayer = MusicPlayer;
        this._songs = playListSongs;
        this._playerDomElement = document.querySelector('#'+config.get('musicPlayerListDomElement'));
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

}

export default Player;
