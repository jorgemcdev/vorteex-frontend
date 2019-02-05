import React from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Badge, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, NavLink
} from 'reactstrap';
import {
  AppAsideToggler, AppHeaderDropdown, AppNavbarBrand, AppSidebarToggler
} from '@coreui/react';

// Images
import logo from '../../assets/images/brand/logo.jpg';
import sygnet from '../../assets/images/brand/sygnet.jpg';
import avatar from '../../../public/images/avatars/7.jpg';

//  const { children, ...attributes } = this.props;

const DefaultHeader = (props) => {
  const { onLogout } = props;

  return (
    <React.Fragment>
      <AppSidebarToggler className="d-lg-none" display="md" mobile />
      <AppNavbarBrand
        full={{
          src: logo, width: 89, height: 25, alt: 'CoreUI Logo'
        }}
        minimized={{
          src: sygnet, width: 30, height: 30, alt: 'CoreUI Logo'
        }}
      />
      <AppSidebarToggler className="d-md-down-none" display="lg" />

      <Nav className="d-md-down-none" navbar>
        <NavItem className="px-3">
          <NavLink to="/" tag={RRNavLink}>Dashboard</NavLink>
        </NavItem>
        <NavItem className="px-3">
          <NavLink href="#">Users</NavLink>
        </NavItem>
        <NavItem className="px-3">
          <NavLink href="#">Settings</NavLink>
        </NavItem>
      </Nav>
      <Nav className="ml-auto" navbar>
        <NavItem className="d-md-down-none">
          <NavLink href="#">
            <i className="icon-bell" />
            <Badge pill color="danger">5</Badge>
          </NavLink>
        </NavItem>
        <NavItem className="d-md-down-none">
          <NavLink href="#">
            <i className="icon-list" />
          </NavLink>
        </NavItem>
        <NavItem className="d-md-down-none">
          <NavLink href="#">
            <i className="icon-location-pin" />
          </NavLink>
        </NavItem>
        <AppHeaderDropdown direction="down">
          <DropdownToggle nav>
            <img src={avatar} className="img-avatar" alt="admin@bootstrapmaster.com" />
          </DropdownToggle>
          <DropdownMenu right style={{ right: 'auto' }}>
            <DropdownItem header tag="div" className="text-center">
              <strong>Account</strong>
            </DropdownItem>
            <DropdownItem>
              <i className="fa fa-bell-o" />
              Updates
              <Badge color="info">42</Badge>
            </DropdownItem>
            <DropdownItem>
              <i className="fa fa-envelope-o" />
              Messages
              <Badge color="success">42</Badge>
            </DropdownItem>
            <DropdownItem>
              <i className="fa fa-tasks" />
              Tasks
              <Badge color="danger">42</Badge>
            </DropdownItem>
            <DropdownItem>
              <i className="fa fa-comments" />
              Comments
              <Badge color="warning">42</Badge>
            </DropdownItem>
            <DropdownItem header tag="div" className="text-center">
              <strong>Settings</strong>
            </DropdownItem>
            <DropdownItem>
              <i className="fa fa-user" />
              Profile
            </DropdownItem>
            <DropdownItem>
              <i className="fa fa-wrench" />
              Settings
            </DropdownItem>
            <DropdownItem>
              <i className="fa fa-usd" />
              Payments
              <Badge color="secondary">42</Badge>
            </DropdownItem>
            <DropdownItem>
              <i className="fa fa-file" />
              Projects
              <Badge color="primary">42</Badge>
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem>
              <i className="fa fa-shield" />
              Lock Account
            </DropdownItem>
            <DropdownItem
              onClick={e => onLogout(e)}
            >
              <i className="fa fa-lock" />
              Logout
            </DropdownItem>
          </DropdownMenu>
        </AppHeaderDropdown>
      </Nav>
      <AppAsideToggler className="d-md-down-none" />
      {/* <AppAsideToggler className="d-lg-none" mobile /> */}
    </React.Fragment>
  );
};

DefaultHeader.propTypes = {
  onLogout: PropTypes.func.isRequired
};

export default DefaultHeader;
