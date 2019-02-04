import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Container, Button, Col, Form, FormGroup, Label, Input, Row
} from 'reactstrap';
import PropTypes from 'prop-types';

// Import Actions
import { loginRequest, authReset } from '../../actions/index';

// Import Components
import Alert from '../shared/alert/Alert';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

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
        <br />
        <br />
        <Row className="justify-content-center">
          <Col md="8">
            {errors
              && <Alert type="danger" title="Login" text={errors} onDismiss={reset} />}
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md="4">
            <Form onSubmit={this.formSubmit}>
              <FormGroup>
                <Label for="username">Username</Label>
                <Input type="text" name="username" id="username" onChange={this.handleChange} />
              </FormGroup>
              <FormGroup>
                <Label for="password">Password</Label>
                <Input type="password" name="password" id="password" onChange={this.handleChange} />
              </FormGroup>
              <Button
                outline
                color="primary"
                block
                disabled={isLoading}
              >
                {isLoading && <i className="fa fa-circle-o-notch fa-spin mr-1" />}
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

Login.propTypes = {
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
)(Login);
