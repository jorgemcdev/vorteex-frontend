import React from 'react';
import { Alert } from 'reactstrap';
import PropTypes from 'prop-types';

const AlertMessage = ({
  type, title, text, onDismiss
}) => (
  <Alert className={`mx-0 bg-white border border-${type}`}>
    <div className="d-flex flex-row">
      <div className={`p-2 text-${type}`}>
        {type === 'danger' && <i className="fa fa-stop-circle fa-2x" />}
        {type === 'warning' && <i className="fa fa-exclamation-triangle fa-2x" />}
        {type === 'info' && <i className="fa fa-info-circle fa-2x" />}
      </div>
      <div className="p-2">
        {title && <h4 className={`alert-heading text-${type}`}>{ title }</h4>}
        {text && <p className="mb-0">{ text }</p>}
      </div>
      {onDismiss
        && (
        <div className="p-2 ml-auto p-2 h-100">
          <button type="button" className="close" aria-label="Close" onClick={onDismiss}>
            <span aria-hidden="true">×</span>
          </button>
        </div>
        )
      }
    </div>
  </Alert>
);

AlertMessage.defaultProps = {
  onDismiss: null
};

AlertMessage.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onDismiss: PropTypes.func
};

export default AlertMessage;
