import { ErrorMessage } from 'formik'
import React from 'react'

type Props = {
    name:string
}

const CustomError = ({name}: Props) => {
  return (
    <ErrorMessage name={name} component='div' className='text-red-600 text-sm capitalize '/>
  )
}

export default CustomError