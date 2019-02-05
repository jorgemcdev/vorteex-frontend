import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';

import NavBar from '../shared/navbar/NavBar';
import LeftNav from '../shared/leftNav/LeftNav';

const Default = ({ children }) => (
  <React.Fragment>
    <NavBar />
    <Row>
      <Col md="2"><LeftNav /></Col>
      <Col md="10">{children}</Col>
    </Row>
  </React.Fragment>
);

Default.propTypes = {
  children: PropTypes.node.isRequired
};

export default Default;
