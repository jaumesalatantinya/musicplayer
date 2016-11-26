//import ErrorDispatcher from './domain/ErrorDispacher';
import MusicPlayer from './components/MusicPlayer/MusicPlayer';
import  './styles/index.scss';

class App {

    constructor () {
        this.musicPlayer = new MusicPlayer();
    }

    init () {
        this.renderMusicPlayer();
        /*this.getSectionsFromApi().then(() => {
        });*/
    }

    /*getSectionsFromApi () {
        return ItunesApiService.getSearchResults('michael+jackson').then ((resp) => {
            //this.sections.push(sections);
                console.log(resp);
        }).catch((error) => {
            ErrorDispatcher.dispatchError('App--getSectionsFromApi: ' + error.message);
        });
    }*/

    renderMusicPlayer () {
        //this.accordion.loadSections(this.sections);
        this.musicPlayer.render();
    }
}

export default App;

