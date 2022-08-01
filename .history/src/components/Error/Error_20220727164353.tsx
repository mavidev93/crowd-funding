import { ErrorMessage } from 'formik'
import React from 'react'

type Props = {
    errorMessage:string
}

const Error = ({errorMessage}: Props) => {
  return (
    <p >{ErrorMessage}</p>
  )
}

export default Error