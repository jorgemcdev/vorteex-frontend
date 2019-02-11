import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Button, Card, CardBody, CardGroup, Col, Container,
  Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row
} from 'reactstrap';
import PropTypes from 'prop-types';

// Import Actions
import { loginRequest, authReset } from '../../../actions/index';

// Import Components
import Alert from '../../shared/alert/Alert';

class LoginForm extends Component {
  state = {
    username: '',
    password: ''
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  formSubmit = (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    const { login } = this.props;
    const data = { username, password };
    login(data);
  };

  render() {
    const { isLoading, errors, reset } = this.props;

    return (
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
                  <Form onSubmit={this.formSubmit}>
                    <h1>Login</h1>
                    <p className="text-muted">Sign In to your account</p>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Username" name="username" id="username" autoComplete="username" onChange={this.handleChange} />
                    </InputGroup>
                    <InputGroup className="mb-4">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="password" placeholder="Password" name="password" id="password" autoComplete="current-password" onChange={this.handleChange} />
                    </InputGroup>
                    <Row>
                      <Col xs="6">
                        <Button color="primary" className="px-4" disabled={isLoading}>
                          {isLoading && <i className="fa fa-circle-o-notch fa-spin mr-1" />}
                          Login
                        </Button>
                      </Col>
                      <Col xs="6" className="text-right">
                        <Button color="link" className="px-0">Forgot password?</Button>
                      </Col>
                    </Row>
                  </Form>
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
  }
}

LoginForm.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  errors: PropTypes.string.isRequired,
  login: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  isLoading: state.auth.isLoading,
  errors: state.auth.errors
});

const mapDispatchToProps = dispatch => ({
  login: data => dispatch(loginRequest(data)),
  reset: () => dispatch(authReset())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
