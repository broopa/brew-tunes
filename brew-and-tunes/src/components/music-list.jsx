import React from 'react';
import Album from './album';
import '../scss/music.scss';
import { weeklyPlayList } from './data/audio';

 class MusicList extends React.Component {
   
    constructor() {
        super();
        this.state = {weeklyPlayList}};

    render() {
        return (
            <div className='columns is-mobile' >
                
    {
                    this.state.weeklyPlayList.map(({id, ...otherSectionProps}) => (
                        <Album key={id} {...otherSectionProps} />
                    ))
                }

            </div>
        )
    }
    }
    

export default MusicList;