import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

type Props={className:string}

export default function CustomLinerProgress({className}:Props) {
  return (
    <Box className={` ${className} bg-green-600`} sx={{ width: '100%' }}>
      <LinearProgress ' />
    </Box>
  );
}
