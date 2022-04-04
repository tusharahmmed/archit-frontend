import React from 'react';
import { About, BluePrint, HeroSection, History } from '../components/home';
import { Header } from '../components/shared';

const HomePage = () => {
    return (
        <>
            <Header />
            <HeroSection />
            <History />
            <About />
            <BluePrint />
        </>
    );
};

export default HomePage;