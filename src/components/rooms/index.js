import React from 'react';
import {
  Card, CardBody, CardTitle, CardFooter, CardHeader,
  Col, Form, FormGroup, Label, Row, Button, ButtonGroup, Input
} from 'reactstrap';

const Rooms = () => (
  <Row>
    <Col md="6">
      <Card>

        <CardHeader className="bg-white">
          <CardTitle>
            <strong>ROOMS</strong>
            {' '}
            <small>FORM</small>
          </CardTitle>
        </CardHeader>

        <CardBody>
          <Form>
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
              <Label for="config" sm={2}>Config</Label>
              <Col sm={10}>
                <Input type="text" name="config" id="config" placeholder="" />
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

export default Rooms;
