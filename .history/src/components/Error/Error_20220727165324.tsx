import { ErrorMessage } from 'formik'
import React from 'react'

type Props = {
    errorMessage:string
}

const Error = ({errorMessage}: Props) => {
  return (
    <ErrorMessage component='div' classname='text-red'/>
  )
}

export default Error