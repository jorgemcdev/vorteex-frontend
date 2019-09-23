/* eslint-disable camelcase */
import { Card, CardBody, CardTitle, CardFooter, CardHeader, Col, Row, Button } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Alert from '../../shared/alert/Alert';
import NewForm from './NewForm';


class View extends Component {
  componentDidMount() {
    const { listModules, listRooms, listInstancesParameters } = this.props;
    listModules();
    listRooms();
    listInstancesParameters();
  }

  handleCancel = () => {
    const { history } = this.props;
    history.push('/instances');
  }

  render() {
    const { instancesParametersList, isLoading, messages } = this.props;

    return (
      <Row>
        <Col sm="12" md="7">
          <Card>
            <CardHeader className="bg-white">
              <CardTitle>
                <strong>INSTANCES PARAMETERS</strong>
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
                instancesParametersList={instancesParametersList}
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
  isLoading: PropTypes.bool.isRequired,
  instancesParametersList: PropTypes.array.isRequired,
  listInstancesParameters: PropTypes.array.isRequired,
  messages: PropTypes.array.isRequired,
  history: PropTypes.object.isRequired
};

export default withRouter(View);
