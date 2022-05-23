import React from 'react'
import Button from '@mui/material/Button';

interface CommonButtonPropTypes{
    text:string;
    variant:string;
    sx?:{}
}

const CommonButton = ({text,variant,sx}:CommonButtonPropTypes) => {
  return (
    <Button >
{text}

    </Button>
  )
}

export default CommonButton