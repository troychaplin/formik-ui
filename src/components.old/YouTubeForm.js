import React from 'react'
import { Formik, Form, Field, ErrorMessage, FieldArray, FastField } from 'formik'
import * as Yup from 'yup'
import TextError from './TextError'

const initialValues = {
  name: '',
  email: '',
  comments: '',
  social: {
    facebook: '',
    twitter: ''
  },
  phoneNumbers: ['',''],
  phNumbers: ['']
}

const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email format').required('Required'),
  comments: Yup.string().required('Required')
})

const validateComments = value => {
  let error
  if(!value) {
    error = 'Required'
  }
  return error
}

const onSubmit = values => {
  console.log('Form values', values)
}

function YouTubeForm() {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      validateOnChange={false}
      // validateOnBlur={false}
    >
      <Form>
        <div className="form-control">
          <label htmlFor='name'>Name</label>
          <Field
            type='text'
            id='name'
            name='name'
          />
          <ErrorMessage name='name' component={TextError} />
        </div>

        <div className="form-control">
          <FastField name='email'>
            {(props) => {
              const { field, meta } = props
              // const { field, form, meta } = props

              // console.log('Render props', props)
              // console.log('Field render')

              return (
                <>
                  <label htmlFor='email'>Email</label>
                  <input type='text' id='email' {...field} />
                  {meta.touched && meta.error ? 
                    <ErrorMessage name='email'>
                      {(errorMsg) => <div className='error'>{errorMsg}</div>}
                    </ErrorMessage> : null}
                </>
              )
            }}
          </FastField>
        </div>

        <div className="form-control">
          <label htmlFor='comments'>Comments</label>
          <Field
            as='textarea'
            id='comments'
            name='comments'
            validate={validateComments}
          />
          <ErrorMessage name='comments' component={TextError} />
        </div>

        <div className="form-control">
          <label htmlFor='facebook'>Facebook Profile</label>
          <Field
            type='text'
            id='facebook'
            name='social.facebook'
          />
          <ErrorMessage name='facebook' component='div' />
        </div>

        <div className="form-control">
          <label htmlFor='twitter'>Twitter Profile</label>
          <Field
            type='text'
            id='twitter'
            name='social.twitter'
          />
          <ErrorMessage name='twitter' component='div' />
        </div>

        <div className="form-control">
          <label htmlFor='primaryPh'>Primary Phone</label>
          <Field
            type='text'
            id='primaryPh'
            name='phoneNumbers[0]'
          />
          <ErrorMessage name='primaryPh' component='div' />
        </div>

        <div className="form-control">
          <label htmlFor='secondaryPh'>Secondary Phone</label>
          <Field
            type='text'
            id='secondaryPh'
            name='phoneNumbers[1]'
          />
          <ErrorMessage name='secondaryPh' component='div' />
        </div>

        <div className="form-control">
          <label htmlFor='secondaryPh'>List of Phone Numbers</label>
          <FieldArray name='phNumbers'>
            {(fieldArrayProps) => {
              const { push, remove, form } = fieldArrayProps
              const { values } = form
              const { phNumbers } = values

              console.log('Form errors', form.errors)
              // console.log('Field Array Props', fieldArrayProps)

              return (
                <div>
                  {phNumbers.map((phNumber, index) => (
                    <div key={index}>
                      <Field name={`phNumbers[${index}]`} />
                      {index > 0 && (
                        <button type='button' onClick={() => remove(index)}> - </button>
                      )}
                      <button type='button' onClick={() => push('')}> + </button>
                    </div>
                  ))}
                </div>
              )
            }}
          </FieldArray>
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  )
}

export default YouTubeForm