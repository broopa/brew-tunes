import React from 'react';
import '../scss/album.scss';
import '../scss/music.scss';

const Album = ({ artist, album, albumUrl, albumId }) => (
    
    
        <div className='column card is-half-tablet is-half-mobile is-one-third-desktop'>
        <div className=' card-content' key={albumId}>
            <h3>{album}</h3>
        <h4>
            {artist}
        </h4>
        <div className="iframe-frame">
            <iframe className="responsive-iframe " src={albumUrl} title="Player" seamless></iframe>
        </div>
    </div>
    </div>
);

export default Album;