import { ErrorMessage } from 'formik'
import React from 'react'

type Props = {
    name:string
}

const CustomeError = ({name}: Props) => {
  return (
    <ErrorMessage name={name} component='div' className='text-red-500'/>
  )
}

export default CustomeError