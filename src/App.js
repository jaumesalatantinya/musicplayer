//import ErrorDispatcher from './domain/ErrorDispacher';
import MusicPlayer from './domain/MusicPlayer/MusicPlayer';
import  './styles/index.scss';

class App {

    constructor () {
        this.musicPlayer = new MusicPlayer();
    }

    init () {
        this.renderMusicPlayer();
    }

    renderMusicPlayer () {
        this.musicPlayer.render();
    }
}

export default App;

