import SongEntity from '../Song/SongEntity'

export default class SongFactory {

    static createSongEntity (songData) {
        let trackId = '', artistName = '', trackName = '', artWorkUrl = '' ;
        trackId = songData.trackId;
        artistName = songData.artistName;
        trackName = songData.trackName;
        artWorkUrl = songData.artworkUrl100;
        return new SongEntity({trackId, artistName, trackName, artWorkUrl})
    }
}
