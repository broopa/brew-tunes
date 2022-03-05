import React from 'react';
import Header from '../components/header';
import MusicList from '../components/music-list';
import Coffee from '../components/coffee';
import Footer from '../components/footer';
import '../scss/main.scss';



const HomePage = () => (

<div className=' content is-mobile'>
<div className="container"><Header  />
            <section >
                <div className='columns'>
                <div className='column is-one-third-desktop is-half-tablet'>
                    <h2>Coffee of the Week</h2>
                    <Coffee />
                </div>
                <div className='column'>
                    <h2>Music of the Week</h2>
                    <MusicList />
                </div>
                </div>
            </section>
            </div>

            <Footer /> 
        </div>
);

export default HomePage;