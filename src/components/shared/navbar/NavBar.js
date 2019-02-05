import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import PropTypes from 'prop-types';

// Import Actions
import { logoutRequest } from '../../../actions';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  toggle = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  }

  handleLogout = (e) => {
    e.preventDefault();
    const { logout } = this.props;
    logout();
  }

  render() {
    const { isOpen } = this.state;
    const { isAuthenticated } = this.props;
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarToggler onClick={this.toggle} />
          <NavbarBrand tag={Link} to="/">
            Vorteex
          </NavbarBrand>
          {isAuthenticated
            && (
              <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink href="#" onClick={this.handleLogout}>Logout</NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            )}
        </Navbar>
      </div>
    );
  }
}

NavBar.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logoutRequest())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
