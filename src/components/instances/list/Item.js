/* eslint-disable camelcase */
import React from 'react';
import { Badge } from 'reactstrap';
import PropTypes from 'prop-types';

import ItemDropDown from './ItemDropDown';

const Item = ({ item, handleDelete, handleEdit }) => {
  const {
    id, name, codename, description, group, template, source_rooms, destination_rooms
  } = item;

  const sourceRooms = source_rooms && source_rooms.map(el => <Badge className="mr-1 text-white" color="warning" key={el.id}>{el.name}</Badge>);
  const badges = destination_rooms && <Badge color="success">{destination_rooms.name}</Badge>;
  const templateName = template.name ? template.name : '';

  return (
    <tr key={id}>
      <td>{id}</td>
      <td>{name}</td>
      <td>{codename}</td>
      <td>{description}</td>
      <td>{group}</td>
      <td>{templateName}</td>
      <td>{badges}</td>
      <td>{sourceRooms}</td>
      <td width="1%">
        <ItemDropDown id={id} handleDelete={handleDelete} handleEdit={handleEdit} />
      </td>
    </tr>
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
  handleDelete: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired
};

export default Item;
