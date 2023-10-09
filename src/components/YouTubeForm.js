import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
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
  phoneNumbers: ['','']
}

const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email format').required('Required'),
})

const onSubmit = values => {
  console.log('Form values', values)
}

function YouTubeForm() {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
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
          <Field name='email'>
            {(props) => {
              const { field, form, meta } = props
              console.log('Render props', props)
              return (
                <>
                  <label htmlFor='email'>Email</label>
                  <input type='text' id='email' {...field} />
                  {meta.touched && meta.error ? <div>{meta.error}</div> : null}
                </>
              )
            }}
          </Field>
          <ErrorMessage name='email'>
            {(errorMsg) => <div className='error'>{errorMsg}</div>}
          </ErrorMessage>
        </div>

        <div className="form-control">
          <label htmlFor='comments'>Comments</label>
          <Field
            as='textarea'
            id='comments'
            name='comments'
          />
          <ErrorMessage name='comments' component='div' />
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

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  )
}

export default YouTubeForm