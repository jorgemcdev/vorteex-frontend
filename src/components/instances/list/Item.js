/* eslint-disable camelcase */
import React from 'react';
import { Badge } from 'reactstrap';
import PropTypes from 'prop-types';

import ItemDropDown from './ItemDropDown';

const Item = ({ item, handleDelete, handleEdit }) => {
  const {
    id,
    name,
    codename,
    description,
    module,
    source_rooms,
    destination_rooms
  } = item;

  const sourceRooms = source_rooms && source_rooms.length && source_rooms.map(el => el && <Badge className="mr-1 text-white" color="warning" key={el.id}>{el.name}</Badge>);
  const destinationRooms = destination_rooms && <Badge color="success">{destination_rooms.name}</Badge>;
  const moduleName = module.name ? module.name : '';

  return (
    <tr key={id}>
      <td>{id}</td>
      <td>{name}</td>
      <td>{codename}</td>
      <td>{description}</td>
      <td>{moduleName}</td>
      <td>{sourceRooms}</td>
      <td>{destinationRooms}</td>
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
    module: '',
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
