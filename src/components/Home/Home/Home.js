import React from 'react';
import About from '../../About/About';
import Banner from '../Banner/Banner';
import HomePageService from '../HomePageService/HomePageService';
import Other from '../Other/Other';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Other></Other>
            <HomePageService></HomePageService>
            
            <About></About>
            
        </div>
    );
};

export default Home;