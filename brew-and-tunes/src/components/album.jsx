import React from 'react';
import '../scss/album.scss';

const Album = ({ artist, album, albumUrl, albumId }) => (
    
    
        <div className='column card is-half-tablet is-half-mobile is-one-third-desktop'>
        <div className=' card-content' key={albumId}>
            <h3>{album}</h3>
        <h4>
            {artist}
        </h4>
        <p>
            <iframe className="bc-style" src={albumUrl} title="Player" seamless></iframe>
        </p>
    </div>
    </div>
);

export default Album;