import React from 'react';
import styled from 'styled-components';

const HeroSection = () => {
    return (
        <Container>
            <Wraper>
                <LeftContent>
                    <Title>Build Your <br /> Dream House</Title>
                    <Description>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galle
                    </Description>
                    <Buttons>
                        <ButtonPrimay>Explore Us</ButtonPrimay>
                        <ButtonSecond>Get Started</ButtonSecond>
                    </Buttons>
                </LeftContent>
                <RightContent>
                    <img src="/img/hero-thumbnail.png" alt="" />
                </RightContent>
            </Wraper>
        </Container>
    );
};

export default HeroSection;






const Container = styled.section`
background: var(--section-background);
`;
const Wraper = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 0rem 2rem 0rem 10rem;

@media (max-width: 1200px){
    padding: 0rem 1rem  0rem 5rem;
}
@media (max-width: 900px){
    padding: 0rem 1rem 0rem 4rem;
    flex-direction: column;
}
@media (max-width: 800px){
    padding: 0rem 1rem 0rem 4rem;
    flex-direction: column;
}
@media (max-width: 700px){
    padding: 0rem 1rem 0rem 1rem;
}
`;
const LeftContent = styled.div`
width:50%;
@media (max-width: 900px){
    width: 90%;
    padding: 4rem 0rem;
}
@media (max-width: 700px){
    width: 100%;
}
`;
const Title = styled.h1`
color: var(--font-title);
font-size: 85px;
font-weight: 700;
line-height: 80px;


@media (max-width: 1200px){
    font-size: 60px;
}
@media (max-width: 998px){
    font-size: 50px;
    line-height: 60px; 
}
@media (max-width: 700px){
    font-size: 30px;
    line-height: 45px;
    padding: 1rem 0rem
}
`;
const Description = styled.p`
font-size: 16px;
font-weight: 400;
color: var(--font-description);
width: 90%;
margin: 30px 0px;


@media (max-width: 1200px){
    margin: 15px 0px;
}

`;
const Buttons = styled.div`
margin-top: 30px;
`;
const ButtonPrimay = styled.button`
width: 162px;
height: 52px;
background: var(--button-background);
border: none;
outline: none;
color: #fff;
font-weight: 500;
font-size: 16px;
cursor: pointer;
transition: all 0.3s ease 0s;
margin-right: 20px;

&:hover{
    box-shadow: 0px 7px 20px #214b8536;
    transform: translateY(-4px);
}
@media (max-width: 700px){
    margin-bottom: 20px;
}
`;
const ButtonSecond = styled.button`
width: 162px;
height: 52px;
background: transparent;
border: 1px solid var(--button-background);
outline: none;
color: var(--button-background);
font-weight: 500;
font-size: 16px;
cursor: pointer;
transition: all 0.3s ease 0s;


&:hover{
    box-shadow: 0px 7px 20px #214b8536;
    transform: translateY(-4px);
}
@media (max-width: 700px){
    margin-bottom: 20px;
}
`;
const RightContent = styled.div`
display: flex;
justify-content: end;
width: 30%;
@media (max-width: 900px){
    width: 90%;
    margin-top: 30px;
}
@media (max-width: 700px){
    width: 100%;
    margin-top: 0px;
}


img{
    width: 168%;

    @media (max-width: 900px){
        width: 100%;

    }
    @media (max-width: 700px){
        width: 100%;
    }
}

`;