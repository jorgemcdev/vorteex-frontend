/* eslint-disable react/prop-types */
import React from 'react';
import { Formik } from 'formik';
import { Button, Col, Form, FormGroup, Input, Label } from 'reactstrap';
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';

import validationSchema from './instancesSchema';

const EditForm = ({ isLoading, item, modulesList, roomsList, editItem }) => {

  const handleEditItem = (values) => {
    const data = {
      module: Number(values.module),
      name: values.name,
      codename: values.codename,
      description: values.description,
      source_rooms: values.source_rooms ? values.source_rooms : [],
      destination_rooms: values.destination_rooms ? values.destination_rooms : '',
    };
    editItem(data);
  };

  console.log('=====>>'); 
  console.log(item); 
  // console.log([] + roomsList.filter(el => el.id === item.destination_rooms.id));

  return (
    <React.Fragment>
      <Formik
        initialValues={{
          module: '',
          name: item.name,
          codename: item.codename,
          description: item.description,
          source_rooms: [],
          destination_rooms: item.destination_rooms ? roomsList.filter(el => el.id === item.destination_rooms.id) : '',
        }}
        onSubmit={values => handleEditItem(values)}
        validationSchema={validationSchema}
      >

        {(props) => {
          const {
            touched, errors, isValid, values, // isSubmitting, dirty
            handleChange, handleBlur, handleSubmit, // handleReset,
            setFieldValue, setFieldTouched
          } = props;

          return (
            <Form onSubmit={handleSubmit}>

              <FormGroup row>
                <Label for="module" sm={3}>Module *</Label>
                <Col sm={9}>
                  <Typeahead
                    id="module"
                    multiple={false}
                    clearButton
                    onChange={(selected) => {
                      const value = (selected.length > 0) ? selected[0].value : '';
                      setFieldValue('module', value);
                    }}
                    onBlur={() => setFieldTouched('module', true)}
                    labelKey="name"
                    options={modulesList.map(el => ({ value: el.id, name: el.name }))}
                    defaultSelected={modulesList.filter(el => el.id === item.module.id)}
                  />
                  <div className="text-danger">
                    {(errors.module && touched.module) && errors.module}
                  </div>
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
                  {errors.name && touched.name && <div className="text-danger">{errors.name}</div>}
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
                <Label for="group" sm={3}>Group *</Label>
                <Col sm={9}>
                  <Input
                    id="group"
                    type="text"
                    value={values.description}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.group && touched.group && <div className="text-danger">{errors.group}</div>}
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
                      const value = (selected.length > 0) ? selected.map(el => el.value) : [];
                      setFieldValue('source_rooms', value);
                    }}
                    onBlur={() => setFieldTouched('source_rooms', true)}
                    labelKey="name"
                    options={[]} // roomsList.map(el => ({ value: el.id, name: el.name }))}
                    defaultSelected={[]} // item.source_rooms.map(el => roomsList.filter(room => room.id === el))
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
                      const value = (selected.length > 0) ? selected[0].value : '';
                      setFieldValue('destination_rooms', value);
                    }}
                    onBlur={() => setFieldTouched('destination_rooms', true)}
                    labelKey="name"
                    options={roomsList.map(el => ({ value: el.id, name: el.name }))}
                    defaultSelected={item.destination_rooms ? roomsList.filter(el => el.id === item.destination_rooms.id) : []}
                  />
                  {errors.destination_rooms && touched.destination_rooms && <div className="text-danger">{errors.destination_rooms}</div>}
                </Col>
              </FormGroup>

              <Button color="primary" className="px-4 float-right" type="submit" disabled={!isValid || isLoading}>
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

export default EditForm;
