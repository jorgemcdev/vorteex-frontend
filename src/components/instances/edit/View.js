import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {
  Card, CardBody, CardTitle, CardHeader, Col, Row
} from 'reactstrap';
import PropTypes from 'prop-types';
// Components
import Alert from '../../shared/alert/Alert';
import EditForm from './EditForm';

class View extends Component {
  async componentDidMount() {
    const { item, listModules, listRooms } = this.props;
    await listModules();
    await listRooms();
    if (item.length === 0) {
      // TODO
      console.log('kkkkkkkkkkkkkkkkkkkkkkkkkkkk');
    }
  }

  // Handle Events
  handleCancel = () => {
    const { history } = this.props;
    history.push('/instances');
  };

  render() {
    const {
      item, isLoading, editItem,
      modulesList, roomsList, messages, delMessage,
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
                // item
                item={item}
                isLoading={isLoading}
                editItem={editItem}
                handleCancel={this.handleCancel}
                // Related Data
                modulesList={modulesList}
                roomsList={roomsList}
              />

            </CardBody>

          </Card>
        </Col>
      </Row>
    );
  }
}

View.propTypes = {
  // Item
  item: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
  editItem: PropTypes.func.isRequired,
  // Related Data
  modulesList: PropTypes.array.isRequired,
  roomsList: PropTypes.array.isRequired,
  listModules: PropTypes.func.isRequired,
  listRooms: PropTypes.func.isRequired,
  // Messages
  messages: PropTypes.array.isRequired,
  delMessage: PropTypes.func.isRequired,
  // History
  history: PropTypes.object.isRequired
};

export default withRouter(View);
