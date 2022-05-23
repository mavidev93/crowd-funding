
//Third Party
import {Typography} from '@mui/material'

type Props = {
    text:string;
    className:string;
    variant:

 }

function CommonTittle({}: Props) {
  return (
    <Typography className="text-sm	" gutterBottom variant="h6" component="div">
    featured project
  </Typography>
  )
}

export default CommonTittle
