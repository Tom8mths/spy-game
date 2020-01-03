import React from "react";
import PropTypes from "prop-types";

import { StyledTextField } from "./style";

export default function Input({
  label,
  variant,
  type,
  onChange,
  fullWidth,
  autoFocus,
  required,
  maxLength
}) {
  return (
    <StyledTextField
      label={label}
      variant={variant}
      type={type}
      color="secondary"
      onChange={onChange}
      fullWidth={fullWidth}
      autoFocus={autoFocus}
      required={required}
      inputProps={{
        maxLength
      }}
    />
  );
}

Input.defaultProps = {
  onChange: () => {},
  fullWidth: false,
  autoFocus: false,
  required: false,
  maxLength: 255
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  fullWidth: PropTypes.bool,
  autoFocus: PropTypes.bool,
  required: PropTypes.bool,
  maxLength: PropTypes.number
};
