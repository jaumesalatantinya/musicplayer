import ErrorDispatcher from '../../domain/ErrorDispacher';
import  './MusicPlayerList.scss';

class MusicPlayerList {

    constructor(MusicPlayer) {
        this._musicPlayer = MusicPlayer;
        this._playList = [];
        this._musicPlayerDomElement;
    }

    setPlayList (playList){
        if (playList){
            this._playList = playList;
        }
    }

    setMusicPlayDomElement (musicPlayerDomElement) {
        this._musicPlayerDomElement = musicPlayerDomElement;
    }

    render () {
        let ul, li, songTitle;
        if (this._playList.length > 0) {
            ul = document.createElement('ul');
            ul.className = 'MusicPlayerList';
            this._playList.forEach( song => {
                //console.log(song)
                li = document.createElement('li');
                songTitle = document.createTextNode(song.trackName + ' - ' + song.artistName);
                this.addClickEventToPlayListItem(li);
                li.appendChild(songTitle);
                ul.appendChild(li);
            });
        }
        this._musicPlayerDomElement.appendChild(ul);
    }

    addClickEventToPlayListItem(li) {
        li.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('hello clicked');
            console.log(li)
            this._musicPlayer.renderPlayer();
    });
    }

}

export default MusicPlayerList;
