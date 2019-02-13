/* eslint-disable camelcase */
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import PropTypes from 'prop-types';

const Item = ({ item, handleDelete }) => {
  const {
    id, name, codename, description, group, template, source_rooms, destination_rooms
  } = item;

  return (
    <React.Fragment>
      <tr>
        <td>{id}</td>
        <td><Link to={`/instances/edit/${id}`}>{name}</Link></td>
        <td>{codename}</td>
        <td>{description}</td>
        <td>{group}</td>
        <td>{template.name}</td>
        <td>{destination_rooms !== null ? destination_rooms.name : ''}</td>
        <td>{source_rooms.length}</td>
        <td width="1%">
          <Button outline color="danger" size="sm" id={id} onClick={handleDelete}>
            <i className="fa fa-minus" />
          </Button>
        </td>
      </tr>
    </React.Fragment>
  );
};

Item.defaultProps = {
  item: {
    id: null,
    name: '',
    codename: '',
    description: '',
    group: '',
    template: '',
    destination_rooms: {},
    source_rooms: [],
  }
};

Item.propTypes = {
  item: PropTypes.object,
  handleDelete: PropTypes.func.isRequired
};

export default Item;
