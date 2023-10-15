import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from '../FormikControl/FormikControl'

function FormikContainer() {
  const initialValues = {
    email: ''
  }
  const validationSchema = Yup.object({
    email: Yup.string().required('Required')
  })
  const onSubmit = values => console.log('Form data', values)

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {
        formik => (
          <Form>
            <FormikControl
              control='input'
              type="email"
              label='email'
              name='email'
              placeholder="Enter a valid email"
            />
            <button type="submit">Submit</button>
          </Form>
        )
      }
    </Formik>
  )
}

export default FormikContainer
