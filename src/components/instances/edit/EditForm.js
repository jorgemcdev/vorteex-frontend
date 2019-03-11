/* eslint-disable react/prop-types */
import React from 'react';
import { Formik } from 'formik';
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import {
  Button, ButtonGroup, Col, Form, FormGroup, Input, Label
} from 'reactstrap';
import PropTypes from 'prop-types';

// Validation Schema
import validationSchema from './instancesSchema';

const EditForm = ({
  // Item
  isLoading, item, editItem, handleCancel,
  // Related Data
  modulesList, roomsList, // templatesList
}) => {
  // Initial Values
  const initialValues = {
    module: item.module,
    name: item.name,
    codename: item.codename,
    description: item.description,
    source_rooms: item.source_rooms.length ? item.source_rooms.map(el => el.id) : [],
    destination_rooms: item.destination_rooms ? item.destination_rooms.id : '',
  };

  // Handle Events
  const handleEditItem = (values) => {
    const data = {
      id: item.id,
      module: Number(values.module),
      name: values.name,
      codename: values.codename,
      description: values.description,
      source_rooms: values.source_rooms.length ? values.source_rooms : [],
      destination_rooms: values.destination_rooms ? Number(values.destination_rooms) : '',
    };
    editItem(data);
  };

  console.log('initialvalues', initialValues);

  return (
    <React.Fragment>
      <Formik
        onSubmit={values => handleEditItem(values)}
        validationSchema={validationSchema}
        enableReinitialize={false}
        initialValues={initialValues}
      >

        {(formikProps) => {
          const {
            touched, errors, isValid, values, isSubmitting, dirty,
            handleChange, handleBlur, handleSubmit, handleReset,
            setFieldValue, setFieldTouched
          } = formikProps;

          return (
            <Form onSubmit={handleSubmit}>

              <FormGroup row>
                <Label for="id" sm={3}># ID</Label>
                <Col sm={9}>
                  <p className="pt-2">{item.id}</p>
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label for="module" sm={3}>Module *</Label>
                <Col sm={9}>
                  <Typeahead
                    id="module"
                    multiple={false}
                    clearButton
                    selectHintOnEnter
                    onChange={(selected) => {
                      const value = (selected.length > 0) ? selected[0].id : '';
                      setFieldValue('module', value);
                    }}
                    onBlur={() => setFieldTouched('module', true)}
                    labelKey="name"
                    labelId="id"
                    options={modulesList.map(el => ({ id: el.id, name: el.name }))}
                    selected={modulesList.filter(el => (el.id === values.module) && ({ id: el.id, name: el.name }))}
                  />
                  {errors.module && touched.module && <div className="text-danger">{errors.module}</div>}
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
                  />
                  {errors.name && <div className="text-danger">{errors.name}</div>}
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
                  />
                  {errors.codename && touched.codename && <div className="text-danger">{errors.codename}</div>}
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label for="description" sm={3}>Description *</Label>
                <Col sm={9}>
                  <Input
                    id="description"
                    type="textarea"
                    value={values.description}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.description && touched.description && <div className="text-danger">{errors.description}</div>}
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label for="source_rooms" sm={3}>Source Rooms</Label>
                <Col sm={9}>
                  <Typeahead
                    id="source_rooms"
                    multiple
                    clearButton
                    selectHintOnEnter
                    onChange={(selected) => {
                      const value = (selected.length > 0) ? selected.map(el => el.id) : [];
                      setFieldValue('source_rooms', value);
                    }}
                    onBlur={() => setFieldTouched('source_rooms', true)}
                    labelKey="name"
                    labelId="id"
                    options={roomsList.map(el => ({ id: el.id, name: el.name }))}
                    defaultSelected={values.source_rooms.map(room => roomsList.filter(el => (el.id === room) && ({ id: el.id, name: el.name })))[0]}
                  />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label for="destination_rooms" sm={3}>Destination Rooms</Label>
                <Col sm={9}>
                  <Typeahead
                    id="destination_rooms"
                    multiple={false}
                    clearButton
                    selectHintOnEnter
                    onChange={(selected) => {
                      const value = (selected.length > 0) ? selected[0].id : '';
                      setFieldValue('destination_rooms', value);
                    }}
                    onBlur={() => setFieldTouched('destination_rooms', true)}
                    labelKey="name"
                    labelId="id"
                    options={roomsList.map(el => ({ id: el.id, name: el.name }))}
                    selected={roomsList.filter(el => (el.id === initialValues.destination_rooms) && ({ id: el.id, name: el.name }))}
                  />
                </Col>
              </FormGroup>

              <FormGroup className="pt-4">
                <Button onClick={handleCancel}><i className="fa fa-chevron-left" /></Button>

                <ButtonGroup className="float-right">
                  <Button
                    color="primary"
                    type="submit"
                    disabled={!isValid || isLoading}
                  >
                    {isLoading && <i className="fa fa-circle-o-notch fa-spin mr-1" />}
                    Submit
                  </Button>

                  <Button
                    color="secondary"
                    type="reset"
                    value="Reset"
                    onClick={handleReset}
                    disabled={!dirty || isSubmitting}
                  >
                    Reset
                  </Button>
                </ButtonGroup>
              </FormGroup>

            </Form>
          );
        }}
      </Formik>
    </React.Fragment>
  );
};

EditForm.propTypes = {
  // Item
  isLoading: PropTypes.bool.isRequired,
  item: PropTypes.object.isRequired,
  editItem: PropTypes.func.isRequired,
  // Related Data
  roomsList: PropTypes.array.isRequired,
  modulesList: PropTypes.array.isRequired,
};

export default EditForm;
