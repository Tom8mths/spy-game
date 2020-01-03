import styled from "styled-components";

import TextField from "@material-ui/core/TextField";

export const StyledTextField = styled(TextField)`
  margin: 5px 0 !important;
  .MuiInputLabel-root {
    color: #868686;
  }

  .MuiInputBase-input {
    color: #868686;
  }

  .MuiOutlinedInput-root {
    fieldset {
      border-color: #868686;
    }
    &:hover fieldset {
      border-color: #f50057;
    }
    &.Mui-focused fieldset {
      border-color: #f50057;
    }
  }
`;
