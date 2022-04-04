import React from 'react';
import styled from 'styled-components';
import { Description } from '../HeroSection/HeroSection';

const BluePrint = () => {
    return (
        <Container>

            <Item>
                <Title>3D Modeling</Title>
                <ItemDescription>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout
                </ItemDescription>
                <LineWraper>
                    <Line /> <Line />
                </LineWraper>
            </Item>

            <Item>
                <Title>Blue Print Design</Title>
                <ItemDescription>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout
                </ItemDescription>
                <LineWraper>
                    <Line /> <Line />
                </LineWraper>
            </Item>

            <Item>
                <Title>Unique Design</Title>
                <ItemDescription>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout
                </ItemDescription>
                <LineWraper>
                    <Line /> <Line />
                </LineWraper>
            </Item>

        </Container>
    );
};

export default BluePrint;



const Container = styled.section`
display: grid;
grid-template-columns: repeat(3,1fr);
grid-gap: 30px;
padding: 3rem 10rem 6rem;

@media (max-width: 1200px){
    padding: 2rem  5rem 4rem;
}
@media (max-width: 900px){
    padding: 2rem 4rem 6rem;
    grid-template-columns: repeat(2,1fr);
}
@media (max-width: 800px){
    padding: 2rem 4rem 6rem;
    grid-template-columns: repeat(1,1fr);
}
@media (max-width: 700px){
    padding: 2rem 1rem 6rem;
}
`;
const Item = styled.div`
box-shadow: 0px 17px 94px #214b850f;
padding: 3rem 1.5rem;
`;
const Title = styled.h2`
font-size: 30px;
font-weight: 600;
color: var(--font-title);
`;
const ItemDescription = styled(Description)`

`;
const LineWraper = styled.div`

`;
const Line = styled.span`
display: inline-block;
width: 40px;
height: 2px;
background: var(--button-background);
margin-right: 10px;
`;