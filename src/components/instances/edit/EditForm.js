/* eslint-disable react/prop-types */
import React from 'react';
import { Formik } from 'formik';
import {
  Button, Col, Form, FormGroup, Input, Label
} from 'reactstrap';
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';

// Validation
import validationSchema from './instancesSchema';

const EditForm = ({
  isLoading, item, templatesList, roomsList, editItem
}) => {
  const handleEditItem = (values) => {
    const data = {
      template: Number(values.template),
      name: values.name,
      description: values.description,
      codename: values.codename,
      group: values.group,
      destination_rooms: values.destination_rooms && Number(values.destination_rooms),
      source_rooms: values.source_rooms ? values.source_rooms : []
    };
    editItem(data);
  };

  return (
    <React.Fragment>
      <Formik
        initialValues={{
          template: '',
          name: item.name,
          codename: item.codename,
          description: item.description,
          group: item.group,
          destination_rooms: roomsList.filter(el => el.id === item.destination_rooms.id),
          source_rooms: 1,
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
                <Label for="template" sm={3}>Template *</Label>
                <Col sm={9}>
                  <Typeahead
                    id="template"
                    multiple={false}
                    clearButton
                    onChange={(selected) => {
                      const value = (selected.length > 0) ? selected[0].value : '';
                      setFieldValue('template', value);
                    }}
                    onBlur={() => setFieldTouched('template', true)}
                    labelKey="name"
                    options={templatesList.map(el => ({ value: el.id, name: el.name }))}
                    defaultSelected={templatesList.filter(el => el.id === item.template.id)}
                  />
                  <div className="text-danger">
                    {(errors.template && touched.template) && errors.template}
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
                    defaultSelected={roomsList.filter(el => el.id === item.destination_rooms.id)}
                  />
                  {errors.destination_rooms && touched.destination_rooms && <div className="text-danger">{errors.destination_rooms}</div>}
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
                    options={roomsList.map(el => ({ value: el.id, name: el.name }))}
                    defaultSelected={
                      item.source_rooms.map(el => roomsList.filter(room => room.id === el))
                    }
                  />
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
