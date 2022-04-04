import React from 'react';
import styled from 'styled-components';
import { Description } from '../HeroSection/HeroSection';
import { Line, SubTitle, Title } from '../Service/Service';

const WhyUs = () => {
    return (
        <Container>

            <SubTitle><Line /> Why Choose Us</SubTitle>
            <Title>Best Architecture Company</Title>

            <Wraper>
                
                <LeftContent>

                    <WhyUsDescription>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</WhyUsDescription>

                    <Items>

                        <Item>
                            <ItemThumb>
                                <img src="/img/icon-badge.png" alt="" />
                            </ItemThumb>
                            <Info>
                                <ItemTitle>Comportable Service Provider</ItemTitle>
                                <ItemDescription>Lorem Ipsum is simply dummy text of the printing and typesetting industry</ItemDescription>
                            </Info>
                        </Item>

                        <Item>
                            <ItemThumb>
                                <img src="/img/icon-bag.png" alt="" />
                            </ItemThumb>
                            <Info>
                                <ItemTitle>Fasr Delivered Work</ItemTitle>
                                <ItemDescription>Lorem Ipsum is simply dummy text of the printing and typesetting industry</ItemDescription>
                            </Info>
                        </Item>

                        <Item>
                            <ItemThumb>
                                <img src="/img/icon-mic.png" alt="" />
                            </ItemThumb>
                            <Info>
                                <ItemTitle>Comportable Service Provider</ItemTitle>
                                <ItemDescription>Lorem Ipsum is simply dummy text of the printing and typesetting industry</ItemDescription>
                            </Info>
                        </Item>

                    </Items>

                </LeftContent>

                <RightContent>
                    <img src="/img/img-person.png" alt="" />
                </RightContent>

            </Wraper>

        </Container>
    );
};

export default WhyUs;





const Container = styled.section`
padding: 2rem 10rem 0rem;

@media (max-width: 1200px){
    padding: 2rem 5rem 0rem;
}
@media (max-width: 900px){
    padding: 2rem 4rem 0rem;
    flex-direction: column;
}
@media (max-width: 800px){
    padding: 2rem 4rem 0rem;
    flex-direction: column;
}
@media (max-width: 700px){
    padding: 1rem 1rem 0rem;
}
`;

const Wraper = styled.div`
display: flex;

@media (max-width: 900px){
    flex-direction: column;
}
`;


const LeftContent = styled.div`
width: 50%;
@media (max-width: 900px){
    width: 100%;
}
`;
const WhyUsDescription = styled(Description)`
padding: .5rem 0rem;

@media (max-width: 1200px){
    width: 150%;
}
@media (max-width: 900px){
    width: 100%;
}
`;
const Items = styled.div`

`;
const Item = styled.div`
display: flex;
align-items: start;
padding: 1.5rem 0rem;
`;
const ItemThumb = styled.div`

`;
const Info = styled.div`
margin-left: 30px;
`;
const ItemTitle = styled.h4`
font-size: 20px;
font-weight: 600;
color: var(--font-title);
margin-bottom: 5px;
`;
const ItemDescription = styled(Description)`
margin: 0;
width: 60%;

@media (max-width: 700px){
    width: 80%;
}
`;


const RightContent = styled.div`
display: flex;
align-items: end;
margin: 0 auto;

img{
    width: 100%;
}
`;