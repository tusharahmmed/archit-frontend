import React from 'react';
import { About, Blog, BluePrint, HeroSection, History, Service, Team, Testimonial, WhyUs } from '../components/home';
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
            <Blog />
            <Testimonial />
        </>
    );
};

export default HomePage;