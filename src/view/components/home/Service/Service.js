import React from 'react';
import styled from 'styled-components';
import { Description } from '../HeroSection/HeroSection';

const Service = () => {
    return (
        <Container id='service'>

            <Heading>

                <SubTitle>
                    <Line /> Service
                </SubTitle>
                <Title>
                    Best Architecture <br /> Company
                </Title>

            </Heading>

            <Body>

                <ItemWraper>
                    <Item>
                        <img src="/img/icon-box.png" alt="box" />
                        <ItemTitle>Professional Design</ItemTitle>
                        <ItmeDescription>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dumm</ItmeDescription>
                        <Action>
                            Read more <ActionLine />
                        </Action>
                    </Item>
                </ItemWraper>

                <ItemWraper>
                    <Item>
                        <img src="/img/icon-female.png" alt="box" />
                        <ItemTitle>Qualified Planning</ItemTitle>
                        <ItmeDescription>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dumm</ItmeDescription>
                        <Action>
                            Read more <ActionLine />
                        </Action>
                    </Item>
                </ItemWraper>

                <ItemWraper>
                    <Item>
                        <img src="/img/icon-architect.png" alt="box" />
                        <ItemTitle>Skilled Architecture</ItemTitle>
                        <ItmeDescription>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dumm</ItmeDescription>
                        <Action>
                            Read more <ActionLine />
                        </Action>
                    </Item>
                </ItemWraper>

            </Body>

        </Container>
    );
};

export default Service;




const Container = styled.section`
padding: 3rem 10rem 6rem;

@media (max-width: 1200px){
    padding: 3rem 5rem 6rem;
}
@media (max-width: 900px){
    padding: 3rem 4rem 6rem;
    flex-direction: column;
}
@media (max-width: 800px){
    padding: 3rem 4rem 6rem;
    flex-direction: column;
}
@media (max-width: 700px){
    padding: 3rem 1rem 6rem;
}
`;
const Heading = styled.section`
padding: 2rem 0rem 9rem;

@media (max-width: 900px){
    padding: 2rem 0rem 4rem;
}
`;
export const SubTitle = styled.h4`
font-size: 28px;
font-weight: 500;
color: var(--font-title);

display: flex;
align-items: center;

@media (max-width: 1200px){
    font-size: 22px;
    margin-bottom: .6rem;
}
@media (max-width: 700px){
    font-size: 18px;
    
}
`;
export const Line = styled.span`
width: 65px;
height: 2px;
background: var(--button-background);
display: inline-block;
margin-right: 20px;
`;
export const Title = styled.h2`
font-size: 60px;
line-height: 72px;
color: var(--font-title);
font-weight: 500;

@media (max-width: 1200px){
    font-size: 32px;
    line-height: 45px
}
@media (max-width: 700px){
    font-size: 26px;
    line-height: 36px;
    line-height: 36px;
}

`;



const Body = styled.div`
display: grid;
grid-template-columns: repeat(3,1fr);
gap: 30px;

@media (max-width: 900px){
    grid-template-columns: repeat(2,1fr);
}
@media (max-width: 800px){
    grid-template-columns: repeat(1,1fr);
}
`;
const ItemWraper = styled.div`

&:nth-child(2){
    margin-top: -120px;

    @media (max-width: 900px){
        margin-top: 0px;
    }

    }
    &:nth-child(3){
    margin-top: -240px;

    @media (max-width: 900px){
        margin-top: 0px;
    }

    }
`;

const Item = styled.div`
text-align: center;
background: var(--section-background);
padding: 6rem 2rem;
display: flex;
align-items: center;
flex-direction: column;


@media (max-width: 1200px){
    padding: 4rem 2rem;
}
@media (max-width: 900px){
    padding: 4rem 2rem;
    grid-template-columns: repeat(2,1fr);
}
@media (max-width: 800px){
    padding: 4rem 2rem;
    grid-template-columns: repeat(1,1fr);
}
@media (max-width: 700px){
    padding: 4rem 2rem;
}

img{
   
}
`;
const ItemTitle = styled.h3`
margin-top: 1rem;
font-size: 22px;
font-weight: 600;
color: var(--font-title);
`;
const ItmeDescription = styled(Description)`
margin: 1.5rem 0rem;
width: 80%;
`;
const Action = styled.div`
font-size: 14px;
font-weight: 500;
display: flex;
align-items: center;
cursor: pointer;
color: var(--font-title)
`;
const ActionLine = styled.span`
width: 30px;
height: 2px;
background: var(--button-background);
display: inline-block;
margin-left: 15px;
`;


