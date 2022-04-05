import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import styled from 'styled-components';

const Footer = () => {
    return (
        <Container>
            {/* <Top>
                <LeftContent>

                </LeftContent>
                <RightContent>

                </RightContent>
            </Top> */}
            <Bottom>
                <Socials>
                    <a href="#"><FaFacebookF /></a>
                    <a href="#"><FaTwitter /></a>
                    <a href="#"><FaInstagram /></a>
                </Socials>
                <Copywright>
                <span>©</span> Copyright 2022 all right reserved
                </Copywright>
            </Bottom>
        </Container>
    );
};

export default Footer;





const Container = styled.footer`
background: var(--font-title);
`;


const Bottom = styled.div`
padding: 3rem 0rem;
width: 50%;
display: flex;
color: #fff;
justify-content: space-around;
margin: auto;
align-items: center;

@media (max-width: 900px){
    
    width: 80%;
}
@media (max-width: 800px){
    flex-direction: column;
    width: 100%;
}
`;
const Socials = styled.div`

    a{
        text-decoration: none;
        color: #fff;
        margin: 0 15px;
        font-size: 25px;
    }

`;
const Copywright = styled.p`
display: flex;
align-items: center;
span{
    font-size: 25px;
    margin-right: 10px;
}
`;