import Entity from '../Entity';

class SongEntity extends Entity {
    constructor ({trackId, artistName, trackName, artWork} = {}) {
        super();
        this.trackId = trackId;
        this.artistName = artistName;
        this.trackName = trackName;
        this.artWork = artWork;
    }
}

export default SongEntity;
