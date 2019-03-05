/* eslint-disable camelcase */
import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';

import {
  Card, CardBody, CardTitle, CardFooter, CardHeader,
  Col, Row, Button
} from 'reactstrap';
import PropTypes from 'prop-types';

import Alert from '../../shared/alert/Alert';
import EditForm from './EditForm';

class View extends PureComponent {
  componentWillUnmount() {
    const { resetSelected } = this.props;
    // resetSelected();
  }

  handleCancel = () => {
    const { history } = this.props;
    history.push('/instances');
  }

  render() {
    const {
      item, isLoading, editItem,
      templatesList, roomsList,
      messages, delMessage
    } = this.props;

    return (
      <Row>
        <Col sm="12" md="7">
          <Card>
            <CardHeader className="bg-white">
              <CardTitle>
                <strong>INSTANCES</strong>
                {' '}
                <small>EDIT FORM</small>
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

              <EditForm
                item={item}
                editItem={editItem}
                templatesList={templatesList}
                roomsList={roomsList}
                isLoading={isLoading}
              />

            </CardBody>

            <CardFooter className="bg-white">
              <Row>
                <Col>
                  <Button onClick={this.handleCancel}>Back to Instances</Button>
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
  item: PropTypes.object.isRequired,
  editItem: PropTypes.func.isRequired,
  resetSelected: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  // Templates
  templatesList: PropTypes.array.isRequired,
  // Rooms
  roomsList: PropTypes.array.isRequired,
  // Messages
  messages: PropTypes.array.isRequired,
  delMessage: PropTypes.func.isRequired,
  // React Router
  history: PropTypes.object.isRequired
};

export default withRouter(View);
