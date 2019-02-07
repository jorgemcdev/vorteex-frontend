import React from 'react';
import {
  Card, CardBody, CardTitle, CardFooter, CardHeader,
  Col, Form, FormGroup, Label, Row, Button, ButtonGroup, Input
} from 'reactstrap';

const RoomsAssociation = () => (
  <Row>
    <Col md="6">
      <Card>

        <CardHeader className="bg-white">
          <CardTitle>
            <strong>ROOMS ASSOCIATE</strong>
            {' '}
            <small>FORM</small>
          </CardTitle>
        </CardHeader>

        <CardBody>
          <Form>

            <FormGroup row>
              <Label for="bot" sm={2}>Bot</Label>
              <Col sm={10}>
                <Input type="select" name="bot" id="bot">
                  <option>Bot 1</option>
                  <option>Bot 2</option>
                  <option>Bot 3</option>
                  <option>Bot 4</option>
                  <option>Bot 5</option>
                </Input>
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label for="srcroom" sm={2}>SRC Room</Label>
              <Col sm={10}>
                <Input type="select" name="srcrom" id="srcroom">
                  <option>SRC Room 1</option>
                  <option>SRC Room 2</option>
                  <option>SRC Room 3</option>
                  <option>SRC Room 4</option>
                  <option>SRC Room 5</option>
                </Input>
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label for="dstroom" sm={2}>DST Room</Label>
              <Col sm={10}>
                <Input type="select" name="dstroom" id="srcroom">
                  <option>DST Room 1</option>
                  <option>DST Room 2</option>
                  <option>DST Room 3</option>
                  <option>DST Room 4</option>
                  <option>DST Room 5</option>
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

export default RoomsAssociation;
