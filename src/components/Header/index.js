import React, {useState} from 'react';
import './style.css'
/*Booststrap / reactstrap*/
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Badge } from 'reactstrap';

    const Header = (props) => {
        
        const [collapsed, setCollapsed] = useState(true);
      
        const toggleNavbar = () => setCollapsed(!collapsed);
      
        return (
          <div className="navBar">
            <Navbar  light >
              <NavbarBrand href="/" className="mr-auto">
                 <h1><Badge color="danger">MARVEL</Badge></h1>
            </NavbarBrand>

              <NavbarToggler onClick={toggleNavbar} className="mr-2" />
              <Collapse isOpen={!collapsed} navbar>
                <Nav navbar>
                  <NavItem>
                    <a class="linkBarra" href="#"><h6>Projeto FortBrasil GitHub</h6></a>
                  </NavItem>
                  <NavItem>
                    <a class="linkBarra" href="https://github.com/welligtonrios?tab=repositories"><h6>GitHub</h6></a>
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
          </div>
        );
      }
      

export default Header;