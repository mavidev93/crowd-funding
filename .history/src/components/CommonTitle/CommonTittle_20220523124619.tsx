
//Third Party
import {Typography,TypographyTypeMap} from '@mui/material'

type Props = {
    text:string;
    className:string;
    variant?:TypographyTypeMap['props']['variant']
    component?:React.ElementType;
 }

function CommonTittle({text,className,variant,component}: Props) {
  return (
    <Typography className="text-sm	" gutterBottom variant="h6" component="div">
    featured project
  </Typography>
  )
}

export default CommonTittle
