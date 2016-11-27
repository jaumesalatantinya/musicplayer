import config from '../../domain/config';
import UiDomElementsFactory from '../../domain/factories/UiDomElementsFactory';
import ErrorDispatcher from '../../domain/ErrorDispacher';
import  './MusicPlayerList.scss';

class MusicPlayerList {

    constructor(MusicPlayer, playListSongs) {
        this._musicPlayer = MusicPlayer;
        this._songs = playListSongs;
        this._musicPlayerDomElement = document.querySelector(config.get('musicPlayerDomElement'));
    }

    render () {
        let ul, li, songTitle;
        if (this._songs.length > 0) {
            ul = UiDomElementsFactory.createDomElement('ul', {className: 'MusicPlayerList'});
            this._songs.forEach( song => {
                li = UiDomElementsFactory.createDomElement('li', {});
                songTitle = UiDomElementsFactory.createText(song.trackName + ' - ' + song.artistName);
                this.addClickEventToPlayListItem(li, song);
                li.appendChild(songTitle);
                ul.appendChild(li);
            });
        }
        this._musicPlayerDomElement.appendChild(ul);
    }

    addClickEventToPlayListItem(li, song) {
        li.addEventListener('click', (e) => {
            e.preventDefault();
            //console.log('hello clicked');
            //console.log(li)
            this._musicPlayer.state = 'playerPage';
            this.
        });
    }

}

export default MusicPlayerList;
