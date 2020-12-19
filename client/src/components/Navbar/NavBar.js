import React from "react";
import {FaBars} from 'react-icons/fa'
import {Nav,NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavBarElements';

const NavBar = ({toggle, isOpen}) => {
  return (
    <>
        <Nav isOpen={isOpen}>
            <NavbarContainer>
                <NavLogo to="/">
                    mopay
                </NavLogo>

                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>

                <NavMenu>
                    <NavItem>
                        <NavLinks to="about">
                            About
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="discover">
                            Discover
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="services">
                            Services
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="signup">
                            Signup
                        </NavLinks>
                    </NavItem>
                 
                </NavMenu>
                <NavBtn>
                        <NavBtnLink to="/signin">
                            Sign In
                        </NavBtnLink>
                    </NavBtn>
            </NavbarContainer>
        </Nav>
    </>
  );
};

export default NavBar;
