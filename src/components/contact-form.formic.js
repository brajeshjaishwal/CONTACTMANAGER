// src/components/contact-form

import React from 'react';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom'
import { Formik, Form, Field } from 'formik'

const MyInput = ({ field, form, label, ...rest }) => 
  <div className="ui form field">
    <label>{label}</label>
    <input {...field} {...rest} placeholder={label} />
      {form.errors[field.name] &&
        form.touched[field.name] && <div>{form.errors[field.name]}</div>}
  </div>

const ContactForm = ({contact, update, loading, onSubmitHandler}) => 
  <div>
    <Formik

      initialValues = { contact }

      validate={values => {
        const errors = { }
        if (!values.name || !values.name.first)
          errors['name.first'] = "First name cannot be left blank";
        if (!values.phone) errors.phone = "Phone number cannot be left blank";
        if (!values.email) errors.email = "Email cannot be left blank";
        return errors;
      }}

      onSubmit={(
        values,
        { setSubmitting, setErrors /* setValues and other goodies */ }
      ) => {
        //alert('I am here')
        console.log('contact form formic on submit')
        console.log(values)
        onSubmitHandler(values)
        /*.then(
          resp => {
            setSubmitting(false);
            // do whatevs...
            // props.updateUser(user)
          },
          errors => {
            setSubmitting(false);
            // Maybe transform your API's errors into the same shape as Formik's
            //setErrors(transformMyApiErrors(errors));
          }
        )*/
      }}
      
      render={({
        handleBlur,
        handleChange,
        isSubmitting,
        ...props
      }) => (
        <Form className="ui form" loading={loading} >
          <Field name="name.first" type="text" label="First Name" component={MyInput}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <Field name="name.last" type="text" label="Last Name" component={MyInput}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <Field name="phone" type="text" label="Phone number" component={MyInput}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <Field name="email" type="text" label="Email address" component={MyInput}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <Button type="submit" className="ui basic button primary green" disabled={!props.dirty || isSubmitting}>submit</Button>
          <Link to="/" type="cancel" className="ui basic button red" >Cancel</Link>
        </Form>
      )}
    />
  </div>

export default ContactForm