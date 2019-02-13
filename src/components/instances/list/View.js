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

class View extends Component {
  state = {
    activePage: 1
  };

  componentDidMount() {
    const { listItems } = this.props;
    listItems();
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

  handleDelete = (e) => {
    const { modalOpen } = this.props;
    const { id } = e.target;
    const data = {
      type: 'danger',
      title: 'Confirmation',
      id,
      text: `Delete this Record ? #${id}`,
      items: [],
      actionLabel: 'Confirm',
      className: ''
    };
    modalOpen(data);
    // Delete Record
  }

  render() {
    const { items, isLoading } = this.props;
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
  listItems: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  // History
  history: PropTypes.object.isRequired,
  // Modal
  modalOpen: PropTypes.func.isRequired
};

export default withRouter(View);
