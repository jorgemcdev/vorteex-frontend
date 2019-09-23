import React from 'react';
import { Spinner } from 'reactstrap';
import PropTypes from 'prop-types';

const Loading = ({ color, size }) => (
  <div className="animated fadeIn pt-1 text-center">
    <Spinner color={color} size={size} />
  </div>
);

Loading.defaultProps = {
  color: 'primary',
  size: 'lg'
};

Loading.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string
};

export default Loading;
