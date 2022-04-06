import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaHeart } from "react-icons/fa";
import styled from 'styled-components';

const Footer = () => {
    return (
        <Container>

            <Top>

                <LeftContent>
                    <img src="/img/footer.png" alt="" />
                </LeftContent>

                <RightContent>

                    <Contact>
                        <Title>Contact</Title>
                        <p>+0123456789</p>
                        <p>Info@gmail.com</p>
                        <p>London, England</p>
                    </Contact>

                    <NewsLatter>
                        <Title>Newsletter</Title>
                        <input type="email" placeholder='Email' name="" id="" />
                        <br />
                        <SubmitButton>Send Now</SubmitButton>
                    </NewsLatter>

                </RightContent>

            </Top>

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
            <Designer>Designed with <FaHeart color='#D7120D' /> by <a href="https://www.facebook.com/rajib.sing.988" target="_blank">Albert</a> and Developed by <a href="https://www.linkedin.com/in/tusharahmmed/" target="_blank">Tushar</a></Designer>

        </Container>
    );
};

export default Footer;





const Container = styled.footer`
background: var(--font-title);
position: relative;
`;


const Top = styled.div`
display: flex;
align-items: center;
color: #fff;
width: 100%;

@media (max-width: 900px){
    flex-direction: column;
}

`;
const LeftContent = styled.div`
width: 50%;

@media (max-width: 900px){
    width: 100%;
}
img{
    width: 100%;
    display: flex;
}
`;
const RightContent = styled.div`
display: flex;
margin-top: -3rem;

@media (max-width: 1200px){
    margin-top: 0px;
}
@media (max-width: 900px){
    padding: 3rem 0rem 2rem;
    width: 100%;
    justify-content: space-around;
}
@media (max-width: 700px){
    flex-direction: column;
    justify-content: center;
    padding-left: 2rem;
    width: 90%;
}
`;
const Contact = styled.div`
padding: 0 3rem;

@media (max-width: 900px){
    padding: 0rem;
}

p{
    font-size: 16px;
    padding: .2rem 0rem;
}
`;
const Title = styled.h3`
font-size: 25px;
font-weight: 600;
padding-bottom: 1rem;
`;
const NewsLatter = styled.form`
padding: 0 3rem;


@media (max-width: 900px){
    padding: 0rem;
}
@media (max-width: 700px){
    margin-top: 25px;
}

input{
    width: 285px;
    height: 52px;
    background: transparent;
    border: 1px solid #fff;
    outline: none;
    color: #fff;
    font-size: 16px;
    padding: 0px 10px;

    &::placeholder{
        color: #fff;
    }
}
`;
const SubmitButton = styled.button`
width: 162px;
height: 52px;
background: #fff;
border: none;
outline: none;
color: var(--button-background);
font-weight: 500;
font-size: 16px;
cursor: pointer;
transition: all 0.3s ease 0s;
margin-top: 1rem;
&:hover{
    box-shadow: 0px 7px 20px #214b8536;
    transform: translateY(-4px);
}
`;


const Bottom = styled.div`
padding: 2.5rem 0rem;
width: 50%;
display: flex;
color: #fff;
justify-content: space-around;
margin: auto;
align-items: center;
position: relative;

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

const Designer = styled.p`
position: absolute;
font-size: 13px;
bottom: 10px;
left: 20px;
color: #938280;
@media (max-width: 1000px){
    display: none;
}
a{
    text-decoration: none;
    color: white;
}
`;