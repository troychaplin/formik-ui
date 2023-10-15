import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from '../FormikControl/FormikControl'

function FormikContainer() {
  const dropdownOptions = [
    { key: 'Select an Option', value: '' },
    { key: 'Option 1', value: 'sOption1' },
    { key: 'Option 2', value: 'sOption2' },
    { key: 'Option 3', value: 'sOption3' },
  ]
  
  const radioOptions = [
    { key: 'Option 1', value: 'rOption1' },
    { key: 'Option 2', value: 'rOption2' },
    { key: 'Option 3', value: 'rOption3' },
  ]
  
  const checkboxOptions = [
    { key: 'Option 1', value: 'cOption1' },
    { key: 'Option 2', value: 'cOption2' },
    { key: 'Option 3', value: 'cOption3' },
  ]
  
  const initialValues = {
    name: '',
    email: '',
    description: '',
    selectOption: '',
    radioOption: '',
    checkboxOption: []
  }

  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().required('Required').email("Invalid email address"),
    description: Yup.string().required('Required'),
    selectOption: Yup.string().required('Required'),
    radioOption: Yup.string().required('Required'),
    checkboxOption: Yup.array().required('Required')
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
            type="text"
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
          <FormikControl
            control='checkbox'
            label='Checkbox topic'
            name='checkboxOption'
            options={checkboxOptions}
          />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  )
}

export default FormikContainer
