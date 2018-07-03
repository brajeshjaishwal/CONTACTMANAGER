// src/components/contact-form

import React from 'react';
import { Form, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom'
import { Formic, Field } from 'formic'

const ContactField = ({field, form, label, ...rest}) => 
<div>
  <label>{label}</label>
  <input {...field} {...rest} />
  { form.errors[field.name] && form.touched[field.name] && <div className="has-danger">form.errors[field.name]</div> }
</div>

const ContactForm = () => 
  <div>
    <Formic>
      initialValues: {
      }

      validate: {(values) => {
        const errors = { name: {first: "", last: ""}, phone: "", email: ""}
        if(!values.name || !values.name.first)
          errors.name.first = { message: 'First name cannot be left blank' }
        if(!values.phone)
          errors.phone = { message: 'Phone cannot be left blank' }
        if(!values.email)
          errors.email = { message: 'Email cannot be left blank' }
        return errors
      }}

      onSubmitHandler = (values) => {
        
      }
      render = {({
        values,
        errors,
        touched,
        handleSubmit,
        handleChange,
        handleBlur,
        isSubmitting,
        loading
      }) => 
        <Form onSubmit={this.props.onSubmit} loading={loading}>
          {values}
          <Field type="text" name="name.first" label="First name" component={ ContactField } 
            onChange={handleChange}
            onBlur={handleBlur} />
          <Field type="text" name="name.last" label="First name" component={ ContactField } 
            onChange={handleChange}
            onBlur={handleBlur} />
          <Field type="text" name="phone" label="First name" component={ ContactField } 
            onChange={handleChange}
            onBlur={handleBlur} />
          <Field type="text" name="email" label="First name" component={ ContactField } 
            onChange={handleChange}
            onBlur={handleBlur} />
          <Button type="submit" className="ui basic button green" disabled={isSubmitting}/>
          <Link to="/" type="cancel" className="ui basic button red" >Cancel</Link>
          <DisplayFormikState {...this.props} />
        </Form>
      }
    </Formic>
  </div>

const DisplayFormikState = props =>
  <div style={{ margin: '1rem 0' }}>
    <h3 style={{ fontFamily: 'monospace' }} />
    <pre
      style={{
        background: '#f6f8fa',
        fontSize: '.65rem',
        padding: '.5rem',
      }}
    >
      <strong>props</strong> ={' '}
      {JSON.stringify(props, null, 2)}
    </pre>
  </div>;

export default ContactForm