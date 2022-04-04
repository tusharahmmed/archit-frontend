import React from 'react';
import './Team.css';
import styled from 'styled-components';
import { Line, SubTitle, Title } from '../Service/Service';
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Team = () => {
    return (
        <Container>

            <TitleSection>
                <SubTitle><Line /> Team</SubTitle>
                <Title>Best Expert & Experienced <br /> Our Team</Title>
            </TitleSection>

            <Members>

                <Member>
                    <MemberWraper className='member'>
                        <img src="/img/team-1.png" alt="" />
                        <Info className="member-info">
                            <Name>Jhon Smith</Name>
                            <Post>Civil Engineer</Post>
                            <SocialLinks>
                                <a href=""><FaFacebookF /></a>
                                <a href=""><FaTwitter /></a>
                                <a href=""><FaInstagram /></a>
                            </SocialLinks>
                        </Info>
                    </MemberWraper>
                </Member>

                <Member>
                    <MemberWraper className='member'>
                        <img src="/img/team-2.png" alt="" />
                        <Info className="member-info">
                            <Name>Jhon Smith</Name>
                            <Post>Civil Engineer</Post>
                            <SocialLinks>
                                <a href=""><FaFacebookF /></a>
                                <a href=""><FaTwitter /></a>
                                <a href=""><FaInstagram /></a>
                            </SocialLinks>
                        </Info>
                    </MemberWraper>
                </Member>

                <Member>
                    <MemberWraper className='member'>
                        <img src="/img/team-3.png" alt="" />
                        <Info className="member-info">
                            <Name>Jhon Smith</Name>
                            <Post>Civil Engineer</Post>
                            <SocialLinks>
                                <a href=""><FaFacebookF /></a>
                                <a href=""><FaTwitter /></a>
                                <a href=""><FaInstagram /></a>
                            </SocialLinks>
                        </Info>
                    </MemberWraper>
                </Member>

            </Members>

        </Container>
    );
};

export default Team;




const Container = styled.section`
padding: 6rem 10rem 4rem;

@media (max-width: 1200px){
    padding: 6rem 5rem;
}
@media (max-width: 900px){
    padding: 4rem 4rem;
}
@media (max-width: 800px){
    padding: 4rem 4rem;
}
@media (max-width: 700px){
    padding: 6rem 1rem;
}
`;



const TitleSection = styled.div`

`;

const Members = styled.div`
display: grid;
grid-template-columns: repeat(3,1fr);
gap: 30px;
padding: 8rem 0rem 2rem;



@media (max-width: 1200px){
    width: 80%;
    gap: 30px;
    grid-template-columns: repeat(2,1fr);
    padding: 4rem 0rem 2rem;
}
@media (max-width: 900px){
    grid-template-columns: repeat(2,1fr);
    padding: 3rem 0rem 2rem;
}
@media (max-width: 800px){
    padding: 3rem 0rem 2rem;
}
@media (max-width: 700px){
    grid-template-columns: repeat(1,1fr);
    width: 100%;
    padding: 2rem 0rem 2rem;
}
`;
const Member = styled.div`
cursor: pointer;

&:nth-child(2){
    margin-top: -100px;

    @media (max-width: 1200px){
        margin-top: 0px;
    }
}
&:nth-child(3){
    margin-top: -200px;

    @media (max-width: 1200px){
        margin-top: 0px;
    }
}

img{
    width: 100%;
    display: flex;
}
`;
const MemberWraper = styled.div`
position: relative;
img{

    transition: all ease-in-out .3s;
}

`;


const Info = styled.div`
position: absolute;
left: 0px;
bottom: 0px;
right: 0px;
height: 200px;
color: #fff;
background: var(--button-background);

display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`;
const Name = styled.h4`
font-size: 20px;
font-weight: 600;
`;
const Post = styled.p`
margin: 10px 0px 20px;
font-size: 16px;
`;
const SocialLinks = styled.div`

a{
    text-decoration: none;
    color: #fff;
    margin: 0 5px;
}
`;
