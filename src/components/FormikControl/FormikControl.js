import React from 'react'
import Input from '../Input/Input';
import TextArea from '../TextArea/TextArea';
import Select from '../Select/Select';
import Radio from '../Radio/Radio';
import Checkbox from '../Checkbox/Checkbox';

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
      return <Radio {...rest} />
    case 'checkbox':
      return <Checkbox {...rest} />
    case 'date':
    default: return null
  }
}

export default FormikControl
