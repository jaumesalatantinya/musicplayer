import SongEntity from '../Song/SongEntity'

export default class SongFactory {

    static createSongEntity (songData) {
        let trackId = '', artistName = '', trackName = '', artWork = '' ;
        trackId = songData.trackId;
        artistName = songData.artistName;
        trackName = songData.trackName;
        artWork = songData.artworkUrl100;
        return new SongEntity({trackId, artistName, trackName, artWork})
    }
}
