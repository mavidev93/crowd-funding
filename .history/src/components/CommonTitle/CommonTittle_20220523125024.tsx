
//Third Party
import {Typography,TypographyTypeMap} from '@mui/material'

type Props = {
    text:string;
    className?:string;
    variant?:TypographyTypeMap['props']['variant']
    component?:TypographyTypeMap['']
 }

function CommonTittle({text,className,variant,component}: Props) {
  return (
    <Typography className={className} gutterBottom variant={variant} component={component}>
    featured project
  </Typography>
  )
}

export default CommonTittle
