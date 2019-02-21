/* eslint-disable camelcase */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  Card, CardBody, CardTitle, CardFooter, CardHeader,
  Col, Form, FormGroup, Label, Row, Button, ButtonGroup, Input
} from 'reactstrap';
import PropTypes from 'prop-types';

import {
  // Items
  instancesNewRequest,
  // Templates + Rooms
  templatesRequest, roomsRequest,
  // Message
  deleteMessage
} from '../../../actions/index';

import Alert from '../../shared/alert/Alert';

class FormNew extends Component {
  state = {
    template: '',
    name: '',
    codename: '',
    description: '',
    group: '',
    destination_rooms: '',
    source_rooms: ''
  };

  componentDidMount() {
    const { listTemplates, listRooms } = this.props;
    listTemplates();
    listRooms();
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleChangeMulti = (e) => {
    const value = Array.from(e.target.selectedOptions, option => option.value);
    this.setState({ source_rooms: value });
  }

  handleCancel = () => {
    const { history } = this.props;
    history.push('/instances');
  }

  formSubmit = (e) => {
    e.preventDefault();
    const {
      template, name, codename, description, group, source_rooms, destination_rooms
    } = this.state;

    const { newItem } = this.props;
    const data = {
      template: Number(template),
      name,
      description,
      codename,
      group,
      source_rooms,
      destination_rooms
    };
    newItem(data);
  };

  render() {
    const {
      template, name, codename, description, group, source_rooms, destination_rooms
    } = this.state;

    const {
      templatesList, roomsList, delMessage, messages
    } = this.props;

    return (
      <Row>
        <Col md="6">
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

              <Form>
                <FormGroup row>
                  <Label for="template" sm={3}>Template</Label>
                  <Col sm={9}>
                    <Input type="select" name="template" id="template" value={template} onChange={this.handleChange}>
                      <option />
                      {templatesList.map(item => (
                        <option key={item.id} value={item.id}>{item.name}</option>
                      ))}
                    </Input>
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Label for="name" sm={3}>Name</Label>
                  <Col sm={9}>
                    <Input
                      type="text"
                      name="name"
                      placeholder=""
                      value={name}
                      onChange={this.handleChange}
                    />
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Label for="codename" sm={3}>Code Name</Label>
                  <Col sm={9}>
                    <Input
                      type="text"
                      name="codename"
                      placeholder=""
                      value={codename}
                      onChange={this.handleChange}
                    />
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Label for="codename" sm={3}>Description</Label>
                  <Col sm={9}>
                    <Input
                      type="text"
                      name="description"
                      placeholder=""
                      value={description}
                      onChange={this.handleChange}
                    />
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Label for="group" sm={3}>Group</Label>
                  <Col sm={9}>
                    <Input type="select" name="group" value={group} onChange={this.handleChange}>
                      <option />
                      <option value="Collectors">Collectors</option>
                      <option value="Parsers">Parsers</option>
                    </Input>
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Label for="destination_rooms" sm={3}>Destination rooms</Label>
                  <Col sm={9}>
                    <Input type="select" name="destination_rooms" value={destination_rooms} onChange={this.handleChange}>
                      <option />
                      {roomsList.map(item => (
                        <option key={item.id} value={item.id}>{item.name}</option>
                      ))}
                    </Input>
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Label for="source_rooms" sm={3}>Source rooms</Label>
                  <Col sm={9}>
                    <Input type="select" multiple style={{ height: 120 }} name="source_rooms" value={source_rooms} onChange={this.handleChangeMulti}>
                      {roomsList.map(item => (
                        <option key={item.id} value={item.id}>{item.name}</option>
                      ))}
                    </Input>
                  </Col>
                </FormGroup>

              </Form>
            </CardBody>

            <CardFooter className="bg-white">
              <Row>
                <Col>
                  <Button color="secondary">Reset</Button>
                </Col>
                <Col className="text-right">
                  <ButtonGroup>
                    <Button outline color="primary" onClick={this.formSubmit}>Confirm</Button>
                    <Button outline color="danger" onClick={this.handleCancel}>Cancel</Button>
                  </ButtonGroup>
                </Col>
              </Row>
            </CardFooter>
          </Card>
        </Col>
      </Row>
    );
  }
}

FormNew.propTypes = {
  // Instances
  newItem: PropTypes.func.isRequired,
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

const mapStateToProps = state => ({
  // Templates
  templatesList: state.templates.items,
  // Rooms
  roomsList: state.rooms.items,
  // Messages
  messages: state.message
});

const mapDispatchToProps = dispatch => ({
  // Instances
  newItem: data => dispatch(instancesNewRequest(data)),
  // Templates
  listTemplates: () => dispatch(templatesRequest()),
  // Rooms
  listRooms: () => dispatch(roomsRequest()),
  // Messages
  delMessage: id => dispatch(deleteMessage(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(FormNew));
