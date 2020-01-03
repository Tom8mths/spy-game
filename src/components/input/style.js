import styled from "styled-components";

import TextField from "@material-ui/core/TextField";

export const StyledTextField = styled(TextField)`
  border-radius: 5 !important;
  margin: 5px 0 !important;
  .MuiInputLabel-root {
    color: #707070;
  }

  .MuiInputBase-input {
    color: #707070;
  }

  .MuiOutlinedInput-root {
    fieldset {
      border-color: #707070;
    }
    &:hover fieldset {
      border-color: #ff3366;
    }
    &.Mui-focused fieldset {
      border-color: #ff3366;
    }
  }
`;
