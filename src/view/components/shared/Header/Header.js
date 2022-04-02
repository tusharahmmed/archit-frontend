import React from 'react';
import styled from "styled-components";


const Header = () => {


    const MenuLinks = () => {
        return (
            <>
                <a href="#"><p>Home</p></a>
                <a href="#"><p>About</p></a>
                <a href="#"><p>Service</p></a>
                <a href="#"><p>Team</p></a>
                <a href="#"><p>Testimonial</p></a>
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
                    <MenuList>
                        <MenuLinks />
                    </MenuList>
                    <MenuButton>
                        <ButtonPrimary>Sign Up</ButtonPrimary>
                    </MenuButton>
                </Menu>
            </Wraper>
        </Container>
    );
};

export default Header;



// styled components




const Container = styled.header`

`;
const Wraper = styled.header`
    padding: 1rem 10rem;
    display: flex;
    align-item: center;
    justify-content: space-between;
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