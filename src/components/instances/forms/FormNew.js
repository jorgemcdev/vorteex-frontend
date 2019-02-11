/* eslint-disable no-console */
import React from 'react';
import {
  Card, CardBody, CardTitle, CardFooter, CardHeader,
  Col, Form, FormGroup, Label, Row, Button, ButtonGroup, Input
} from 'reactstrap';

const FormEdit = () => {
  console.log('bot form');
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
                  <Input type="select" name="template" id="template">
                    <option />
                    <option>Template 1</option>
                    <option>Template 2</option>
                    <option>Template 3</option>
                    <option>Template 4</option>
                    <option>Template 5</option>
                  </Input>
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label for="name" sm={2}>Name</Label>
                <Col sm={10}>
                  <Input type="text" name="name" id="name" placeholder="" />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label for="codename" sm={2}>Code Name</Label>
                <Col sm={10}>
                  <Input type="text" name="codename" id="codename" placeholder="" />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label for="group" sm={2}>Group</Label>
                <Col sm={10}>
                  <Input type="text" name="group" id="group" placeholder="" />
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
                  <Button outline color="danger">Cancel</Button>
                </ButtonGroup>
              </Col>
            </Row>
          </CardFooter>
        </Card>
      </Col>
    </Row>
  );
};

export default FormEdit;
