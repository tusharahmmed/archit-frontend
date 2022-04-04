import React from 'react';
import { About, BluePrint, HeroSection, History, Service, Team, WhyUs } from '../components/home';
import { Header } from '../components/shared';

const HomePage = () => {
    return (
        <>
            <Header />
            <HeroSection />
            <History />
            <About />
            <BluePrint />
            <Service />
            <WhyUs />
            <Team />
        </>
    );
};

export default HomePage;