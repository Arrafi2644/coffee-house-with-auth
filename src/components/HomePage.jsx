import React from 'react';
import Banner from './Banner';
import CoffeeType from './CoffeeType';
import InstagramPicks from './InstagramPicks';
import Contact from './Contact';
import Coffees from './Coffees';

const HomePage = () => {
    return (
        <div>
            <Banner></Banner>
            <CoffeeType></CoffeeType>
            <Coffees></Coffees>
            <InstagramPicks></InstagramPicks>
            <Contact></Contact>
        </div>
    );
};

export default HomePage;