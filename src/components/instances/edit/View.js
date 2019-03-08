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
  handleCancel = () => {
    const { history } = this.props;
    history.push('/instances');
  }

  render() {
    const {
      item, isLoading, editItem,
      modulesList, roomsList, templatesList,
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
                modulesList={modulesList}
                roomsList={roomsList}
                templatesList={templatesList}
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
  item: PropTypes.object.isRequired,
  editItem: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  templatesList: PropTypes.func.isRequired,
  modulesList: PropTypes.array.isRequired,
  roomsList: PropTypes.array.isRequired,
  messages: PropTypes.array.isRequired,
  delMessage: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

export default withRouter(View);
