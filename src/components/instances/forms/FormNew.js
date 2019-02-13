/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-console */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {
  Card, CardBody, CardTitle, CardFooter, CardHeader,
  Col, Form, FormGroup, Label, Row, Button, ButtonGroup, Input
} from 'reactstrap';
import PropTypes from 'prop-types';

class FormNew extends Component {
  state = {
    template: '',
    name: '',
    codename: '',
    group: ''
  };

  componentDidMount() {
    console.log('did mount');
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleCancel = () => {
    const { history } = this.props;
    history.push('/instances');
  }

  formSubmit = (e) => {
    e.preventDefault();
    /*
    const {
      template, name, codename, group
    } = this.state;

    const { function } = this.props;
    const data = { template, name, codename, group };
    function(data);
    */
  };

  render() {
    const {
      template, name, codename, group
    } = this.state;

    const testValues = [
      { value: 'Template A' },
      { value: 'Template B' },
      { value: 'Template C' }
    ];
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
              <Form>
                <FormGroup row>
                  <Label for="template" sm={2}>Template</Label>
                  <Col sm={10}>
                    <Input type="select" name="template" id="template" value={template} onChange={this.handleChange}>
                      <option />
                      {testValues.map(item => <option value={item.value}>{item.value}</option>)}
                    </Input>
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Label for="name" sm={2}>Name</Label>
                  <Col sm={10}>
                    <Input
                      type="text"
                      name="name"
                      id="name"
                      placeholder=""
                      value={name}
                      onChange={this.handleChange}
                    />
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Label for="codename" sm={2}>Code Name</Label>
                  <Col sm={10}>
                    <Input
                      type="text"
                      name="codename"
                      id="codename"
                      placeholder=""
                      value={codename}
                      onChange={this.handleChange}
                    />
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Label for="group" sm={2}>Group</Label>
                  <Col sm={10}>
                    <Input
                      type="text"
                      name="group"
                      id="group"
                      placeholder=""
                      value={group}
                      onChange={this.handleChange}
                    />
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
                    <Button outline color="primary">Confirm</Button>
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
  history: PropTypes.object.isRequired
};

export default withRouter(FormNew);
