import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';

// eslint-disable-next-line react/prefer-stateless-function
class Example extends React.Component {
  render() {
    return (
      <div className="">
        <Nav vertical>
          <NavItem>
            <NavLink to="/graphs" activeClassName="active" tag={RRNavLink}>Graphs</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Another Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink disabled href="#">Disabled Link</NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
}

export default Example;
