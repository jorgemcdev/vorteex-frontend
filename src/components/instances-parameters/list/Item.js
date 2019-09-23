/* eslint-disable camelcase */
import React from 'react';
import { Badge } from 'reactstrap';
import PropTypes from 'prop-types';

import ItemDropDown from './ItemDropDown';

const Item = ({ item, handleDelete, handleEdit }) => {
  const {
    id,
    key,
    value,
    value_type
  } = item;

  return (
    <tr key={id}>
      <td>{id}</td>
      <td>{key}</td>
      <td>{value}</td>
      <td>{value_type}</td>
      <td width="1%">
        <ItemDropDown
          id={id}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      </td>
    </tr>
  );
};

Item.defaultProps = {
  item: {
    id: null,
    key: '',
    value: '',
    value_type: '',
  }
};

Item.propTypes = {
  item: PropTypes.object,
  handleDelete: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
};

export default Item;
