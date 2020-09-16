import React, {useState} from 'react';
import './style.css'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';


    const Header = (props) => {
        
        const [collapsed, setCollapsed] = useState(true);
      
        const toggleNavbar = () => setCollapsed(!collapsed);
      
        return (
          <div className>
            <Navbar color="faded" light>
              <NavbarBrand href="/" className="mr-auto">
                  <img src="/public/img/pesquiosa.pgn"/>
            </NavbarBrand>

              <NavbarToggler onClick={toggleNavbar} className="mr-2" />
              <Collapse isOpen={!collapsed} navbar>
                <Nav navbar>
                  <NavItem>
                    <NavLink href="#">Projeto FortBrasil GitHub</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="https://github.com/welligtonrios?tab=repositories">GitHub</NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
          </div>
        );
      }
      
    /*return (
        <>
        <header id="header">
            <a href="#" className="logo">
                {logo}
                {icon}
            </a>

            <nav className="navbar">
                <ul className="nav-list">
                    <a href="#" className="nav-item">Home</a>
                    <a href="#" className="nav-item">Services</a>
                    <a href="#" className="nav-item">Contact</a>
                </ul>
            </nav>


        </header>

        <div className="listarPersonagem">
            <button className="barra2">
                aaa
            </button>
        </div>

        </>
    );*/

export default Header;