import React from 'react';
import '../scss/album.scss';

const Album = ({ artist, album, albumUrl, desc, roaster, albumId }) => (
    
    <div className='content'>
        <h3 className='title'>
            {album}
        </h3>
        <h4>
            {artist}
        </h4>
        <p>
            <iframe className="bc-style" src={albumUrl} title="Player" seamless></iframe>
        </p>
    </div>
);

export default Album;