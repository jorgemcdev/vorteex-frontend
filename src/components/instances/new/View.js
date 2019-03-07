/* eslint-disable camelcase */
import { Card, CardBody, CardTitle, CardFooter, CardHeader, Col, Row, Button } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Alert from '../../shared/alert/Alert';
import NewForm from './NewForm';


class View extends Component {

  componentDidMount() {
    const { listModules, listRooms, listTemplates } = this.props;
    listModules();
    listRooms();
    listTemplates();
  }

  handleCancel = () => {
    const { history } = this.props;
    history.push('/instances');
  }

  render() {
    const { templatesList, modulesList, isLoading, roomsList, messages, delMessage, newItem } = this.props;

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
                modulesList={modulesList}
                roomsList={roomsList}
                isLoading={isLoading}
              />

            </CardBody>

            <CardFooter className="bg-white">
              <Row>
                <Col>
                  <Button outline onClick={this.handleCancel}>Back to Instances</Button>
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
  newItem: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  templatesList: PropTypes.array.isRequired,
  modulesList: PropTypes.array.isRequired,
  listModules: PropTypes.func.isRequired,
  roomsList: PropTypes.array.isRequired,
  listRooms: PropTypes.func.isRequired,
  messages: PropTypes.array.isRequired,
  delMessage: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

export default withRouter(View);
