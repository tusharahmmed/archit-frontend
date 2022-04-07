import React, { useState } from 'react';
import styled from "styled-components";
import { Fade as Hamburger } from 'hamburger-react'
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";


const Header = () => {

    const [isMobile, setIsMobile] = useState(false);

    console.log(isMobile)

    const MenuLinks = () => {
        return (
            <>
                <a href="#home"><p>Home</p></a>
                <a href="#about"><p>About</p></a>
                <a href="#service"><p>Service</p></a>
                <a href="#team"><p>Team</p></a>
                <a href="#testimonial"><p>Testimonial</p></a>
            </>
        )
    }




    return (
        <Container>

            <Wraper>

                <Logo>
                    <img src="/img/logo.png" alt="" />
                </Logo>

                <Menu>
                    <DesktopMenu>
                        <MenuList>
                            <MenuLinks />
                        </MenuList>
                        <MenuButton>
                            <ButtonPrimary>Sign Up</ButtonPrimary>
                        </MenuButton>
                    </DesktopMenu>
                    <MobileMenu>
                        <Hamburger toggled={isMobile} toggle={setIsMobile} color="#214B85" />
                    </MobileMenu>
                </Menu>

            </Wraper>

            <MenuInMobile isMobile={isMobile}>
                <MobileMenuBody onClick={()=> setIsMobile(false)}>
                    <MenuLinks  onClick={()=> setIsMobile(false)}/>
                </MobileMenuBody>
                <MobileMenuFooter>
                    <SocialLinks>
                        <a href="#"><FaFacebookF /></a>
                        <a href="#"><FaTwitter /></a>
                        <a href="#"><FaInstagram /></a>
                    </SocialLinks>
                </MobileMenuFooter>
            </MenuInMobile>

        </Container>
    );
};

export default Header;



// styled components




const Container = styled.header`

@media (max-width: 900px){
    position: sticky;
    top: 0px;
    background: #fff;
    z-index: 9998;
}
`;
const Wraper = styled.div`
    padding: 1rem 10rem;
    display: flex;
    align-item: center;
    justify-content: space-between;

    @media (max-width: 1200px){
        padding: 1rem 5rem;
    }
    @media (max-width: 800px){
        padding: 1rem 4rem;
    }
    @media (max-width: 700px){
        padding: 1rem 1rem;
    }
    
`;
const Logo = styled.div`

img{
    
}
`;
const Menu = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`;

const DesktopMenu = styled.div`
display: flex;
align-items: center;
justify-content: space-between;

@media (max-width: 900px){
    display: none;
}
`;
const MobileMenu = styled.div`
z-index: 10000;
@media (min-width: 900px) {
    display: none;
  }
`;
const MenuList = styled.nav`
display: flex;
padding-right: 4rem;

a{
    margin: 0 13px;
    text-decoration: none;
    color: #214B85;
    font-weight: 500;
    font-size: 16px;
    
    &:hover {
        border-bottom: 2px;
    }
}


`;

const MenuButton = styled.div`

`;
const ButtonPrimary = styled.button`
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

&:hover{
    box-shadow: 0px 7px 20px #214b8536;
    transform: translateY(-4px);
}
`;


// mobile menu

const MenuInMobile = styled.div`
position: fixed;
z-index: 9999;
top: 0px;
left: 0px;
right: 0px;
bottom: 0px;
background: var(--section-background);
transition: all 0.3s ease 0s;
transform: ${props => props.isMobile ? 'translateX(0)' : "translateX(100%)"};
`;
const MobileMenuBody = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
padding-top: 6rem;
a{
    text-decoration: none;
    color: var(--font-title);
    font-size: 20px;
    padding: 10px;
}
`;
const MobileMenuFooter = styled.div`
position: absolute;
left: 0px;
bottom: 0px;
right: 0px;
height: 6rem;
`;
const SocialLinks = styled.div`
font-size: 25px;
display: flex;
align-items: center;
justify-content: center;

a{
    padding: 10px;
}
`;