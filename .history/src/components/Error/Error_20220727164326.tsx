import React from 'react'

type Props = {
    errorMessage:string
}

const Error = ({errorMessage}: Props) => {
  return (
    <p>Error</p>
  )
}

export default Error