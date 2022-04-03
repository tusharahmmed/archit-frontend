import React from 'react';
import { HeroSection, History } from '../components/home';
import { Header } from '../components/shared';

const HomePage = () => {
    return (
        <>
            <Header />
            <HeroSection />
            <History />
        </>
    );
};

export default HomePage;