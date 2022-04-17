import React from 'react';
import Banner from '../Banner/Banner';
import Countdown from '../Countdown/Countdown';
import Logos from '../Logos/Logos';
import Machines from '../Machinaries/Machines/Machines';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Logos></Logos>
            <Services></Services>
            <Countdown></Countdown>
            <Machines></Machines>
        </div>
    );
};

export default Home;