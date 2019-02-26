import React from 'react';
import {
  Button, Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';
import PropTypes from 'prop-types';


const GraphsModal = ({ isOpen }) => {
  const confirm = () => {
    toogle();
  };

  return (
    <Modal isOpen={isOpen}>
      <ModalHeader>
        Graphs
      </ModalHeader>
      <ModalBody>
        <p>Form</p>
      </ModalBody>
      <ModalFooter>
        <Button outline color={data.type} onClick={confirm}>Confirm</Button>
        <Button color="secondary" onClick={toogle}>Cancel</Button>
      </ModalFooter>
    </Modal>
  );
};

GraphsModal.propTypes = {
  isOpen: PropTypes.bool.isRequired
};

export default GraphsModal;
