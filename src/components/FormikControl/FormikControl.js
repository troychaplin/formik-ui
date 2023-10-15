import React from 'react'
import Input from '../Input/Input';
import TextArea from '../TextArea/TextArea';
import Select from '../Select/Select';

function FormikControl(props) {
  const { control, ...rest } = props;
  
  switch(control) {
    case 'input':
      return <Input {...rest} />
    case 'textarea':
      return <TextArea {...rest} />
      case 'select':
      return <Select {...rest} />
    case 'radio':
    case 'checkbox':
    case 'date':
    default: return null
  }
}

export default FormikControl
