import React from 'react';
import {
  Card, CardBody, CardGroup, Col, Container, Row
} from 'reactstrap';
import PropTypes from 'prop-types';

// Import Components
import LoginForm from './LoginForm';
import Alert from '../../shared/alert/Alert';

const View = ({
  isLoading, errors, login, reset
}) => (
  <Container>

    <Row className="justify-content-center">
      <Col md="8">
        {errors && <Alert type="danger" title="Login" text={errors} onDismiss={reset} />}
      </Col>
    </Row>

    <Row className="justify-content-center">
      <Col md="8">
        <CardGroup>

          <Card className="p-4">
            <CardBody>
              <LoginForm
                isLoading={isLoading}
                login={login}
              />
            </CardBody>
          </Card>

          <Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
            <CardBody className="text-center">
              <div>
                <h2>Vorteex</h2>
                <p>Lorem ipsum dolor sit amet</p>
              </div>
            </CardBody>
          </Card>

        </CardGroup>
      </Col>
    </Row>
  </Container>
);

View.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  errors: PropTypes.string.isRequired,
  login: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired
};

export default View;
