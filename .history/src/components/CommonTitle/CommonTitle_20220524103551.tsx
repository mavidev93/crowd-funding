/** @format */

//Third Party
import { Typography, TypographyTypeMap } from "@mui/material";

type Props = {
  text: string;
  className?: string;
  variant?: TypographyTypeMap["props"]["variant"];
  component?: React.ElementType;
};

function CommonTitle({ text, className, variant, component }: Props) {
  return (
    <Typography
      className={`${className`}
      gutterBottom
      variant={variant}
      component={component ? component : "div"}
    >
      {text}
    </Typography>
  );
}

export default CommonTitle;
