
import React, { Component } from 'react';
import {
  Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Nav
} from 'reactstrap';
import PropTypes from 'prop-types';

class ItemDropDown extends Component {
  state = { isDropdownOpen: false }

  toggle = () => {
    this.setState(prevState => ({
      isDropdownOpen: !prevState.isDropdownOpen
    }));
  }

  render() {
    const { isDropdownOpen } = this.state;
    const {
      id, handleDelete, handleEdit, handleParameters
    } = this.props;

    return (
      <Nav>
        <Dropdown nav isOpen={isDropdownOpen} toggle={this.toggle}>
          <DropdownToggle nav className="text-body">
            <i className="fa fa-ellipsis-v" />
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem onClick={() => handleEdit(id)}>
              <i className="fa fa-edit text-body mr-2" />
              Edit
            </DropdownItem>
            <DropdownItem onClick={() => handleParameters(id)}>
              <i className="fa fa-puzzle-piece text-body mr-2" />
              Instances Parameters
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem onClick={() => handleDelete(id)}>
              <i className="fa fa-minus mr-2 text-danger" />
              Delete
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </Nav>
    );
  }
}

ItemDropDown.propTypes = {
  id: PropTypes.number.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleParameters: PropTypes.func.isRequired
};

export default ItemDropDown;
