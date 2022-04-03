import React from 'react';
import styled from 'styled-components';
import { Description } from '../HeroSection/HeroSection';

const History = () => {
    return (
        <Container>
            <LeftContent>
                <Title>Science we Started Work<br /> In 1860 </Title>
                <SubWraper>
                    <Line />
                    <Subtitle>Nemo enim ipsum volupation</Subtitle>
                </SubWraper>
            </LeftContent>
            <RightContent>
                <HistoryDescription>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution <br /> <br />
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout
                </HistoryDescription>
            </RightContent>
        </Container>
    );
};

export default History;


const Container = styled.section`
display: flex;
align-items: start;
padding: 7rem 10rem;


@media (max-width: 1200px){
    padding: 5rem 5rem;
}
@media (max-width: 900px){
    padding: 1rem 6rem;
    flex-direction: column;
    margin: 6rem 0rem;
}
@media (max-width: 800px){
    padding: 1rem 6rem;
    flex-direction: column;
}
@media (max-width: 700px){
    padding: 1rem 1rem;
}

`;
const LeftContent = styled.div`
width: 50%;

@media (max-width: 900px){
    width: 100%;
}
`;
export const Title = styled.h2`
font-size: 40px;
color: var(--font-title);
font-weight: 500;
line-height: 52px;

@media (max-width: 1200px){
    font-size: 32px;
    line-height: 45px;
}
@media (max-width: 700px){
    font-size: 26px;
    line-height: 36px;
}
`;
const SubWraper= styled.div`
display: flex;
align-items: center;
margin-top: 25px;
`;
const Subtitle = styled.p`
color: var(--button-background);
`;
const HistoryDescription = styled(Description)`
margin: 0;
`;
const Line = styled.p`
width: 65px;
height: 2px;
background: var(--font-title);
margin-right: 30px;
`;
const RightContent = styled.div`
width: 49%;

@media (max-width: 900px){
    width: 100%;
    margin-top: 2rem;
}
`;