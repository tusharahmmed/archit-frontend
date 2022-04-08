import React from 'react';
import styled from 'styled-components';
import { Description } from '../HeroSection/HeroSection';
import { Title } from '../History/History';

const About = () => {
    return (
        <Container id='about'>

            <LeftContent>

                <TextWraper>
                    <Title>We Are Proud <br /> About Our Quality</Title>
                    <AboutDescription>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dumm
                    </AboutDescription>
                </TextWraper>

                <LeftThumbWraper>
                    <img src="/img/portfolio-1.png" alt="portfolio" />
                </LeftThumbWraper>

            </LeftContent>

            <RightContent>

                <RightThumbWraper>
                    <img src="/img/portfolio-2.png" alt="" />
                </RightThumbWraper>

                <StatsWraper>

                    <Stats>
                        <StatsName>
                            Project
                        </StatsName>
                        <StatsValue>
                            3567
                        </StatsValue>
                    </Stats>

                    <Stats>
                        <StatsName>
                            Client
                        </StatsName>
                        <StatsValue>
                            700
                        </StatsValue>
                    </Stats>

                    <Stats>
                        <StatsName>
                            Years
                        </StatsName>
                        <StatsValue>
                            20+
                        </StatsValue>
                    </Stats>

                </StatsWraper>
            </RightContent>

        </Container>
    );
};

export default About;





const Container = styled.section`
display: grid;
grid-template-columns: 1fr 1fr;
grid-column-gap: 40px;
margin: 3rem 0rem;

@media (max-width: 900px){
    grid-template-columns: 1fr;

    padding-top: 88px;
    margin-top: -88px;
}
@media (max-width: 700px){
    width: 99%;
    padding-top: 88px;
    margin-top: -88px;
}
`;


const LeftContent = styled.div`

`;
const TextWraper = styled.div`

padding: 2rem 0 2rem 10rem;

@media (max-width: 1200px){
    padding: 2rem 2rem 0 5rem;
}
@media (max-width: 900px){
    padding: 1rem 6rem;
    
    
}
@media (max-width: 800px){
    padding: 1rem 6rem;
    flex-direction: column;
}
@media (max-width: 700px){
    padding: 1rem 1rem;
}

`;
const AboutDescription = styled(Description)`

`;
const LeftThumbWraper = styled.div`
background: var(--button-background);
margin: auto;
display: flex;
margin-right: 40px;

    
@media (max-width: 900px){
    margin-right: 0px;
} 

img{
    margin: 12rem auto 0;
    
    @media (max-width: 1200px){
        width: 70%;
    }
    @media (max-width: 700px){
        margin: 8rem auto 0;
    }

    
}
`;


const RightContent = styled.div`
margin-left: -30px;
display: flex;
flex-direction: column;
justify-content: space-between;

    
@media (max-width: 900px){
    margin-left: 0px;;
} 
`;
const RightThumbWraper = styled.div`
background: var(--section-background);
padding-top: 16rem;
display: flex;

@media (max-width: 700px){
    padding-top: 10rem;
}

img{
    width: 100%;
    
    @media (max-width: 1200px){
        
    }
}
`;
const StatsWraper = styled.div`
display: flex;
color: #fff;

@media (max-width: 900px){
    justify-content: space-around;
    padding: 4rem 0rem 2rem;
} 
@media (max-width: 700px){
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 100%;
}

`;
const Stats = styled.div`
height: 160px;
width: 156px;
background: var(--button-background);
margin-right: 25px;
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;

@media (max-width: 900px){
    margin-right: 0px;
}
@media (max-width: 700px){
    margin-right: 0px;
    width: 100%;
    height: 120px;
    border: 1px solid #fff;
}

`;
const StatsName = styled.p`
font-size: 25px;
font-weight: 500;

@media (max-width: 700px){
    font-size: 15px;
    
}
`;
const StatsValue = styled.h3`
font-size: 40px;
font-weight: 600;

@media (max-width: 700px){
    font-size: 25px;
    
}
`;