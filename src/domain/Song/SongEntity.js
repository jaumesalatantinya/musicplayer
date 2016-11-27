import Entity from '../Entity';

class SongEntity extends Entity {
    constructor ({trackId, artistName, trackName, artWorkUrl} = {}) {
        super();
        this.trackId = trackId;
        this.artistName = artistName;
        this.trackName = trackName;
        this.artWorkUrl = artWorkUrl;
    }
}

export default SongEntity;
