/* eslint-disable react/prop-types */
import React from 'react';
import { Formik } from 'formik';
import {
  Button, Col, Form, Input, InputGroup, InputGroupAddon,
  InputGroupText, Row, FormFeedback
} from 'reactstrap';

import validationSchema from './loginSchema';

const LoginForm = ({ isLoading, login }) => (
  <React.Fragment>
    <Formik
      initialValues={{ username: '', password: '' }}
      onSubmit={values => login(values)}
      validationSchema={validationSchema}
    >
      {(props) => {
        const {
          values,
          touched,
          errors,
          // dirty,
          isValid,
          handleChange,
          handleBlur,
          handleSubmit,
          // handleReset,
        } = props;
        return (
          <Form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <p className="text-muted">Sign In to your account</p>
            <InputGroup className="mb-3">
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <i className="icon-user" />
                </InputGroupText>
              </InputGroupAddon>
              <Input
                id="username"
                type="text"
                value={values.username}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.username && touched.username && 'text-input error is-invalid form-control'
                }
              />
              <FormFeedback>
                {errors.username && touched.username && <div className="input-feedback">{errors.username}</div>}
              </FormFeedback>
            </InputGroup>

            <InputGroup className="mb-4">
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <i className="icon-lock" />
                </InputGroupText>
              </InputGroupAddon>
              <Input
                id="password"
                type="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.password && touched.password && 'text-input error is-invalid form-control'
                }
              />
              <FormFeedback>
                {errors.password && touched.password && <div className="input-feedback">{errors.password}</div>}
              </FormFeedback>
            </InputGroup>

            <Row>
              <Col xs="12" md="6">
                <Button color="primary" className="px-4" type="submit" disabled={!isValid || isLoading}>
                  {isLoading && <i className="fa fa-circle-o-notch fa-spin mr-1" />}
                  Submit
                </Button>
              </Col>
            </Row>
          </Form>
        );
      }}
    </Formik>
  </React.Fragment>
);

export default LoginForm;
