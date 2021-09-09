import React from 'react';
import styled, {css} from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { menuData } from '../data/MenuData';
import { Button } from './Button';
import { FaBars } from 'react-icons/fa'
//import bars from '../images/bars.svg'


const Nav = styled.nav`
    height: 60px;
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    z-index: 100;
    width: 100%;
    position: fixed;
`;

const NavLink = css`
    color: #fff;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    text-decoration: none;
`;
const Logo = styled(Link)`
    ${NavLink}
    font-style: italic;
`;
const MenuBars = styled(FaBars)`
    display: block;
    height: 30px;
    width: 30px;
    background-size: contain;
    background-color: white;
    cursor: ponter;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%, 35%);
`;

const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -48px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;
const NavMenuLinks = styled(Link)`
    ${NavLink}
`;
const Navbtn = styled.div`
    display: flex;
    align-items: center;
    margin-right: 24px;
    
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

const Navbar = ({toggle}) => {
    return (
        <Nav>
            <Logo to="/">RAFCE</Logo>
            <MenuBars onClick={toggle}/>
            <NavMenu>
                {menuData.map((item, index) => (
                    <NavMenuLinks to={item.link} key={index}>{item.title}</NavMenuLinks>
                ))}
            </NavMenu>
            <Navbtn>
                <Button to='/contact' primary='true'>Contact Us</Button>
            </Navbtn>
        </Nav>
    )
}

export default Navbar
