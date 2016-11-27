import config from '../../domain/config';
import UiDomElementsFactory from '../../domain/factories/UiDomElementsFactory';
import ErrorDispatcher from '../../domain/ErrorDispacher';
import  './Player.scss';

class Player {

    constructor(MusicPlayer, playListSongs, currentPlayingSong) {
        this._musicPlayer = MusicPlayer;
        this._songs = playListSongs;
        this._currentPlayingSong = currentPlayingSong;
        this._musicPlayerDomElement = document.querySelector('#'+config.get('musicPlayerDomElement'));
    }

    render () {
        this._musicPlayerDomElement.innerHTML = '';
        let backBtn, songTitle, songTitleText;
        backBtn = UiDomElementsFactory.createDomElement('button', {});
        backBtn.appendChild(UiDomElementsFactory.createText('Back'));
        backBtn.addEventListener('click', (e) => {
            e.preventDefault();
            this._musicPlayer.state.page = 'playlistPage';
            this._musicPlayer._render();
        });
        songTitle = UiDomElementsFactory.createDomElement('h3', {});
        songTitleText = `Playing => ${this._currentPlayingSong.trackName} - ${this._currentPlayingSong.artistName}`;
        songTitle.appendChild(UiDomElementsFactory.createText(songTitleText));
        this._musicPlayerDomElement.appendChild(backBtn);
        this._musicPlayerDomElement.appendChild(songTitle);
    }

}

export default Player;
