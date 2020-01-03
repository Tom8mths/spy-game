import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

// The `withStyles()` higher-order component is injecting a `classes`
// prop that is used by the `Button` component.
const StyledButton = withStyles({
  root: {
    background: "linear-gradient(45deg, #ff3366 30%, #c93058 90%)",
    borderRadius: 5,
    border: 0,
    color: "white",
    height: 40,
    padding: "0 30px"
  },
  label: {
    textTransform: "capitalize"
  }
})(Button);

export default function ClassesShorthand({
  type,
  onClick,
  text,
  variant = "contained",
  fullWidth,
  maxLength
}) {
  return (
    <StyledButton
      variant={variant}
      color="secondary"
      type={type}
      onClick={onClick}
      fullWidth={fullWidth}
      inputProps={{
        maxLength
      }}
    >
      {text}
    </StyledButton>
  );
}
