import React from 'react';
import {
  Button, Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';
import PropTypes from 'prop-types';


const ModalRedux = ({ isOpen, data, toogle }) => {
  const confirm = () => {
    toogle();
    data.action(data.id);
  };

  return (
    <Modal isOpen={isOpen} className={data.className}>
      <ModalHeader>
        {data.title}
      </ModalHeader>
      <ModalBody>
        <p>{data.text}</p>
      </ModalBody>
      <ModalFooter>
        <Button outline color={data.type} onClick={confirm}>{data.actionLabel}</Button>
        <Button color="secondary" onClick={toogle}>Cancel</Button>
      </ModalFooter>
    </Modal>
  );
};

ModalRedux.defaultProps = {
  data: {
    type: 'default',
    title: '',
    id: '',
    text: '',
    items: [],
    actionLabel: '',
    action: null,
    className: ''
  }
};

ModalRedux.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  data: PropTypes.shape({
    type: PropTypes.string,
    title: PropTypes.string,
    id: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    text: PropTypes.string,
    items: PropTypes.array,
    actionLabel: PropTypes.string,
    action: PropTypes.func,
    className: PropTypes.string,
  }),
  toogle: PropTypes.func.isRequired
};

export default ModalRedux;
