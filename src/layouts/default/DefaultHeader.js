import React from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, NavLink
} from 'reactstrap';
import {
  AppHeaderDropdown, AppNavbarBrand, AppSidebarToggler
} from '@coreui/react';

// Images
import logo from '../../assets/images/brand/logo.jpg';
import sygnet from '../../assets/images/brand/sygnet.jpg';

const DefaultHeader = (props) => {
  const { user, onLogout } = props;

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
      </Nav>

      <Nav className="ml-auto mr-4" navbar>
        <AppHeaderDropdown direction="down">
          <DropdownToggle nav caret>
            <i className="fa fa-user mr-2 fa-lg" />
            <strong>{user.username}</strong>
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem header tag="div" className="text-center">
              <strong>Settings</strong>
            </DropdownItem>
            <DropdownItem>
              <i className="fa fa-user" />
              Profile
            </DropdownItem>
            <DropdownItem>
              <i className="fa fa-key" />
              Change Password
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem
              onClick={e => onLogout(e)}
            >
              <i className="fa fa-lock" />
              Logout
            </DropdownItem>
          </DropdownMenu>
        </AppHeaderDropdown>
      </Nav>
    </React.Fragment>
  );
};

DefaultHeader.propTypes = {
  user: PropTypes.shape({
    user_id: PropTypes.number,
    username: PropTypes.string
  }).isRequired,
  onLogout: PropTypes.func.isRequired
};

export default DefaultHeader;
