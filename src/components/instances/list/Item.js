/* eslint-disable camelcase */
import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Badge } from 'reactstrap';
import PropTypes from 'prop-types';

const Item = ({ item, handleDelete }) => {
  const {
    id, name, codename, description, group, template, source_rooms, destination_rooms
  } = item;

  // <Badge color="secondary">New</Badge>
  return (
    <React.Fragment>
      <tr>
        <td>{id}</td>
        <td><Link to={`/instances/edit/${id}`}>{name}</Link></td>
        <td>{codename}</td>
        <td>{description}</td>
        <td>{group}</td>
        <td>{template.name}</td>
        <td>{destination_rooms ? <Badge color="success">{destination_rooms.name}</Badge> : ''}</td>
        <td>{source_rooms && source_rooms.map(el => <Badge className="mr-1 text-white" color="warning">{el.name}</Badge>)}</td>
        <td width="1%">
          <Button outline color="danger" size="sm" onClick={() => handleDelete(id)}>
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
    destination_rooms: null,
    source_rooms: [],
  }
};

Item.propTypes = {
  item: PropTypes.object,
  handleDelete: PropTypes.func.isRequired
};

export default Item;
