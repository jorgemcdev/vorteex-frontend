/* eslint-disable camelcase */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import {
  Card, CardBody, CardTitle, CardFooter, CardHeader,
  Col, Row, Button
} from 'reactstrap';
import PropTypes from 'prop-types';

import Alert from '../../shared/alert/Alert';
import NewForm from './NewForm';

class View extends Component {
  componentDidMount() {
    const { listTemplates, listRooms } = this.props;
    listTemplates();
    listRooms();
  }

  handleCancel = () => {
    const { history } = this.props;
    history.push('/instances');
  }

  render() {
    const {
      templatesList, isLoading, roomsList, messages, delMessage, newItem
    } = this.props;

    return (
      <Row>
        <Col sm="12" md="7">
          <Card>
            <CardHeader className="bg-white">
              <CardTitle>
                <strong>INSTANCES</strong>
                {' '}
                <small>NEW FORM</small>
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

              <NewForm
                newItem={newItem}
                templatesList={templatesList}
                roomsList={roomsList}
                isLoading={isLoading}
              />

            </CardBody>

            <CardFooter className="bg-white">
              <Row>
                <Col>
                  <Button outline onClick={this.handleCancel}>Cancel</Button>
                </Col>
              </Row>
            </CardFooter>

          </Card>
        </Col>
      </Row>
    );
  }
}

View.propTypes = {
  // Instances
  newItem: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  // Templates
  templatesList: PropTypes.array.isRequired,
  listTemplates: PropTypes.func.isRequired,
  // Rooms
  roomsList: PropTypes.array.isRequired,
  listRooms: PropTypes.func.isRequired,
  // Messages
  messages: PropTypes.array.isRequired,
  delMessage: PropTypes.func.isRequired,
  // React Router
  history: PropTypes.object.isRequired
};

export default withRouter(View);
