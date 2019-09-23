import React from 'react';
import {
  Button, Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';
import PropTypes from 'prop-types';

const GraphsModal = ({ isOpen, toogle }) => (
  <Modal isOpen={isOpen}>
    <ModalHeader>
      Graphs
    </ModalHeader>
    <ModalBody>
      <p>Form</p>
    </ModalBody>
    <ModalFooter>
      <Button outline color="primary" onClick={toogle}>Close</Button>
    </ModalFooter>
  </Modal>
);

GraphsModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toogle: PropTypes.func.isRequired
};

export default GraphsModal;
