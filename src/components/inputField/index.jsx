import { Field } from 'formik'
import React from 'react'

const InputFieldPoll = (props) => {
    const {type,placeholder,name,autoComplete,className}=props
  return (
    <Field type={type} name={name} placeholder={placeholder} className={className} autoComplete={autoComplete}/>
  )
}

export default InputFieldPoll