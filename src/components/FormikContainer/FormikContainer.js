import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from '../FormikControl/FormikControl'

function FormikContainer() {
  const dropdownOptions = [
    { key: 'Select an Option', value: '' },
    { key: 'Option 1', value: 'selectOption1' },
    { key: 'Option 2', value: 'selectOption2' },
    { key: 'Option 3', value: 'selectOption3' },
  ]
  
  const radioOptions = [
    { key: 'Option 1', value: 'radioOption1' },
    { key: 'Option 2', value: 'radioOption2' },
    { key: 'Option 3', value: 'radioOption3' },
  ]
  
  const initialValues = {
    name: '',
    email: '',
    description: '',
    selectOption: '',
    radioOption: ''
  }

  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().required('Required').email("Invalid email address"),
    description: Yup.string().required('Required'),
    selectOption: Yup.string().required('Required'),
    radioOption: Yup.string().required('Required')
  })

  const onSubmit = values => console.log('Form data', values)

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {formik => (
        <Form>
          <FormikControl
            control='input'
            type="name"
            label='Name'
            name='name'
            placeholder="Enter your name"
          />
          <FormikControl
            control='input'
            type="email"
            label='Email'
            name='email'
            placeholder="Enter a valid email"
          />
          <FormikControl
            control='textarea'
            label='Description'
            name='description'
            rows="5"
            placeholder="Please describe"
          />
          <FormikControl
            control='select'
            label='Select a topic'
            name='selectOption'
            options={dropdownOptions}
          />
          <FormikControl
            control='radio'
            label='Radio topic'
            name='radioOption'
            options={radioOptions}
          />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  )
}

export default FormikContainer
