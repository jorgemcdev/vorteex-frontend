/* eslint-disable react/prop-types */
import React from 'react';
import { Formik } from 'formik';
import {
  Button, Col, Form, Input,
  FormFeedback, FormGroup, Label
} from 'reactstrap';

import validationSchema from './instancesSchema';

const NewForm = ({
  isLoading, templatesList, roomsList, newItem
}) => {
  const handleNewItem = (values) => {
    const data = {
      template: Number(values.template),
      name: values.name,
      description: values.description,
      codename: values.codename,
      group: values.group,
      destination_rooms: values.destination_rooms && Number(values.destination_rooms),
      source_rooms: values.source_rooms && values.source_rooms.map(el => Number(el))
    };
    newItem(data);
  };

  return (
    <React.Fragment>
      <Formik
        initialValues={{
          template: '',
          name: '',
          codename: '',
          description: '',
          group: '',
          source_rooms: '',
          destination_rooms: ''
        }}
        onSubmit={values => handleNewItem(values)}
        validationSchema={validationSchema}
      >
        {(props) => {
          const {
            values, touched, errors, isValid, // isSubmitting, dirty
            handleChange, handleBlur, handleSubmit, // handleReset,
            setFieldValue
          } = props;
          return (
            <Form onSubmit={handleSubmit}>

              <FormGroup row>
                <Label for="template" sm={3}>Template *</Label>
                <Col sm={9}>
                  <Input
                    id="template"
                    type="select"
                    value={values.template}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.template && touched.template && 'text-input error is-invalid form-control'
                    }
                  >
                    <option />
                    {templatesList.map(item => (
                      <option key={item.id} value={item.id}>{item.name}</option>
                    ))}
                  </Input>
                  <FormFeedback>
                    {errors.template && touched.template && <div className="input-feedback">{errors.template}</div>}
                  </FormFeedback>
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label for="name" sm={3}>Name *</Label>
                <Col sm={9}>
                  <Input
                    id="name"
                    type="text"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.name && touched.name && 'text-input error is-invalid form-control'
                    }
                  />
                  <FormFeedback>
                    {errors.name && touched.name && <div className="input-feedback">{errors.name}</div>}
                  </FormFeedback>
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label for="codename" sm={3}>Code Name *</Label>
                <Col sm={9}>
                  <Input
                    id="codename"
                    type="text"
                    value={values.codename}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.codename && touched.codename && 'text-input error is-invalid form-control'
                    }
                  />
                  <FormFeedback>
                    {errors.codename && touched.codename && <div className="input-feedback">{errors.codename}</div>}
                  </FormFeedback>
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label for="description" sm={3}>Description *</Label>
                <Col sm={9}>
                  <Input
                    id="description"
                    type="text"
                    value={values.description}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.description && touched.description && 'text-input error is-invalid form-control'
                    }
                  />
                  <FormFeedback>
                    {errors.description && touched.description && <div className="input-feedback">{errors.description}</div>}
                  </FormFeedback>
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label for="group" sm={3}>Group *</Label>
                <Col sm={9}>
                  <Input
                    id="group"
                    type="text"
                    value={values.group}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.group && touched.group && 'text-input error is-invalid form-control'
                    }
                  />
                  <FormFeedback>
                    {errors.group && touched.group && <div className="input-feedback">{errors.group}</div>}
                  </FormFeedback>
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label for="destination_rooms" sm={3}>Destination Rooms *</Label>
                <Col sm={9}>
                  <Input
                    id="destination_rooms"
                    type="select"
                    value={values.destination_rooms}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.destination_rooms && touched.destination_rooms && 'text-input error is-invalid form-control'
                    }
                  >
                    <option />
                    {roomsList.map(item => (
                      <option key={item.id} value={item.id}>{item.name}</option>
                    ))}
                  </Input>
                  <FormFeedback>
                    {errors.destination_rooms && touched.destination_rooms && <div className="input-feedback">{errors.destination_rooms}</div>}
                  </FormFeedback>
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label for="source_rooms" sm={3}>Source Rooms</Label>
                <Col sm={9}>
                  <Input
                    id="source_rooms"
                    type="select"
                    multiple
                    style={{ height: 120 }}
                    onChange={evt => setFieldValue(
                      'source_rooms',
                      [].slice
                        .call(evt.target.selectedOptions)
                        .map(option => option.value)
                    )}
                  >
                    <option />
                    {roomsList.map(item => (
                      <option key={item.id} value={item.id}>{item.name}</option>
                    ))}
                  </Input>
                  <FormFeedback>
                    {errors.source_rooms && touched.source_rooms && <div className="input-feedback">{errors.source_rooms}</div>}
                  </FormFeedback>
                </Col>
              </FormGroup>

              <Button color="primary" className="px-4" type="submit" disabled={!isValid || isLoading}>
                {isLoading && <i className="fa fa-circle-o-notch fa-spin mr-1" />}
                Submit
              </Button>

            </Form>
          );
        }}
      </Formik>
    </React.Fragment>
  );
};

export default NewForm;
