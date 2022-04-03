import React from 'react';
import { About, HeroSection, History } from '../components/home';
import { Header } from '../components/shared';

const HomePage = () => {
    return (
        <>
            <Header />
            <HeroSection />
            <History />
            <About />
        </>
    );
};

export default HomePage;