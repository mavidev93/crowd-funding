import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

type Props={className:string}

export default function CustomLinerProgress() {
  return (
    <Box className='' sx={{ width: '100%' }}>
      <LinearProgress />
    </Box>
  );
}
