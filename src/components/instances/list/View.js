/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
import {
  Card, CardHeader, CardTitle, CardBody, Button
} from 'reactstrap';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

// Config Pagination
import { ITEMS_PER_PAGE, VISIBLE_PAGES } from '../../../config';

// Components
import ListItems from './ListItems';
import Alert from '../../shared/alert/Alert';

class View extends Component {
  state = {
    activePage: 1
  };

  componentDidMount() {
    const { listItems } = this.props;
    listItems();
  }

  componentWillUnmount() {
    const { resetItems } = this.props;
    resetItems();
  }

  handleNewRecord = () => {
    // Redirect to NewForm
    const { history } = this.props;
    history.push(`${history.location.pathname}/new`);
  }

  handlePageChange = (current) => {
    // Update Active Page
    this.setState({
      activePage: current
    });
    // Add ?page on URL
    const { history } = this.props;
    history.push(`${history.location.pathname}?page=${current}`);
  }

  handleDelete = (id) => {
    const { modalOpen, deleteItem } = this.props;
    const data = {
      type: 'danger',
      title: 'Confirmation',
      id,
      text: 'Delete this Record ?',
      items: [],
      actionLabel: 'Confirm',
      action: deleteItem,
      className: ''
    };
    modalOpen(data);
  }

  render() {
    const {
      items, isLoading, messages, delMessage
    } = this.props;

    const { activePage } = this.state;

    return (
      <Card>
        <CardHeader className="bg-white">
          <CardTitle>
            <strong>INSTANCES</strong>
            {' '}
            <small>LIST</small>
          </CardTitle>
        </CardHeader>

        <CardBody>

          {messages.map(message => (
            <Alert
              key={message.id}
              type={message.type}
              title={message.title}
              text={message.text}
              onDismiss={() => delMessage(message.id)}
            />
          ))}

          <Button color="primary" className="mb-3" onClick={this.handleNewRecord}>New Instance</Button>

          <ListItems
            // Items
            items={items}
            isLoading={isLoading}
            handleDelete={this.handleDelete}
            // Pagination
            activePage={activePage}
            perPage={ITEMS_PER_PAGE}
            visiblePages={VISIBLE_PAGES}
            handlePageChange={this.handlePageChange}
          />
        </CardBody>
      </Card>
    );
  }
}

View.defaultProps = {
  items: []
};

View.propTypes = {
  // Items
  items: PropTypes.array,
  isLoading: PropTypes.bool.isRequired,
  listItems: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
  resetItems: PropTypes.func.isRequired,
  // Messages
  messages: PropTypes.array.isRequired,
  delMessage: PropTypes.func.isRequired,
  // Modal
  modalOpen: PropTypes.func.isRequired,
  // History
  history: PropTypes.object.isRequired,
};

export default withRouter(View);
